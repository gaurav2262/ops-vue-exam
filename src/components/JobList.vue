<template>
    <tr class="job-list">
        <td class="title">
            <div class="thumb">
                <img class="img-fluid" :src="props.job.companyLogo" alt="{{props.job.title}}">
            </div>
            <div class="job-list-details">
                <div class="job-list-info">
                    <div class="">
                        <h5 class="mb-0">
                            <router-link :to="`/jobs-details/${props.job.id}`" class="job-title">{{props.job.title}}</router-link>
                            </h5>
                    </div>
                    <div class="job-list-option">
                        <ul class="list-unstyled">
                            <li>Company: {{props.job.companyName}}</li>
                            <li>Reference: {{props.job.reference}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </td>
        <td class="job-list-favourite-time text-center">
            
            <a class="job-list-favourite order-2 icon-star" :id="`star-${props.job.id}`" @click="addToFav(props.job.id)" href="javascript:void(0)">
                <FontAwesomeIcon v-if="isInclude(props.job.id)" :icon="faFileRegular"  />
                <FontAwesomeIcon v-else :icon="faFileSolid"  />
            </a>
        </td>
    </tr>
</template>

<script setup>
import { faStar as faFileSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as faFileRegular } from '@fortawesome/free-regular-svg-icons';

import { useStore } from "vuex";
import { ref } from "vue";
const props = defineProps(["job","favJob"]);
const store = useStore();
function addToFav(jobId) {
    store.dispatch("addToFavJob", jobId);
}

async function isInclude(jobId) {
    let favJobList = store.getters.favJobs;
    if (favJobList.length) {
         let ans = favJobList.some(job => job.id == jobId)
        console.log(ans)
        if (ans){
            return true
        } else {
            return false
        }
    } else {
        return false;
    }
}
</script>