# chimee-plugin-controlbar

## install

安装

```shell
# 依赖于 chimee， 首先需要安装 chimee
npm install chimee
# 安装控制条组件
npm install chimee-plugin-controlbar
```

使用

```javascript
import chimee from 'chimee';
import chimeePluginControlbar from 'chimee-plugin-controlbar';

// 安装插件
chimee.install(chimeeControlbar);
const player = new chimee({
  // ...
  // 使用插件
  plugin: [
    chimeePluginControlbar.name
  ]
});
```

**也可以在页面中引用 `/lib/index.browser.js` 然后在页面中使用 chimeePluginControlbar**

## 配置

一个配置 🌰 更详细的配置例子， 可以[参考 /demo/index.html](https://github.com/Chimeejs/chimee-plugin-controlbar/blob/master/demo/index.html)

```javascript
plugin: [{
  name: chimeePluginControlbar.name,
  majorColor: '',
  hoverColor: '',
  children: {
    volume: {
      icon: {
        low: '',
        high: ''
      },
      layout: 'vertical'
    }
  }
}]
```

## 属性

## 目前支持的小组件

1. `play`: 播放控制组件
2. `volume`: 声音控制组件
3. `progressTime`: 时间展示组件，用来展示播放时间／开播时间／视频总时长
4. `progressBar`: 进度条控制组件
  * layout: 
    * `two-line` 进度条在整个进度条的上方， 否则为同一行
5. `screen`: 全屏切换组件
6.  `clarity`: 切换清晰度组件，如果没有给出清晰度列表则不初始化该组件
  * list: 清晰度列表， 包含 `src` 中的 url， 如果没有给出，则不加载这个组件

## 使用方式

1. 默认方式: 目前大部分播放器，最常用的组件的排列方式，分直播／点播两种
* 点播时子组件的排列顺序: 播放控制组件 > 时间控制组件 > 进度条控制组件 > 声音控制组件 > 全屏切换组件
* 直播时子组件的排列顺序: 播放控制组件 > 时间控制组件 > 声音控制组件 > 全屏切换组件

```javascript
const chimee = new Chimee({
  wrapper: '#wrap',
  src: '',
  live: true,
  plugin: ['controlbar']
});
```

2. 自定义: 按照自己的想法，排列已有的组件，也可以新建一个自定义组件，或者更改已有组件的配置

```javascript
    const chimee = new Chimee({
      wrapper: '#wrap',
      src: 'http://cdn.toxicjohann.com/lostStar.mp4',
      plugin: [{
        name: chimeePluginControlbar.name,
        children: {
          play: true,
          progressBar: {
            layout: 'up'
          },
          screen: true
        }
      }],
      controls: true,
      autoplay: false
    });
```


## 注意

1. 这个控制条目前采用 table 布局（稳定／兼容性好）支持ie9.
2. 每个组件都有自己的固定宽度（除了进度条控制组件，占据剩余宽度），如果不设置的话， 默认是 2em.

## 如何自定义插件顺序
