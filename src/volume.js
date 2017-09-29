import {deepAssign, isObject, addClassName, removeClassName, $, addEvent, removeEvent, setStyle} from 'chimee-helper';
import {autobind} from 'toxic-decorators';
import Base from './base.js';

/**
 * Volume 配置
 */

const defaultOption = {
  tag: 'chimee-volume',
  defaultHtml: `
    <chimee-volume-state>
      <svg viewBox="0 0 107 101" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g class="volume" stroke="#ffffff">
          <polygon class="horn" fill="#ffffff" points="0.403399942 30 27.3842118 30 56.8220589 2.84217094e-14 57.9139815 100 27.3842118 70 0.403399942 70"></polygon>
          <path class="ring1" d="M63,5.00975239 C69.037659,4.78612057 75.9178585,8.40856146 83.6405984,15.877075 C95.2247083,27.0798454 100,34.7975125 100,50.9608558 C100,67.1241991 95.3628694,73.7907482 83.6405984,83.8306724 C75.8257511,90.5239552 68.9455516,94.0320644 63,94.355" fill-opacity="0" stroke-width="10"></path>
          <path class="ring2" d="M65.2173913,29.4929195 C67.8779343,29.3931169 70.9097496,31.0097416 74.3128371,34.3427934 C79.4174684,39.3423712 81.5217391,42.7866154 81.5217391,50 C81.5217391,57.2133846 79.4783502,60.1885354 74.3128371,64.6691576 C70.8691617,67.656239 67.8373465,69.2218397 65.2173913,69.3659595" fill-opacity="0" stroke-width="10"></path>
          <path class="line" d="M4.19119202,3.65220497 L102,96" stroke-width="10"></path>
        </g>
    </svg>
    </chimee-volume-state>
    <chimee-volume-bar>
      <chimee-volume-bar-bg></chimee-volume-bar-bg>
      <chimee-volume-bar-all>
        <chimee-volume-bar-ball></chimee-volume-bar-ball>    
      </chimee-volume-bar-all>
      <chimee-volume-bar-track></chimee-volume-bar-track>
    </chimee-volume-bar>
  `,
  defaultEvent: {
    mousedown: 'mousedown'
  }
};

const getElementPath = function (elem) {
  const path = [];
  if(elem === null) return path;
  path.push(elem);
  while(elem.parentNode !== null) {
    elem = elem.parentNode;
    path.push(elem);
  };
  return path;
};

export default class Volume extends Base {
  constructor (parent, option) {
    super(parent);
    this.parent.preVolume = 0;
    this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    this.init();
  }

  inited () {
    this.update();
  }

  init () {
    super.create();
    this.$state = $('chimee-volume-state', this.$dom);
    if(this.option.icon) {
      this.$state.html('');
      this.$state.css({
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: `${this.option.width} ${this.option.height}`
      });
    }
    this.$bar = $('chimee-volume-bar', this.$dom);
    this.$all = $('chimee-volume-bar-all', this.$dom);
    this.$bg = $('chimee-volume-bar-bg', this.$dom);
    this.$ball = $('chimee-volume-bar-ball', this.$dom);
    addClassName(this.$dom, 'chimee-component');
    this.changeState();
    // 用户自定义配置
    this.option.width && setStyle(this.$dom, 'width', this.option.width);
  }

  changeState () {
    if(this.parent.volume === 0) {
      this.state = 'mute';
    }else if(this.parent.volume > 0 && this.parent.volume <= 0.5) {
      this.state = 'low';
    }else if(this.parent.volume > 0.5 && this.parent.volume <= 1) {
      this.state = 'high';
    }
    removeClassName(this.$dom, 'mute low high');
    addClassName(this.$dom, this.state);
    if(this.option.icon) {
      this.$state.css({
        backgroundImage: `url(${this.option.icon[this.state]})`
      });
    }
  }

  click (e) {
    const path = e.path || getElementPath(e.target);
    if(path.indexOf(this.$state[0]) !== -1) {
      this.stateClick(e);
    }else if(path.indexOf(this.$bar[0]) !== -1) {
      this.barClick(e);
    }
  }

  stateClick () {
    const currentVolume = this.parent.volume;
    this.parent.volume = currentVolume === 0 ? this.parent.preVolume : 0;
    this.parent.preVolume = currentVolume;
    this.changeState();
  }

  barClick (e) {
    if(this.inBall) return;
    const volume = e.offsetX / this.$bg[0].offsetWidth;
    this.parent.volume = volume < 0 ? 0 : volume > 1 ? 1 : volume;
    this.update();
  }

  mousedown (e) {
    const ballRect = this.$ball[0].getClientRects()[0];
    const ballLeft = ballRect.left;
    const ballRight = ballRect.left + ballRect.width;
    this.inBall = e.clientX <= ballRight && e.clientX >= ballLeft;
    this.click(e);
    this.startX = e.clientX;
    this.startVolume = this.parent.volume;
    addEvent(window, 'mousemove', this.draging);
    addEvent(window, 'mouseup', this.dragEnd);
    addEvent(window, 'contextmenu', this.dragEnd);
  }

  /**
   * 更新声音条
   */
  update () {
    this.changeState();
    this.$all.css('width', `${this.parent.volume * 100}%`);
  }

  /**
   * 开始拖拽
   * @param {EventObject} e 鼠标事件
   */
  @autobind
  draging (e) {
    this.endX = e.clientX;
    const dragVolume = (this.endX - this.startX) / this.$bg[0].offsetWidth;
    const dragAfterVolume = +(this.startVolume + dragVolume).toFixed(2);
    this.parent.volume = dragAfterVolume < 0 ? 0 : dragAfterVolume > 1 ? 1 : dragAfterVolume;
  }

  /**
   * 结束拖拽
   */
  @autobind
  dragEnd () {
    this.startX = 0;
    this.startVolume = 0;
    removeEvent(window, 'mousemove', this.draging);
    removeEvent(window, 'mouseup', this.dragEnd);
    removeEvent(window, 'contextmenu', this.dragEnd);
  }
}
