<template>
<div class="col-md-12">
    <router-link :to="'/'">
        <button class="btn btn-dark btn-sm mb-4">Go Back</button>
    </router-link>

    <div class="card">
        <div class="card-header">
            <strong>{{ currentMovie.title }}</strong>
        </div>
        <div class="card-body">
            <p class="card-text">
                {{ currentMovie.overview }}
            </p>
        </div>
    </div>

    <ul class="list-group mt-3 mb-4">
        <li class="list-group-item">
            <strong>Adult Film</strong>: {{ isAdultMovie }}
        </li>
        <li class="list-group-item">
            <strong>Release Date</strong>: <span>{{ currentMovie.release_date | moment("dddd, MMMM Do YYYY") }}</span>
        </li>
    </ul>

    <CastMembers :movieId="id"/>
</div>
</template>

<script>
import CastMembers from '../people/CastMembers.vue'

export default {
    name: 'movie-details',
    components: {
        CastMembers
    },
    data: function () {
        return {
            id: this.$route.params.id,
            movie:{}
        }
    },
    props: {
        movies: Array
    },
    computed: {
        currentMovie : function () {
            return this.movies.filter(movie => movie.id == this.id)[0]
        }, 
        isAdultMovie: function () {
             return this.currentMovie.adult ? 'Yes' : 'No'
        }
    }
}
</script>
