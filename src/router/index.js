import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "Home",
    component: () => import(/*webpackChunkName: "Home" */ "@/views/Home.vue"),
  },
  {
    path: "/products",
    name: "products",
    
    component: () =>
      import(/* webpackChunkName: "Products" */ "../views/Products.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",

    component: () => import(/* webpackChunkName: "jobs" */ "../views/Jobs.vue"),
  },
  {
    path: "/jobs/:id",
    name: "jobDetail",

    component: () =>
      import(/* webpackChunkName: "jobDetail" */ "../views/JobDetail.vue"),
  },
  {
    path: "/staff-stories/:id",
    name: "staff-story",

    component: () =>
      import(/* webpackChunkName: "staffStroy" */ "../views/StaffStory.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  // base:
  //   process.env.NODE_ENV !== "production"
  //     ? process.env.BASE_URL
  //     : process.env.BASE_URL  ,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
