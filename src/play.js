import {deepAssign, isObject, addClassName, removeClassName, setStyle, $} from 'chimee-helper';
import Base from './base.js';

/**
 * play 配置
 */

const defaultOption = {
  tag: 'chimee-control-state',
  defaultHtml: `
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
    if(this.option.icon) {
      this.$dom.innerHTML = '';
      setStyle(this.$dom, {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: `${this.option.width} ${this.option.height}`
      });
    }
    addClassName(this.$dom, 'chimee-component');
    this.$left = $(this.$dom).find('.left');
    this.$right = $(this.$dom).find('.right');
    // 用户自定义配置
    this.option.width && setStyle(this.$dom, 'width', this.option.width);
    this.changeState('pause');
  }

  changeState (state) {
    const nextState = state === 'play' ? 'pause' : 'play';
    this.state = state;
    addClassName(this.parent.$dom, nextState);
    removeClassName(this.parent.$dom, state);
    if(this.option.icon) {
      setStyle(this.$dom, {
        backgroundImage: `url(${this.option.icon[nextState]})`
      });
    }else{
      this.setPath(nextState);
    }
  }

  click (e) {
    const nextState = this.state === 'play' ? 'pause' : 'play';
    this.changeState(nextState);
    this.parent.$emit(nextState);
  }

  setPath (state) {
    this.$left.attr('d', 'M0.921875,0.265625L0.921875,197.074852L79.3611755,172.829747L79.3611755,26.9775543Z');
    this.$right.attr('d', 'M126.921875,22.56643L126.921875,182.056305L205.361168,144.776862L205.361168,56.6476783Z');
    setTimeout(() => {
      if(state === 'play') {
        this.$left.attr('d', 'M0.921875,0.265625L0.921875,197.074852L95.7890625,149L96.2929688,49Z');
        this.$right.attr('d', 'M90.3142151,45.9315226L90.3142151,151.774115L201.600944,99.9938782L201.600944,98.0237571Z');
      }else{
        this.$left.attr('d', 'M0.921875,1.265625L0.921875,198.074852L79.3611677,198.074852L79.3611677,0.258923126Z');
        this.$right.attr('d', 'M126.921875,1.265625L126.921875,198.074852L205.361168,198.074852L205.361168,0.258923126Z');
      }
    }, 140);
  }
}
