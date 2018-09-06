<template>
<div v-bind="getMovieFromArray">
    <router-link :to="'/'">
        <button class="btn btn-dark btn-sm mb-4">Go Back</button>
    </router-link>
</div>
</template>

<script>
export default {
    name: 'movie-details',
    data: function () {
        return {
            id: this.$route.params.id,
            movie: {}
        }
    },
    props: {
        movies: Array
    },
    computed: {
        getMovieFromArray: function () {
            this.movie = this.movies.filter(movie => movie.id == this.id)[0]
        }
    }
}
</script>
