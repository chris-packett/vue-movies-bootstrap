<template>
<div class="card mb-4 shadow-lg">
    <div class="card-body">
        <div class="card-title text-center">
            <h5>{{ movie.title }}</h5>
        </div>
    </div>
    <img 
    :src="getImageURL(movie.poster_path)" 
    :alt="movie.title" 
    width="150" 
    class="d-flex align-self-center"
    >
    <div class="card-body text-center">
        <router-link :to="'/movie/' + movie.id">
            <button class="btn btn-outline-dark btn-lg">
                View Movie Details
            </button>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    name: "movie",
    props: {
        movie: Object
    },
    methods: {
        getImageURL: function(imagePath) {
            return imagePath 
                ? 'https://image.tmdb.org/t/p/w500' + imagePath 
                : '/assets/logo.png';
        }
    }
}
</script>

<style scoped>
img {
    border-radius: .5em;
}
</style>


