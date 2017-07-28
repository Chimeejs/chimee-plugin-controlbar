import {deepAssign, isObject, addClassName, removeClassName, addEvent, removeEvent, setStyle} from 'chimee-helper';
import {autobind} from 'toxic-decorators';
import Base from './base.js';

let screenEvent = '';
let currentScreenElement = '';

if(document.webkitCancelFullScreen) {
  screenEvent = 'webkitfullscreenchange';
  currentScreenElement = 'webkitFullscreenElement';
}else if(document.mozCancelFullScreen) {
  screenEvent = 'mozfullscreenchange';
  currentScreenElement = 'mozFullScreenElement';
}else if(document.msExitFullscreen) {
  screenEvent = 'msfullscreenchange';
  currentScreenElement = 'msFullscreenElement';
}else if(document.exitFullscreen) {
  screenEvent = 'fullscreenchange';
  currentScreenElement = 'fullscreenElement';
}

/**
 * Screen 配置
 */

const defaultOption = {
  tag: 'chimee-screen',
  defaultHtml: `
    <chimee-screen-full></chimee-screen-full>
    <chimee-screen-small></chimee-screen-small>
  `,
  defaultEvent: {
    click: 'click'
  }
};

export default class Screen extends Base {
  constructor (parent, option) {
    super(parent);
    this.state = 'small';
    this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    this.init();
  }

  init () {
    super.create();
    if(this.option.icon) {
      this.$dom.innerHTML = '';
      setStyle(this.$dom, {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: `${this.option.width} ${this.option.height}`
      })
    }
    this.changeState(this.state);
    // addClassName(this.$dom, 'flex-item');
    addClassName(this.$dom, 'chimee-component');
    // 用户自定义配置
    this.option.width && setStyle(this.$dom, 'width', this.option.width);
  }

  changeState (state) {
    const removeState = state === 'small' ? 'full' : 'small';
    addClassName(this.parent.$dom, state);
    removeClassName(this.parent.$dom, removeState);
    if(this.option.icon) {
      setStyle(this.$dom, {
        backgroundImage: `url(${this.option.icon[state]})`
      })
    }
  }

  click () {
    let full = false;
    if(this.state === 'small') {
      this.state = 'full';
      full = true;
    }else{
      this.state = 'small';
      full = false;
    }
    this.changeState(this.state);
    this.parent.$fullScreen(full, 'container');
    if(full) {
      addEvent(document, screenEvent, this.screenChange);
    }else{
      removeEvent(document, screenEvent, this.screenChange);
    }
  }
  @autobind
  screenChange () {
    if(document[currentScreenElement]) return;
    this.state = 'small';
    this.changeState('small');
    this.parent.$fullScreen(false, 'container');
  }
}
