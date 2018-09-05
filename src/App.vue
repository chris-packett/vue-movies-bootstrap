<template>
  <div id="app">
    <Navbar v-on:process-user-input="updateSearchTerm"/>
    <Movies :movies="movies"/>
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
      searchTerm: ''
    }
  },
  mounted: function () {
    const API_KEY = '39df1c4c7a287510f53854893ba3d788'
    let URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    fetch(URL)
    .then(resp => resp.json())
    .then(movieData => {
      this.movies = movieData.results
    })
  },
  methods: {
    updateSearchTerm: function (userInput) {
      console.log('received', userInput)
      this.searchTerm = userInput
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
