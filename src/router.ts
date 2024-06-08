import { createRouter, createWebHistory } from "vue-router";

const routers = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("@/components/AllJob.vue"), name:"index" },
    { path: "/all-jobs", component: () => import("@/components/AllJob.vue") , name: 'AllJobs' },
    { path: "/fav-jobs", component: () => import("@/components/FavJob.vue") , name: 'FevJob' },
    { path: "/jobs-details/:id", component: () => import("@/components/JobDetails.vue"), name: 'JobDetails' , props: true},
    { path: "/:404(.*)", component: () => import("@/UI/NotFound.vue") },
  ],
});

export default routers;