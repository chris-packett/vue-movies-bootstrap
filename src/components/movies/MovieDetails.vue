<template>
<div v-bind="getMovieFromArray" class="col-md-12">
    <router-link :to="'/'">
        <button class="btn btn-dark btn-sm mb-4">Go Back</button>
    </router-link>

    <div class="card">
        <div class="card-header">
            <strong>{{ movie.title }}</strong>
        </div>
        <div class="card-body">
            <p class="card-text">
                {{ movie.overview }}
            </p>
        </div>
    </div>

    <ul class="list-group mt-3">
        <li class="list-group-item">
            <strong>Adult Film</strong>: {{ isAdultMovie(movie.adult) }}
        </li>
        <li class="list-group-item">
            <strong>Release Date</strong>: <span>{{ movie.release_date | moment("dddd, MMMM Do YYYY") }}</span>
        </li>
    </ul>
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
    },
    methods: {
        isAdultMovie: function (isAdult) {
            return isAdult ? 'Yes' : 'No'
        }
    }
}
</script>
