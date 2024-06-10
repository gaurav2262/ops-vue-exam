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
                            <li v-textbold>Company: {{props.job.companyName}}</li>
                            <li v-textbold>Reference: {{props.job.reference}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </td>
        <td class="job-list-favourite-time text-center" v-if="$route.name == 'AllJobs' || $route.name == 'index'">
            <template v-if="isFavorited(props.job.id)">
                <a class="job-list-favourite order-2 icon-star" :id="`star-${props.job.id}`"  @click="addToFav('remove',props.job.id)" href="javascript:void(0)">
                <FontAwesomeIcon class="active my-fav" :icon="faFileSolid" />
                </a>
            </template>
            <template v-else>
                <a class="job-list-favourite order-2 icon-star" :id="`star-${props.job.id}`" @click="addToFav('add',props.job.id)" href="javascript:void(0)">
                <FontAwesomeIcon :icon="faFileRegular" />
                </a>
            </template>
            
        </td>
    </tr>
</template>


<script setup>
import { faStar as faFileSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar as faFileRegular } from '@fortawesome/free-regular-svg-icons';
import { useStore } from "vuex";

const props = defineProps(["job", "favJob"]);
const store = useStore();

function addToFav(type,jobId) {
  type == 'add' ? store.dispatch("addToFavJob", jobId) : store.dispatch("removeFromFavJob", jobId);
}


function isFavorited(jobId) {
  return store.getters.favJobs.some(job => job.id === jobId);
}

</script>