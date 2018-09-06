import Movies from './components/movies/Movies.vue'
import MovieDetails from './components/movies/MovieDetails.vue'

export default [
    { path: '/', component: Movies },
    { path: '/movie/:id', component: MovieDetails }
]