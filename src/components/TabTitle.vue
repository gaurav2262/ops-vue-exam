<template>
    <h2 class="text-center mb-5">  Find Your Job</h2>
    <ul id="myTab1" role="tablist" class="nav nav-tabs nav-pills with-arrow flex-column flex-sm-row text-center">
        <li class="nav-item flex-sm-fill">
            <router-link to="/all-jobs" data-toggle="tab" role="tab"  class="nav-link text-uppercase font-weight-bold rounded-0 border" :class="{ 'active': $route.name === 'index' || $route.name === 'AllJobs' }" >Jobs</router-link>
        </li>
        <li class="nav-item flex-sm-fill">
            <router-link to="/fav-jobs" data-toggle="tab" role="tab" class="nav-link text-uppercase font-weight-bold rounded-0 border " :class="{ 'active': $route.name === 'FevJob'}">Favorites</router-link>
        </li>
    </ul>
</template>