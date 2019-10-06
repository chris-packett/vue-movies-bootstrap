<template>
  <div id="app">
    <Navbar v-on:process-user-input="updateSearchTerm" />
    <router-view v-bind="myProps"></router-view>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import Movies from './components/movies/Movies.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Movies
  },
  data() {
    return {
      movies: [],
      searchTerm: '',
      header: 'Trending Movies'
    }
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    updateSearchTerm(userInput) {
      this.searchTerm = userInput;
      this.searchMovies();
    },
    getMovies() {
      const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1`;

      fetch(URL)
      .then(resp => resp.json())
      .then(resp => {
        this.movies = resp.results;
      })
    },
    searchMovies() {
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&query=${this.searchTerm}&page=1&include_adult=false`;
      
      fetch(URL)
      .then(resp => resp.json())
      .then(resp => {
        this.movies = resp.results;
        this.header = 'Search results for movies related to ' + this.searchTerm;
      })
    }
  },
  computed: {
    myProps() {
      const { name } = this.$route.matched[0].components.default;

      if (name === 'movies') {
        return {
          movies: this.movies,
          header: this.header
        }
      } else if (name === 'movie-details') {
        return {
          movies: this.movies
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
