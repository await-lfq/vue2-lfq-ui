import Vue from "vue";
import alert from "./index.vue"; // 引入alert组件
const AlertConstructor = Vue.extend(alert); // 创建AlertConstructor构造器
let timer; // 定时器
/**
 * @description alert弹窗
 * @param {string} 显示的内容
 * @param {number} 持续时间 
 */
function ShowAlert (text, duration = 1000) {
  const alertInstance = new AlertConstructor({ //实例化一个alertInstance实例
    el: document.createElement("div"),
    data () {
      return {
        show: false,
        text,
      }
    },
  });
  // 防抖处理
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    document.body.appendChild(alertInstance.$el); // 挂载节点
    setTimeout(() => {
      alertInstance.show = true; // 显示节点
      setTimeout(() => {
        alertInstance.show = false; // 隐藏节点
        setTimeout(() => {
          document.body.removeChild(alertInstance.$el); // 删除节点
        }, 1000)
      }, duration)
    }, duration);
  }, 300)
}
/**
 * @description 注册一个toast弹窗
 * @param {Function对象} Vue构造器 
 */
function registerAlert (Vue) {
  Vue.prototype.$alert = ShowAlert;
};
export default registerAlert;