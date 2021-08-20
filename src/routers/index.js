import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router=new VueRouter({
  mode:"history",
  routes:[
    {
      path:"/",
      redirect:"/button"
    },
    {
      name:"button",
      path:"/button",
      component:()=>import("../views/button"),
    }
  ]
});
export default router;