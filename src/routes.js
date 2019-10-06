import Movies from './components/movies/Movies.vue';
import MovieDetails from './components/movies/MovieDetails.vue';
import CastMemberDetails from './components/people/CastMemberDetails.vue';

export default [
    { path: '/', component: Movies },
    { path: '/movie/:id', component: MovieDetails },
    { path: '/cast-member/:id', component: CastMemberDetails }
];