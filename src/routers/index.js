import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/alert"
    },
    {
      name: "button",
      path: "/button",
      component: () => import("../views/button"),
    },
    {
      name: "alert",
      path: "/alert",
      component: () => import("../views/alert"),
    },
    {
      name: "drag",
      path: "/drag",
      component: () => import("../views/drag"),
    }
  ]
});
export default router;