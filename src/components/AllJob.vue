<template>
    <div class="container py-5">
        <div class="p-5 bg-white rounded shadow mb-5">
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
                                            <JobList v-for="job in allJobsList" :key="job.id" :job="job"></JobList>
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

import { useStore } from "vuex";
import { ref } from "vue";
export default {
    components: {
        TabTitle,
        JobList,
    },
    setup() {
        const store = useStore();
        const allJobsList = ref(store.getters.allJobs);
        return {
            allJobsList,
        };
    },
};
</script>
