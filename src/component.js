import {$} from 'chimee-helper';
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
    this.$dom = $(this.$dom);
    $.addClass(this.$dom, 'chimee-flex-component');
  }
}
