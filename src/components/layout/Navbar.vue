<template>
    <nav class="navbar sticky-top navbar-dark bg-dark mb-5">
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
    name: "navbar"
}
</script>
