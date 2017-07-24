import {deepAssign, isObject, formatTime, addClassName, $} from 'chimee-helper';
import Base from './base.js';

/**
 * progressTime 配置
 */

const defaultOption = {
  tag: 'chimee-progresstime',
  html: `
    <chimee-progresstime-pass>00:00</chimee-progresstime-pass
    ><chimee-progresstime-total
      ><span>/</span
      ><chimee-progresstime-total-value>00:00</chimee-progresstime-total-value>
    </chimee-progresstime-total>
  `,
  defaultEvent: {}
};

export default class ProgressTime extends Base {
  constructor (parent, option) {
    super(parent);
    this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    this.init();
  }

  init () {
    super.create();
    this.$total = $('chimee-progresstime-total-value', this.$dom);
    this.$pass = $('chimee-progresstime-pass', this.$dom);
    addClassName(this.$dom, 'chimee-component');

    // 用户自定义配置
    // this.option.width && setStyle(this.$dom, 'width', this.option.width);
  }

  updatePass () {
    this.$pass.text(formatTime(this.parent.currentTime));
  }

  updateTotal () {
    this.$total.text(formatTime(this.parent.duration));
  }
}
