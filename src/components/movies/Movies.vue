<template>
    <div>
        <h3 class="text-center mb-4">Trending Movies</h3>
        <div class="row p-4">
            <div class="col-md-6" v-for="movie in movies" :key="movie.id">
                <div class="card mb-4 shadow-sm">
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
                        <button class="btn btn-outline-dark btn-lg">View Movie Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "movies",
    props: {
        movies: Array
    },
    methods: {
        getImageURL: function(imagePath) {
            return 'https://image.tmdb.org/t/p/w500' + imagePath
        }
    }
}
</script>

<style>
img {
    border-radius: .5em;
}
</style>

