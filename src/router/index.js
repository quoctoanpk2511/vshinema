import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/tvseries",
    name: "tvseries",
    component: () => import("../views/TVSeries.vue"),
  },
  {
    path: "/movies",
    name: "movies",
    component: () => import("../views/Movies.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/Search.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path == "/register") {
    next();
  } else if ((!localStorage.getItem("expires_at") || Date.now() > Date.parse(localStorage.getItem("expires_at"))) && to.path !== "/login" || to.path == "/logout") {
    localStorage.removeItem("request_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("session_id");
    next("/login");
  } else next()
});

export default router;
