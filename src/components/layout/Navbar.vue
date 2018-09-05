<template>
    <nav class="navbar sticky-top navbar-dark bg-dark mb-5">
        <form class="form-inline" v-on:submit.prevent="processUserInput">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model="userInput">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <span class="navbar-brand">
            <img src="../../assets/logo.png" alt="logo" width="40">
            <span class="ml-1">Movies</span>
        </span>
        <ul class="navbar-nav d-flex flex-row">
            <li class="nav-item active p-2"><a class="nav-link" href="/">Home</a></li>
            <li class="nav-item p-2"><a class="nav-link" href="/">All Movies</a></li>
            <li class="nav-item p-2"><a class="nav-link" href="https://developers.themoviedb.org/3/getting-started/introduction">API</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "navbar",
    data: function () {
        return {
            userInput: ''
        }
    },
    methods: {
        processUserInput: function () {
            console.log('firing', this.userInput)
            this.$emit('process-user-input', this.userInput)
            this.userInput = ''
        }
    }
}
</script>
