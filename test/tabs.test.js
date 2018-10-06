const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('m-tabs', Tabs)
Vue.component('m-tabs-head', TabsHead)
Vue.component('m-tabs-body', TabsBody)
Vue.component('m-tabs-item', TabsItem)
Vue.component('m-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

//   it('接受 selected 属性', (done) => {

//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     div.innerHTML = `
//       <m-tabs selected="finance">
//         <m-tabs-head>
//           <m-tabs-item name="woman"> 美女 </m-tabs-item>
//           <m-tabs-item name="finance"> 财经 </m-tabs-item>
//           <m-tabs-item name="sports"> 体育 </m-tabs-item>
//         </m-tabs-head>
//         <m-tabs-body>
//           <m-tabs-pane name="woman"> 美女相关资讯 </m-tabs-pane>
//           <m-tabs-pane name="finance"> 财经相关资讯 </m-tabs-pane>
//           <m-tabs-pane name="sports"> 体育相关资讯 </m-tabs-pane>
//         </m-tabs-body>
//       </m-tabs>
//     `
//     let vm = new Vue({
//       el: div
//     })
//     vm.$nextTick(() => {
//       let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
//       expect(x.classList.contains('active')).to.be.true
//       done()
//     })
//   })

  it('可以接受 direction prop', () => {

  })

})