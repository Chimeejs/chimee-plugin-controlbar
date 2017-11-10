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
  }

  createEl () {
    this.$dom = document.createElement(this.option.tag);
    this.$dom.innerHTML = this.option.html;
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
      this[key] = bind(this.option.event[item], this);
      addEvent(this.$dom, item, this[key], false, false);
    });
  }

  removeAllEvent () {
    this.option.defaultEvent && Object.keys(this.option.defaultEvent).forEach(item => {
      const key = this.option.defaultEvent[item];
      this[key] = bind(this[key], this);
      removeEvent(this.$dom, item, this[key], false, false);
    });
    this.option.event && Object.keys(this.option.event).forEach(item => {
      const key = '__' + item;
      this[key] = bind(this.option.event[item], this);
      removeEvent(this.$dom, item, this[key], false, false);
    });
  }

}
