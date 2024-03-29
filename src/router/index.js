import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import Play from "../views/Play.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/play",
    name: "Play",
    component: Play
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
