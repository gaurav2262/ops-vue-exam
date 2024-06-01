<template>
    <div class="container py-5">
        <div class="p-5 bg-white rounded shadow mb-5">
            <h2 class="text-center mb-5"> Find Your Job</h2>
            <!-- Bordered tabs-->
            <TabTitle></TabTitle>
            <div id="myTab1Content" class="tab-content">
                <div class="container mt-3 mb-4">
                    <div class="col-lg-12 mt-4 mt-lg-0">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="user-dashboard-info-box table-responsive">
                                    <table class="table manage-job-top mb-0">
                                        <tbody>
                                            <div v-if="allFavJobsList.length> 0">
                                                <JobList v-for="job in allFavJobsList" :key="job.id" :job="job" :store="store" ></JobList>
                                            </div>
                                            <div v-else  class="text-center">
                                                No Favorite selected.
                                            </div>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End bordered tabs -->
        </div>
    </div>
</template>

<script>
import TabTitle from "../components/TabTitle.vue";
import JobList from "../components/JobList.vue";

export default {
    components: {
        TabTitle,
        JobList,
    },
    setup() {
        let allFavJobsList =[];
        return {
            allFavJobsList
        }
    },
   
    created() {
        this.allFavJobsList = this.$store.getters.favJobs;
    },
};
</script>
