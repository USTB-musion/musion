### 写在前面
现在代码尚未写完，大概只完成了30%，持续更新中... 全部代码完成之后会写简单的说明文档。

> 造了哪些轮子

- 已经完成的：输入框、按钮、自适应布局、网格，popover、tab标签页、手风琴、级联选择、collapse折叠面板
- 尚未完成的：无缝轮播、Dialog、Notification通知、响应式导航条、分页、表单验证、Table、图片上传、Sticky、Tree、Suggestion、Datepicker等。

### 项目特点
1. 使用chai，mocha编写测试用例，使用karma配置测试环境，每个组件有丰富的单元测试用例
2. 前期使用parcel方便构建，后期会引用Vue Cli3或者webpack来实现更多功能
3. 使用Travis CI进行持续集成测试
4. 参考现在社区比较成熟如ElementUI，Ant Design，Material UI这些UI轮子的API设计和样式布局。
5. 该项目基于Vue2.x版本来开发和使用

### 把项目跑起来
1. git clone https://github.com/USTB-musion/musion.git
2. cd musion / npm install
3. npm start

### 说明文档
``` JS
import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Content from './content.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import plugin from './plugin.js'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsPane from './tabs-pane.vue'
import TabsItem from './tabs-item.vue'
import Popover from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'

Vue.component('m-button', Button)
Vue.component('m-icon', Icon)
Vue.component('m-button-group', ButtonGroup)
Vue.component('m-input', Input)
Vue.component('m-row', Row)
Vue.component('m-col', Col)
Vue.component('m-layout', Layout)
Vue.component('m-header', Header)
Vue.component('m-content', Content)
Vue.component('m-sider', Sider)
Vue.component('m-footer', Footer)
Vue.component('m-toast', Toast)
Vue.component('m-tabs', Tabs)
Vue.component('m-tabs-head', TabsHead)
Vue.component('m-tabs-body', TabsBody)
Vue.component('m-tabs-pane', TabsPane)
Vue.component('m-tabs-item', TabsItem)
Vue.component('m-popover', Popover)
Vue.component('m-collapse', Collapse)
Vue.component('m-collapse-item', CollapseItem)
Vue.use(plugin)
```
组件采用全局注册，所以直接在页面中引入即可使用。举两个例子：
#### 1.tab标签页使用
##### 预览

![](https://user-gold-cdn.xitu.io/2018/10/12/166675cdaadcd6c2?w=437&h=118&f=png&s=4399)
##### 代码使用：
``` JS
data:{
  selected: '1'
}

<m-tabs :selected="selected">
  <m-tabs-head>
    <m-tabs-item name="1">1</m-tabs-item>
    <m-tabs-item name="2">2</m-tabs-item>
  </m-tabs-head>
  <m-tabs-body>
    <m-tabs-pane name="1">content 1</m-tabs-pane>
    <m-tabs-pane name="2">content 2</m-tabs-pane>
  </m-tabs-body>
</m-tabs>
```

#### 2.popover使用
##### 预览

![](https://user-gold-cdn.xitu.io/2018/10/12/1666767da0c3d42b?w=431&h=111&f=png&s=8555)

##### 代码使用
``` HTML
<m-popover trigger="hover">
  <m-button>上方弹出</m-button>
  <template slot="content">
    弹出内容
  </template>
</m-popover>
<m-popover position="bottom" trigger="hover">
  <m-button>下方弹出</m-button>
  <template slot="content">
    弹出内容
  </template>
</m-popover>
<m-popover position="left" trigger="hover">
  <m-button>左边弹出</m-button>
  <template slot="content">
    弹出内容
  </template>
</m-popover>
<m-popover position="right" trigger="hover">
  <m-button>右边弹出</m-button>
  <template slot="content">
    弹出内容
  </template>
</m-popover>
```
##### 属性使用说明
| 参数 | 说明 | 类型 | 可选值
| :-------- | --------:| :--: | :--: |
| trigger | 触发方式 | String | click/focus/hover
| position | 出现位置 | String | top/bottom/left/right

#### 3. 布局
##### 预览

![](https://user-gold-cdn.xitu.io/2018/10/12/1666771cbd098205?w=757&h=220&f=png&s=10088)

##### 代码使用
``` HTML
<m-layout>
  <m-sider>
    sider
  </m-sider>
  <m-layout>
    <m-header>
      header
    </m-header>
    <m-content>
      content
    </m-content>
    <m-footer>
      footer
    </m-footer>
  </m-layout>
</m-layout>
```

#### 4. 网格组件
##### 预览

![](https://user-gold-cdn.xitu.io/2018/10/12/166677992c5b7a73?w=766&h=253&f=png&s=10147)

##### 代码使用
``` HTML
<m-row>
  <m-col span="8">
    <div>8</div>
  </m-col>
  <m-col span="8">
    <div>8</div>
  </m-col>
  <m-col span="8">
    <div>8</div>
  </m-col>
</m-row>

<m-row>
  <m-col span="6">
    <div>6</div>
  </m-col>
  <m-col span="6">
    <div>6</div>
  </m-col>
  <m-col span="6">
    <div>6</div>
  </m-col>
  <m-col span="6">
    <div>6</div>
  </m-col>
</m-row>

<m-row>
  <m-col span="4">
    <div>4</div>
  </m-col>
  <m-col span="4">
    <div>4</div>
  </m-col>
  <m-col span="4">
    <div>4</div>
  </m-col>
  <m-col span="4">
    <div>4</div>
  </m-col>
  <m-col span="4">
    <div>4</div>
  </m-col>
  <m-col span="4">
    <div>4</div>
  </m-col>
</m-row>

<m-row>
  <m-col span="2">
    <div>2</div>
  </m-col>
  <m-col span="2">
    <div>2</div>
  </m-col>
  <m-col span="2">
    <div>2</div>
  </m-col>
  <m-col span="2">
    <div>2</div>
  </m-col>
  <m-col span="2">
    <div>2</div>
  </m-col>
  <m-col span="2">
    <div>2</div>
  </m-col>
  <m-col span="2">
    <div>2</div>
  </m-col>
  <m-col span="2">
    <div>2</div>
  </m-col>
  <m-col span="2">
    <div>2</div>
  </m-col>
  <m-col span="2">
    <div>2</div>
  </m-col>
  <m-col span="2">
    <div>2</div>
  </m-col>
  <m-col span="2">
    <div>2</div>
  </m-col>
</m-row>
```
