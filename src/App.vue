<template>
  <div id="app">
    <Navbar v-on:process-user-input="updateSearchTerm"/>
    <router-view v-bind="myProps"></router-view>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue'
import Movies from './components/movies/Movies.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Movies
  },
  data: function () {
    return {
      movies: [],
      searchTerm: '',
      header: 'Trending Movies'
    }
  },
  mounted: function () {
    this.fetchMovieData()
  },
  methods: {
    updateSearchTerm: function (userInput) {
      this.searchTerm = userInput
      this.fetchSearchedMovieData()
    },
    fetchMovieData: function () {
      const API_KEY = '39df1c4c7a287510f53854893ba3d788'
      let URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      fetch(URL)
      .then(resp => resp.json())
      .then(movieData => {
        this.movies = movieData.results
      })
    },
    fetchSearchedMovieData: function () {
      const API_KEY = '39df1c4c7a287510f53854893ba3d788'
      let URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this.searchTerm}&page=1&include_adult=false`
      fetch(URL)
      .then(resp => resp.json())
      .then(searchedMovieData => {
        this.movies = searchedMovieData.results
        this.header = 'Search results for movies related to ' + this.searchTerm
      })
    }
  },
  computed: {
    myProps: function () {
      let { name } = this.$route.matched[0].components.default
      if (name === 'movies') {
        return {
          movies: this.movies,
          header: this.header
        }
      }
      else if (name === 'movie-details') {
        return {
          movies: this.movies
        }
      }
      // else if (name === 'cast-member-details') {
      //   return {
      //     castMembers: 
      //   }
      // }
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
