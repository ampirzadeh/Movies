<template>
  <div>
    <h1
      v-if="movies && movies.Response === 'False'"
      class="display-1"
      v-text="movies.Error"
    />
    <v-container v-else>
      <v-row>
        <v-col
          v-for="movie in sortedMovies"
          :key="movie.imdbID"
          cols="6"
          md="3"
        >
          <v-card outlined rounded="lg">
            <v-img :lazy-src="movie.Poster" :alt="`${movie.Title} Poster`" />
            <v-card-title v-text="movie.Title" />
            <v-card-subtitle v-text="movie.Year" />
            <v-card-actions>
              <v-btn
                color="primary"
                text
                large
                :to="movie.imdbID"
                v-text="'More Info'"
              />
              <v-btn
                text
                large
                :href="`https://www.imdb.com/title/${movie.imdbID}/`"
                v-text="'IMDb Page'"
              />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      movies: [],
    }
  },
  created() {
    let myFavoriteMovies = [
      'tt0045152', // Signin in the Rain
      'tt0111161', // The Shawshank Redemption
      'tt0108778', // Friends
      'tt0110413', // Léon: The Professional
      'tt0304141', // Harry Potter and the Prisoner of Azkaban
      'tt0434409', // V for Vendetta
      'tt0460649', // How I Met Your Mother
      'tt0972534', // iCarly
      'tt0898266', // The Big Bang Theory
      'tt1187043', // 3 Idiots
      'tt1475582', // Sherlock
      'tt1504320', // The King's Speech
      'tt1375666', // Inception
      'tt0848228', // The Avengers
      'tt1670345', // Now You See Me
      'tt0816692', // Interstellar
      'tt3107288', // The Flash
      'tt2084970', // The Imitation Game
      'tt4052886', // Lucifer
      'tt1837492', // 13 Reasons Why
      'tt4555426', // Darkest Hour
      'tt3262342', // Loving Vincent
      'tt7668518', // The Protector
      'tt6966692', // Green Book
      'tt1727824', // Bohemian Rhapsody
    ]

    myFavoriteMovies.map((movieId) => {
      fetch(
        `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_APIKEY}&i=${movieId}`
      )
        .then((json) => json.json())
        .then((res) => this.movies.push(res))
        .catch((e) => console.log(e))
    })
  },
  computed: {
    sortedMovies() {
      return this.movies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year))
    },
  },
}
</script>
