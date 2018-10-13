import Vue from 'vue'
import Button from './button/button.vue'
import ButtonGroup from './button/button-group.vue'
import Icon from './icon/icon.vue'
import Input from './input/input.vue'
import Row from './grid/row.vue'
import Col from './grid/col.vue'
import Layout from './layout/layout.vue'
import Header from './layout/header.vue'
import Content from './layout/content.vue'
import Sider from './layout/sider.vue'
import Footer from './layout/footer.vue'
import Toast from './toast/toast.vue'
import plugin from './plugin.js'
import Tabs from './tabs/tabs.vue'
import TabsHead from './tabs/tabs-head.vue'
import TabsBody from './tabs/tabs-body.vue'
import TabsPane from './tabs/tabs-pane.vue'
import TabsItem from './tabs/tabs-item.vue'
import Popover from './popover/popover.vue'
import Collapse from './collapse/collapse.vue'
import CollapseItem from './collapse/collapse-item.vue'

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

// import createElement from 'vue'

// const h = createElement

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: '123',
        selectedTab: ['2','1']
        // seletedTab: 'sports'
    },
    methods: {
        inputChange(e) {
            console.log('1231', e.target.value)
        },
        showToast1(){
            this.showToast('top')
          },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
        showToast(position){
            this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
              position,
              enableHtml: false,
              closeButton: {
                text: '已充值',
                callback () {
                  console.log('他说已经充值智商了')
                }
              },
              autoClose: 3,
            })
        }
    }
})


// 单元测试
// import chai from 'chai'
// import spies from 'chai-spies'

// chai.use(spies)

// const expect = chai.expect
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting'
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#icon-setting')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting',
//             loading: true
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#icon-loading')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let { order } = window.getComputedStyle(svg)
//     expect(order).to.eq('1')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting',
//             iconPosition: 'right'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let { order } = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting',
//             iconPosition: 'right'
//         }
//     })
//     vm.$mount()
//     let spy = chai.spy(function(){})
//     vm.$on('click', spy)
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
// }