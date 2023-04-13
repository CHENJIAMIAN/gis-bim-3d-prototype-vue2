import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";
// import AlarmManageView from "../views/AlarmManageView.vue";
// import LineFlowView from "../views/LineFlowView.vue";
// import MapConfigView from "../views/MapConfigView.vue";
// import ModelManageView from "../views/ModelManageView.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "MainView",
      component: MainView
    },
    {
      path: "/am",
      name: "AlarmManageView",
      component: () => import("../views/AlarmManageView.vue")
    },
    {
      path: "/lf",
      name: "LineFlowView",
      component: () => import("../views/LineFlowView.vue")
    },
    {
      path: "/mc",
      name: "MapConfigView",
      component: () => import("../views/MapConfigView.vue")
    },
    {
      path: "/mm",
      name: "ModelManageView",
      component: () => import("../views/ModelManageView.vue")
    }
  ]
});

export default router;
