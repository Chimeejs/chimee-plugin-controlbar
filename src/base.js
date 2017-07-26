import {addEvent, removeEvent} from 'chimee-helper';
import {bind} from 'toxic-utils';

export default class Base {
  constructor (parent) {
    this.parent = parent;
  }

  create () {
    this.createEl();
    this.addAllEvent();
  }

  destroy () {
    this.removeAllEvent();
    this.parent.$wrap.removeChild(this.$dom);
  }

  createEl () {
    this.$dom = document.createElement(this.option.tag);
    this.$dom.innerHTML = this.option.html || '';
    console.log(this.parent.$wrap, this.parent)
    this.parent.$wrap.appendChild(this.$dom);
  }

  addAllEvent () {
    this.option.defaultEvent && Object.keys(this.option.defaultEvent).forEach(item => {
      const key = this.option.defaultEvent[item];
      this[key] = bind(this[key], this);
      addEvent(this.$dom, item, this[key], false, false);
    });
    this.option.event && Object.keys(this.option.event).forEach(item => {
      const key = '__' + item;
      this[key] = this.option.event[item];
      addEvent(this.$dom, item, this[key], false, false);
    });
  }

  removeAllEvent () {
    this.option.defaultEvent && Object.keys(this.option.defaultEvent).forEach(item => {
      removeEvent(this.$dom, item, this[this.option.defaultEvent[item]], false, false);
    });
    this.option.event && Object.keys(this.option.event).forEach(item => {
      const key = '__' + item;
      // this[key] = this.option.event[item];
      removeEvent(this.$dom, item, this[key], false, false);
    });
  }
}
