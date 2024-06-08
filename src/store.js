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
        addToFavJob(state, job) {
            state.favJobs.push(job);
        },
        removeFromFavJob(state, jobId) {
            state.favJobs = state.favJobs.filter(job => job.id !== jobId);
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
        addToFavJob({ commit, state }, jobId) {
            const selData = state.allJobs.find(job => job.id === jobId);
            if (selData) {
                commit("addToFavJob", selData);
                localStorage.setItem('favoriteJobs', JSON.stringify(state.favJobs));
            }
        },
        removeFromFavJob({ commit, state }, jobId) {
            commit("removeFromFavJob", jobId);
            localStorage.setItem('favoriteJobs', JSON.stringify(state.favJobs));
        },
        initializeFavJobs({ commit }) {
            const storedFavoriteJobs = localStorage.getItem('favoriteJobs');
            if (storedFavoriteJobs) {
                commit('setFavJobs', JSON.parse(storedFavoriteJobs));
            }
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
store.dispatch('initializeFavJobs');
export default store;
