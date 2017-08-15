import {deepAssign, isObject, formatTime, addClassName, $, addEvent, removeEvent, setStyle} from 'chimee-helper';
import {autobind} from 'toxic-decorators';
import Base from './base.js';

const defaultOption = {
  tag: 'chimee-progressbar',
  defaultHtml: `
    <chimee-progressbar-wrap>
      <chimee-progressbar-bg class="chimee-progressbar-line"></chimee-progressbar-bg>
      <chimee-progressbar-buffer class="chimee-progressbar-line"></chimee-progressbar-buffer>
      <chimee-progressbar-all class="chimee-progressbar-line">
        <chimee-progressbar-ball></chimee-progressbar-ball>
      </chimee-progressbar-all>
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
    this.$line = $('.chimee-progressbar-line', this.$dom);
    this.$ball = $('chimee-progressbar-ball', this.$dom);
    addClassName(this.$dom, 'chimee-component');

    // css 配置
    !this.visiable && setStyle(this.$dom, 'visibility', 'hidden');
    // this.$line.css({
    //   top: this.$wrap.
    // });
    // 进度条居中布局，还是在上方
    if(this.option.layout === 'two-line') {
      addClassName(this.$dom, 'two-line');
      this.$wrap.css({
        left: -this.$dom.offsetLeft + 'px',
        // top: -this.$ball[0].offsetHeight * 2 + 'px',
        width: this.parent.$dom.offsetWidth + 'px',
        // height: this.$ball[0].offsetHeight * 2 + 'px'
      });
      // this.$line.css({
      //   top: this.$ball[0].offsetHeight + 'px'
      // }) 
      setStyle(this.parent.$wrap, 'paddingTop', this.$ball[0].offsetHeight + 'px');
    }else{
      // this.$line.css({
      //   top: this.$wrap[0].offsetHeight / 2 + 'px'
      // }) 
    }
    this.watch_screen = this.parent.$watch('isFullScreen', () => {
      this.$wrap.css({
        width: this.parent.$dom.offsetWidth + 'px'
      });
    });
    this.addWrapEvent();
  }
  destroy () {
    this.removeWrapEvent();
    this.watch_screen();
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
      buffer = this.parent.buffered.end(0);
    }catch (e) {}
    const bufferWidth = buffer / this.parent.duration * 100 + '%';
    this.$buffer.css('width', bufferWidth);
  }

  /**
   * requestAnimationFrame 来更新进度条, timeupdate 事件
   */
  update () {
    const allWidth = this.$wrap[0].offsetWidth - this.$ball[0].offsetWidth;
    const time = this._currentTime !== undefined ? this._currentTime : this.parent.currentTime;
    const timePer = time ? time / this.parent.duration : 0;
    const timeWidth = timePer * allWidth;
    this.$all.css('width', timeWidth + 'px');
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
    let left = e.layerX - this.$tip[0].offsetWidth / 2;
    const leftBound = this.$wrap[0].offsetWidth - this.$tip[0].offsetWidth;
    left = left < 0 ? 0 : left > leftBound ? leftBound : left;
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
