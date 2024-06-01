import { createStore } from "vuex";
import axios from 'axios'
const store = createStore({
    state: {
        modalColor: 0,
        allJobs: [],
        favJobs: [],
        jobDetails: [],
    },
    mutations: {
        setAllJobs(state, data) {
            state.allJobs = data;
        },
        setFavJobs(state, data) {
            state.favJobs = data;
        },
        setJobDetails(state, data) {
            state.jobDetails = data;
        },
    },
    actions: {
        async fetchAllJobs({ commit }) {
            await axios.get('/jobs').then((response) => {
                commit('setAllJobs', response.data);
            });
        },

        async getJobsDetails({ commit , state }, jobId) {
            console.log(jobId)
            await axios.get('/jobs/'+jobId).then((response) => {
                commit('setJobDetails', response.data);
            });
        },
        async addToFavJob({ commit, state }, jobId) {
            const selData = await state.allJobs.filter(job => {
                return job.id == jobId
            });
            let myFavJob = state.favJobs;
            if (myFavJob.indexOf(selData[0]) != -1) {
                myFavJob.splice(myFavJob.indexOf(selData[0]), 1)
            } else {
                myFavJob.push(selData[0]);
            }
            commit("setFavJobs", myFavJob);
        },
    },
    getters: {
        allJobs(state) {
            return state.allJobs;
        },
        favJobs(state) {
            return state.favJobs;
        },
        jobDetails(state) {
            return state.jobDetails;
        },
    }
})
export default store;
