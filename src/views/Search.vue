<template>
  <div>
    <v-tabs v-model="tabItem">
      <v-tab @click="fetchAll()" v-text="'All'" />
      <v-tab @click="fetchAll('movie')" v-text="'Movies'" />
      <v-tab @click="fetchAll('series')" v-text="'Series'" />
    </v-tabs>
    <v-tabs-items v-model="tabItem">
      <v-tab-item v-for="item in 3" :key="item">
        <h1
          v-if="movies && movies.Response === 'False'"
          class="display-1"
          v-text="movies.Error"
        />
        <v-container v-else>
          <v-row>
            <v-col v-for="movie in movies" :key="movie.imdbID" cols="6" md="3">
              <v-card outlined rounded="lg">
                <v-img
                  :lazy-src="movie.Poster"
                  :alt="`${movie.Title} Poster`"
                />
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
      </v-tab-item>
    </v-tabs-items>
    <v-pagination
      v-if="totalResults > 10 && this.movies"
      v-model="pagination"
      @input="fetchAll('')"
      :page="pagination"
      :length="Math.round(parseInt(totalResults) / 10)"
      :total-visible="10"
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      movies: [],
      tabItem: null,
      pagination: 1,
      totalResults: 0,
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
      this.movies = null
      this.tabItem = type
      fetch(
        `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_APIKEY}${
          this.$route.query.s ? `&s=${this.$route.query.s}` : ''
        }${this.$route.query.y ? `&y=${this.$route.query.y}` : ''}${
          type ? `&type=${type}` : ''
        }&page=${this.pagination}`
      )
        .then((json) => json.json())
        .then((res) => {
          if (res.Response === 'False') {
            this.movies = res
          } else {
            this.totalResults = res.totalResults
            this.movies = res.Search
          }
        })
        .catch((e) => console.log(e))
    },
  },
}
</script>
