import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddMovie from "../views/AddMovie.vue";
import ViewMovie from "../views/ViewMovie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add",
    name: "AddMovie",
    component: AddMovie
  },
  {
    path: "/view",
    name: "ViewMovie",
    component: ViewMovie
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
