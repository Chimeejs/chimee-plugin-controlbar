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
    chimeePluginControlbar.name // 或者 'chimeeControl'
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

### 具体的参数配置

#### name
  * 类型： string
  * 含义： 该插件名字， 在 chimee 中使用需要名字，需要唯一对应
  * 值： 'chimeeControl' | chimeePluginControlbar.name
  * 必需

#### majorColor
  * 类型： string
  * 作用范围：
    * 该插件中，所有的 svg 图
    * 播放进度条，进度颜色
    * 声音控制条，音量颜色
  * 可选值： 十六进制颜色('#fff')
  * 默认值： '#de698c'
  * 非必需

#### hoverColor
  * 类型： string
  * 作用范围：
    * 该插件中，所有的 svg 图
  * 可选值： 十六进制颜色('#fff')
  * 默认值： '#4c4c4c'
  * 非必需

#### children
  * 类型： Object
  * 含义： 配置子组件是否展示／展示方式，还可以自己扩展子组件
  * 非必需
  * 目前支持的组件： play, progressTime, progressBar, volume, screen, clarity
  
##### 目前支持的组件及配置

  * play
    * 类型： Object
    * 含义： 配置播放暂停键 icon 及事件
    * 默认： {}
    * 可配置属性：
      * bitmap: true/ false 是否是位图，默认 false， 如果用户采用位图的话，则把当前的默认 svg 都清空掉， 用户通过 css background 来自己设置图片
      * icon: play / pause 图标， 支持 svg 图
      * animate: 当前是一个 svg path 动画，可以传 path 来实现你想要的动画
      * event: 绑定 dom 事件， this 指向这个插件， 通过 this.$dom 可以拿到 dom 节点
      * 注意： icon animate bitmap 都是配置图的。 bitmap 优先。其次 icon ，最后取 animate 中的值

    配置 🌰

    ```javascirpt
    {
      // 可以传两个 icon 来切换播放暂停状态
      icon: {
        play: '',
        pause: ''
      },
      // 当前是一个 svg path 动画，可以传 path 来实现你想要的动画
      animate: {
        path: {
          play: {
            left: ''
          },
          pause: {
            left: ''
          }
        }
      },
      // 可以指定 event 来绑定一些事件，默认 this 是该插件，而不是 dom
      event: {
        click () {
          console.log('');
        }
      }
    }
    ```

  * progressTime
    * 类型： Object
    * 含义： 时间展示组件，用来展示播放时间／开播时间／视频总时长
    * 默认： {}
    * 可配置属性：
      * event: 绑定 dom 事件， this 指向这个插件， 通过 this.$dom 可以拿到 dom 节点

    配置 🌰

    ```javascirpt
    {
      // 可以指定 event 来绑定一些事件，默认 this 是该插件，而不是 dom
      event: {
        click () {
          console.log('');
        }
      }
    }
    ```

  * progressBar
    * 类型： Object | false
    * 含义： 进度条控制组件
    * 默认： {}, 属性值为 false 的时候，表示，他是一个占位符，不现实，可以区分左右，目前只有 progressbar 有这个功能
    * 可配置属性：
      * layout: 有两种位置， 一是，居中布局。二是，位于整个控制条顶部。
        * 可选值： 'top' ／ 'baseline'(默认)
      * event: 绑定 dom 事件， this 指向这个插件， 通过 this.$dom 可以拿到 dom 节点

    配置 🌰

    ```javascirpt
    {
      layout: 'top',

      // 可以指定 event 来绑定一些事件，默认 this 是该插件，而不是 dom
      event: {
        click () {
          console.log('');
        }
      }
    }
    ```

  * volume
    * 类型： Object
    * 含义： 声音控制组件
    * 默认： {}
    * 可配置属性：
      * layout: 有两种位置， 一是，垂直。二是，水平。
        * 可选值： 'vertical' ／ 'horizonal'(默认)
      * bitmap: true/ false 是否是位图，默认 false，如果用户采用位图的话，则把当前的默认 svg 都清空掉， 用户通过 css background 来自己设置图片
      * icon: 音量按钮的三个状态按钮，mute / low ／ high 最少写前两个
      * [暂时不支持]animate: 也可以配置，然后自己通过 css 来控制
      * event: 绑定 dom 事件， this 指向这个插件， 通过 this.$dom 可以拿到 dom 节点
      * 注意： icon bitmap 都是配置图的。 bitmap 优先。其次 icon

    配置 🌰

    ```javascirpt
    volume: {
      icon: {
        low: ``,
        mute: ``,
        high: ``
      },
      layout: 'vertical',

      // 可以指定 event 来绑定一些事件，默认 this 是该插件，而不是 dom
      event: {
        click () {
          console.log('');
        }
      }
    },
    ```

  * screen
    * 类型： Object
    * 含义： 配置全屏／非全屏 icon 及事件
    * 默认： {}
    * 可配置属性：
      * bitmap: true/ false 是否是位图，默认 false，如果用户采用位图的话，则把当前的默认 svg 都清空掉， 用户通过 css background 来自己设置图片
      * icon: full / small 图标， 支持 svg 图
      * event: 绑定 dom 事件， this 指向这个插件， 通过 this.$dom 可以拿到 dom 节点
      * 注意： icon bitmap 都是配置图的。 bitmap 优先。其次 icon

    配置 🌰

    ```javascirpt
    {
      // 可以传两个 icon 来切换播放暂停状态
      icon: {
        full: '',
        small: ''
      },

      // 可以指定 event 来绑定一些事件，默认 this 是该插件，而不是 dom
      event: {
        click () {
          console.log('');
        }
      }
    }
    ```

  * clarity
    * 类型： Object
    * 含义： 切换清晰度组件
    * 默认： {}
    * 可配置参数
      * list: []
      * duraion: Number 默认 10 秒， 单位 ： 秒， [chimee duration 定义](https://github.com/chimeejs/chimee/blob/master/doc/zh-cn/plugin-api.md#-silentload)
      * increment: Number 默认 0 秒， 单位 ： 秒， [chimee duration 定义](https://github.com/chimeejs/chimee/blob/master/doc/zh-cn/plugin-api.md#-silentload)
    * 注意空数组时不展示

    配置 🌰

    ```javascirpt
    {
      list: [
        {name: '标清', src:''},
        {name: '高清', src: ''},
        {name: '原画', src: ''}
      ],
      // 可以指定 event 来绑定一些事件，默认 this 是该插件，而不是 dom
      event: {
        click () {
          console.log('');
        }
      }
    }
    ```

    直播切流测试： http://chimee.org/demo/live-clarity.html

    点播切流测试： http://chimee.org/demo/clarity.html
  
  * 自定义组件
    * 类型： Object
    * 含义： 自定义组件
    * 可配置属性：
      * tag: 自定义标签名
      * html: 自定义标签中的 html 内容
      * event: 绑定 dom 事件， this 指向这个插件， 通过 this.$dom 可以拿到 dom 节点
    * 注意： css 写在自己项目中就好了

    配置 🌰

    ```javascirpt
    {
      tag: '',
      html: ``,
      // 可以指定 event 来绑定一些事件，默认 this 是该插件，而不是 dom
      event: {
        click () {
          console.log('');
        }
      }
    }
    ```

##### 组件相关问题

* Q: 子组件的默认顺序是什么？

  A: 在 children 没有配置的情况下会采用下面的顺序
  
    * 注意：根据 chimee 的参数 isLive 来判断是否是直播还是点播
    
    * 直播： play, progressTime, volume, screen
    
    * 点播： play, progressTime, progressTime, volume, screen
    
    * 如果用户配置了， 则按照用户的配置走，不论是否是直播还是点播

* Q: 我可以控制顺序吗？

  A: 在 children 对象中，属性的书写顺序就是渲染顺序
    
    * 注意， progressbar 可以作为一个占位符存在

* Q: 为什么我配置了一个组件后，其他默认组件就都不存在了？

  A: 假如 children 配置后， 会读 children 的属性，并渲染， 不会补充其他组件，所以，需要你把所有的组件都写.


## 最后

欢迎各位大佬使用。有什么问题／建议，随时提。
