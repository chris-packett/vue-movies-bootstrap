<template>
    <div>
        <h3 class="text-center mb-4">{{ header }}</h3>
        <div class="row p-4">
            <div class="col-md-6" v-for="movie in movies" :key="movie.id">
                <Movie :movie="movie"/>
            </div>
        </div>
    </div>
</template>

<script>
import Movie from './Movie.vue';

export default {
    name: "movies",
    components: {
        Movie
    },
    props: {
        movies: Array,
        header: String
    }
}
</script>