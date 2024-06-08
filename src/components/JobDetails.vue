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
                                    <div class="table manage-job-top mb-0">
                                        <div class="container">
                                            <div class="my-4">
                                                <router-link to="/all-jobs"  class="text-secondary text-decoration-none"><FontAwesomeIcon :icon="homeIcon" /> Back</router-link>
                                                <div class="">
                                                    <img class="" :src="jobDetails.companyLogo" alt="{{jobDetails.title}}">
                                                </div>
                                                <div class="row mt-5 align-items-center">
                                                    <div class="col">
                                                        <div class="row align-items-center">
                                                            <div class="col-md-7">
                                                                <h2 class="mb-1">{{jobDetails.title}}</h2>
                                                                <p class="small mb-3">
                                                                    <span v-for="industries in jobDetails.industries" :key="industries.id" class="badge badge-dark">{{industries}}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <div class="col-md-12">
                                                                <div><b>publish date:-</b>{{ jobDetails.publishDate }}</div>
                                                                <div><b>Location:-</b>{{ jobDetails.location }}</div>
                                                                <div><b>Reference:-</b>{{ jobDetails.reference }}</div>
                                                                <p class="text-muted" v-html="jobDetails.description">
                                                                    
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
<style scoped>
 img {
    height: 100px;
    width: 100px;
 }
</style>
<script>
import axios from 'axios'
import TabTitle from "../components/TabTitle.vue";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    props: ['id'],
    components: {
        TabTitle,
        FontAwesomeIcon,
    },
    data() {
        return {
            homeIcon: '',
            jobDetails: [],
        }
    },
    async mounted() {
        const mData = this.id;
        this.homeIcon = faHome;
        this.jobDetails = await axios.get('/jobs/' + mData).then((response) => {
            return response.data;
        })
    },
};
</script>
 