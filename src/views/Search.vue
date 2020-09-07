<template>
  <div>
    <template>
      <v-tabs v-model="tabItem" fixed-tabs>
        <v-tab @click="fetchAll()" v-text="'All'" />
        <v-tab @click="fetchAll('movie')" v-text="'Movies'" />
        <v-tab @click="fetchAll('series')" v-text="'Series'" />
        <v-tab @click="fetchAll('episode')" v-text="'Episodes'" />
      </v-tabs>
    </template>
    <v-tabs-items v-model="tabItem">
      <v-tab-item v-for="item in 4" :key="item">
        <h1
          v-if="movies.Response === 'False'"
          class="display-1"
          v-text="movies.Error"
        />
        <v-row v-else>
          <v-col v-for="movie in movies" :key="movie.imdbID" cols="6" md="3">
            <v-card outlined rounded="lg">
              <v-img :src="movie.Poster" :alt="`${movie.Title} Poster`" />
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
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      movies: [],
      tabItem: null,
    }
  },
  created() {
    this.fetchAll()
  },
  watch: {
    $route() {
      this.fetchAll()
    },
  },
  methods: {
    fetchAll(type) {
      fetch(
        `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_APIKEY}${
          this.$route.query.s ? `&s=${this.$route.query.s}` : ''
        }${this.$route.query.y ? `&y=${this.$route.query.y}` : ''}${
          type ? `&type=${type}` : ''
        }`
      )
        .then((json) => json.json())
        .then((res) =>
          res.Response === 'False'
            ? (this.movies = res)
            : (this.movies = res.Search)
        )
        .catch((e) => console.log(e))
    },
  },
}
</script>
