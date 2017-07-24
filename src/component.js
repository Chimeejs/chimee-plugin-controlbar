import {addClassName, setStyle} from 'chimee-helper';
import Base from './base.js';

/**
 * 自定义组件配置
 */

export default class Component extends Base {
  constructor (parent, option) {
    super(parent);
    this.option = option;
    this.init();
  }

  init () {
    super.create();
    addClassName(this.$dom, 'chimee-component');
    // 用户自定义配置
    const width = this.option.width || '2em';
    setStyle(this.$dom, 'width', width);
  }
}
