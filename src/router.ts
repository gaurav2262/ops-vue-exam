import { createRouter, createWebHistory } from "vue-router";

// import TabContent from "./components/TabContent.vue";
import AllJob from "./components/AllJob.vue";
import FavJob from "./components/FavJob.vue";
import JobDetails from "./components/JobDetails.vue";
import NotFound from "./UI/NotFound.vue";
const routers = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: AllJob, name:"index" },
    { path: "/all-jobs", component: AllJob , name: 'AllJobs' },
    { path: "/fav-jobs", component: FavJob , name: 'FevJob' },
    { path: "/jobs-details/:id", component: JobDetails, name: 'JobDetails' , props: true},
    { path: "/:404(.*)", component: NotFound },
  ],
});

export default routers;