import {deepAssign, isObject, addClassName, removeClassName, setStyle, $} from 'chimee-helper';
import Base from './base.js';

/**
 * play 配置
 */

const defaultOption = {
  tag: 'chimee-control-state',
  html: `
    <svg viewBox="0 0 32 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
    this.setPath(nextState);
  }

  click (e) {
    const nextState = this.state === 'play' ? 'pause' : 'play';
    this.changeState(nextState);
    this.parent.$emit(nextState);
  }

  setPath (state) {
      setTimeout(() => {
        if(state === 'play') {
          this.$left.attr('d', 'M17.4114066,6.89950148 L17.4114066,6.89392417 C15.7570294,5.77917031 10.9147446,3 9,3 C6.01092176,3 4,5.08009172 4,8 L4,34 C4.60438334,35.6487388 6.18063207,38 9,38 C9.48791025,38 11.2073484,37.504543 12.9791197,36.7976217 C12.992711,36.9303976 13,37 13,37 L14.5443742,36.1175005 C15.3193648,35.7489622 16.0321558,35.3539987 16.5707148,34.9595915 L34,25 C35.3469912,23.6665144 36.9556616,21.000521 35,18 C35,18 30.3292391,14.9648826 25.2345963,11.746151 C22.5353079,10.0407744 19.7170279,8.28385388 17.4114066,6.89950148 Z');
          this.$right.attr('d', 'M17.4114066,6.89950148 L17.4114066,6.89392417 C15.7570294,5.77917031 10.9147446,3 9,3 C6.01092176,3 4,5.08009172 4,8 L4,34 C4.60438334,35.6487388 6.18063207,38 9,38 C9.48791025,38 11.2073484,37.504543 12.9791197,36.7976217 C12.992711,36.9303976 13,37 13,37 L14.5443742,36.1175005 C15.3193648,35.7489622 16.0321558,35.3539987 16.5707148,34.9595915 L34,25 C35.3469912,23.6665144 36.9556616,21.000521 35,18 C35,18 30.3292391,14.9648826 25.2345963,11.746151 C22.5353079,10.0407744 19.7170279,8.28385388 17.4114066,6.89950148 Z');
        }else{
          this.$left.attr('d', 'M6,6.99619806 C6,4.78915882 7.79535615,3 10,3 C12.209139,3 14,4.78655078 14,6.991377 L14,20.302971 L14,33.0006455 C14,35.209428 12.2046438,37 10,37 C7.790861,37 6,35.2113105 6,33.0036646 L6,20.1368319 L6,6.99619806 Z M26,7.00647303 C26,4.79375907 27.7953562,3 30,3 C32.209139,3 34,4.79349214 34,7.00706555 L34,19.9084454 L34,32.9927898 C34,35.2059109 32.2046438,37 30,37 C27.790861,37 26,35.2146256 26,32.9967878 L26,19.5507423 L26,7.00647303 Z');
          this.$right.attr('d', 'M6,6.99619806 C6,4.78915882 7.79535615,3 10,3 C12.209139,3 14,4.78655078 14,6.991377 L14,20.302971 L14,33.0006455 C14,35.209428 12.2046438,37 10,37 C7.790861,37 6,35.2113105 6,33.0036646 L6,20.1368319 L6,6.99619806 Z M26,7.00647303 C26,4.79375907 27.7953562,3 30,3 C32.209139,3 34,4.79349214 34,7.00706555 L34,19.9084454 L34,32.9927898 C34,35.2059109 32.2046438,37 30,37 C27.790861,37 26,35.2146256 26,32.9967878 L26,19.5507423 L26,7.00647303 Z');
        }
      }, 140)
  }
}
