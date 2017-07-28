import {deepAssign, isObject, addClassName, removeClassName, setStyle, $} from 'chimee-helper';
import Base from './base.js';

function getComputedStyleNum (elem, prop) {
  return parseInt(getComputedStyle(elem)[prop]);
}

/**
 * play 配置
 */

const defaultOption = {
  tag: 'chimee-clarity',
  width: '2em',
  defaultHtml: `
    <chimee-clarity-text></chimee-clarity-text>
    <chimee-clarity-list>
      <ul></ul>
      <i class="chimee-clarity-list-arrow">
        <svg viewBox="0 0 115 6"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Group-3-Copy" fill="#57B0F6">
            <polygon id="Path-2" points="0.0205224145 0.0374249581 0.0205224145 2.12677903 53.9230712 2.12677903 57.1127727 5.3468462 60.2283558 2.12677903 113.820935 2.12677903 113.820935 0.0374249581"></polygon>
          </g>
        </svg>
      </i>
    </chimee-clarity-list>
  `,
  defaultEvent: {
    mouseenter: 'mouseenter',
    mouseleave: 'mouseleave',
    click: 'click'
  }
};

export default class Clarity extends Base {
  constructor (parent, option) {
    super(parent);
    this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    this.init();
  }

  init () {
    super.create();
    addClassName(this.$dom, 'chimee-component');

    this.$text = $(this.$dom).find('chimee-clarity-text');
    this.$list = $(this.$dom).find('chimee-clarity-list');
    this.$listUl = this.$list.find('ul');

    // 用户自定义配置
    this.option.width && setStyle(this.$dom, 'width', this.option.width);

    this.initTextList();
    // 读当前 css 设置去配置
    const lineHeight = getComputedStyleNum(this.$listUl.find('li')[0], 'lineHeight');
    const listPaddingBottom = getComputedStyleNum(this.$list[0], 'paddingBottom');
    const listFontSize = getComputedStyleNum(this.$list[0], 'fontSize');
    const ulPaddingTop = getComputedStyleNum(this.$listUl[0], 'paddingTop');
    const ulPaddingBottom = getComputedStyleNum(this.$listUl[0], 'paddingBottom');
    // css
    this.$list.css({
      top:  listFontSize/2 - listPaddingBottom - ulPaddingTop - ulPaddingBottom - this.option.list.length * lineHeight + 'px'
    });
  }

  initTextList () {
    this.option.list.forEach(item => {
      const li = $(document.createElement('li'));
      li.attr('data-url', item.src);
      li.text(item.name);
      if(item.src === this.parent.$videoConfig.src) {
        this.$text.text(item.name);
        li.addClass('active');
      }
      this.$listUl.append(li);
    })
  }

  mouseenter (e) {
    this.$list.css('display', 'inline-block');
  }

  mouseleave (e) {
    this.$list.css('display', 'none');
  }

  click (e) {
    const elem = e.target;
    if(elem.tagName === 'LI') {
      Array.from(elem.parentElement.children).map(item => {
        removeClassName(item, 'active');
      })
      const url = elem.getAttribute('data-url') || '';
      const currentTime = this.parent.currentTime;
      addClassName(e.target, 'active');
      this.$text.text(e.target.textContent);
      this.parent.load(url).then(() => {
        this.parent.currentTime = currentTime;
      });
    }
  }

}
