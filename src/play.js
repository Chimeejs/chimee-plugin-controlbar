import {deepAssign, isObject, addClassName, removeClassName, setStyle} from 'chimee-helper';
import Base from './base.js';

/**
 * play 配置
 */

const defaultOption = {
  tag: 'chimee-control-state',
  html: `
    <svg viewBox="0 0 206 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g fill="#ffffff" stroke="#ffffff">
        <path class="left"></path>
        <path class="right"></path>
      </g>
    </svg>
  `,
  defaultEvent: {
    click: 'click'
  }
};

export default class Play extends Base {
  constructor (parent, option) {
    super(parent);
    this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    this.init();
  }

  init () {
    super.create();
    // addClassName(this.$dom, 'flex-item');
    addClassName(this.$dom, 'chimee-component');
    // 用户自定义配置
    this.option.width && setStyle(this.$dom, 'width', this.option.width);
    this.changeState('pause');
  }

  changeState (state) {
    const nextState = state === 'play' ? 'pause' : 'play';
    this.state = state;
    addClassName(this.parent.$dom, nextState);
    removeClassName(this.parent.$dom, state);
  }

  click (e) {
    const nextState = this.state === 'play' ? 'pause' : 'play';
    this.changeState(nextState);
    this.parent.$emit(nextState);
  }
}
