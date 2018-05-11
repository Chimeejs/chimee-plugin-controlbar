import {deepAssign, isObject, addClassName, removeClassName, setStyle, $} from 'chimee-helper';
import Base from './base.js';

/**
 * playbackrate 配置
 */

const defaultOption = {
  tag: 'chimee-playbackrate',
  width: '4em',
  html: `
    <chimee-playbackrate-text></chimee-playbackrate-text>
    <chimee-playbackrate-list>
      <ul></ul>
      <div class="chimee-playbackrate-list-arrow">
        <svg viewBox="0 0 115 6"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Group-3-Copy" fill="#57B0F6">
            <polygon id="Path-2" points="0.0205224145 0.0374249581 0.0205224145 2.12677903 53.9230712 2.12677903 57.1127727 5.3468462 60.2283558 2.12677903 113.820935 2.12677903 113.820935 0.0374249581"></polygon>
          </g>
        </svg>
      </div>
    </chimee-playbackrate-list>
  `,
  defaultEvent: {
    click: 'click'
  }
};

export default class Playbackrate extends Base {
  constructor (parent, option) {
    super(parent);
    this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    this.init();
  }

  init () {
    super.create();
    addClassName(this.$dom, 'chimee-flex-component');

    this.$text = $(this.$dom).find('chimee-playbackrate-text');
    this.$list = $(this.$dom).find('chimee-playbackrate-list');
    this.$listUl = this.$list.find('ul');

    // 用户自定义配置
    this.option.width && setStyle(this.$dom, 'width', this.option.width);

    this.initTextList();
  }

  initTextList () {
    const length = this.option.list.length;
    let hasRenderDefault = false;
    this.option.list.forEach((item, i) => {
      const li = $(document.createElement('li'));
      li.attr('data-value', item.value);
      li.text(item.name);
      if(item.default || (!hasRenderDefault && i === length - 1)) {
        hasRenderDefault = true;
        !item.default && console.warn('播放速率列表需要给每项配置 `default(boolean)` 来标明是否是默认播放速率');
        this.$text.text(item.name);
        li.addClass('active');
        this.switchPlaybackrate(item.value);
      }
      this.$listUl.append(li);
    });
  }

  click (e) {
    const elem = e.target;
    if(elem.tagName === 'LI') {
      const rate = elem.getAttribute('data-value') || 1;
      this.switchPlaybackrate(rate);
      Array.from(elem.parentElement.children).map(item => {
        removeClassName(item, 'active');
      });
      addClassName(e.target, 'active');
      this.$text.text(e.target.textContent);

    }
  }

  switchPlaybackrate (rate) {
    setTimeout(_ => {
      this.parent.playbackRate = rate;
    }, 0);
  }

}
