import {deepAssign, isObject, formatTime, addClassName, $, addEvent, removeEvent, setStyle} from 'chimee-helper';
import {autobind} from 'toxic-decorators';
import Base from './base.js';

/**
 * progressBar 配置
 */

const defaultOption = {
  tag: 'chimee-progressbar',
  html: `
    <chimee-progressbar-wrap>
      <chimee-progressbar-bg></chimee-progressbar-bg>
      <chimee-progressbar-buffer></chimee-progressbar-buffer>
      <chimee-progressbar-all></chimee-progressbar-all>
      <chimee-progressbar-tip></chimee-progressbar-tip>
    </chimee-progressbar-wrap>
  `,
  defaultEvent: {
  }
};

export default class ProgressBar extends Base {
  constructor (parent, option) {
    super(parent);
    this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    this.visiable = option !== false;
    this.init();
  }

  init () {
    super.create();
    this.$wrap = $('chimee-progressbar-wrap', this.$dom);
    this.$buffer = $('chimee-progressbar-buffer', this.$dom);
    this.$all = $('chimee-progressbar-all', this.$dom);
    this.$tip = $('chimee-progressbar-tip', this.$dom);
    this.$track = $('chimee-progressbar-track', this.$dom);
    addClassName(this.$dom, 'chimee-component');
    !this.visiable && setStyle(this.$dom, 'visibility', 'hidden');
    this.addWrapEvent();
  }
  destroy () {
    this.removeWrapEvent();
    super.destroy();
  }
  addWrapEvent () {
    this.$wrap.on('mousedown', this.mousedown);
    this.$wrap.on('mouseenter', this.mouseenter);
  }
  removeWrapEvent () {
    this.$wrap.off('mousedown', this.mousedown);
    this.$wrap.off('mouseenter', this.mouseenter);
  }

  /**
   * 缓存进度条更新 progress 事件
   */
  progress () {
    let buffer = 0;
    try{
      const bufferLength = this.parent.buffered.length;
      buffer = this.parent.buffered.end(bufferLength);
    }catch (e) {}

    const bufferWidth = buffer / this.parent.duration * 100 + '%';
    this.$buffer.css('width', bufferWidth);
  }

  /**
   * requestAnimationFrame 来更新进度条, timeupdate 事件
   */
  update () {
    const time = this._currentTime !== undefined ? this._currentTime : this.parent.currentTime;
    const timeWidth = time ? time / this.parent.duration * 100 + '%' : 0;
    this.$all.css('width', timeWidth);
  }
  @autobind
  mousedown (e) {
    if(e.target === this.$tip[0]) return;
    this._currentTime = this.parent.currentTime = e.layerX / this.$wrap[0].offsetWidth * this.parent.duration;
    this.update();
    this.startX = e.clientX;
    this.startTime = this.parent.currentTime;
    addEvent(window, 'mousemove', this.draging);
    addEvent(window, 'mouseup', this.dragEnd);
    addEvent(window, 'contextmenu', this.dragEnd);
  }

  /**
   * 开始拖拽
   * @param {EventObject} e 鼠标事件
   */
  @autobind
  draging (e) {
    this.endX = e.clientX;
    const dragTime = (this.endX - this.startX) / this.$wrap[0].offsetWidth * this.parent.duration;
    const dragAfterTime = +(this.startTime + dragTime).toFixed(2);
    this._currentTime = dragAfterTime < 0 ? 0 : dragAfterTime > this.parent.duration ? this.parent.duration : dragAfterTime;
    this.update();
  }

  /**
   * 结束拖拽
   */
  @autobind
  dragEnd () {
    this.startX = 0;
    this.startTime = 0;
    this.parent.currentTime = this._currentTime;
    this._currentTime = undefined;
    removeEvent(window, 'mousemove', this.draging);
    removeEvent(window, 'mouseup', this.dragEnd);
    removeEvent(window, 'contextmenu', this.dragEnd);
  }
  @autobind
  mouseenter () {
    this.$wrap.on('mousemove', this.tipShow);
    this.$wrap.on('mouseleave', this.tipEnd);
  }

  @autobind
  tipShow (e) {
    if(e.target === this.$tip[0]) return;
    let time = e.layerX / this.$wrap[0].offsetWidth * this.parent.duration;
    time = time < 0 ? 0 : time > this.parent.duration ? this.parent.duration : time;
    const tipContent = formatTime(time);
    const left = e.layerX - this.$tip[0].offsetWidth / 2;
    this.$tip.text(tipContent);
    this.$tip.css('display', 'inline-block');
    this.$tip.css('left', `${left}px`);
  }
  @autobind
  tipEnd () {
    this.$wrap.off('mousemove', this.tipShow);
    this.$wrap.off('mouseleave', this.tipEnd);
    this.$tip.css('display', 'none');
  }

}
