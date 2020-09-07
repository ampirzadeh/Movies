<template>
  <v-card rounded="lg" outlined>
    <h1
      v-if="movie.Response === 'False'"
      class="display-1"
      v-text="movie.Error"
    />
    <v-row no-gutters>
      <v-col cols="12" md="4" v-if="movie.Poster !== 'N/A'">
        <v-img :src="movie.Poster" />
      </v-col>
      <v-col>
        <v-card-title class="display-1" v-text="movie.Title" />
        <v-card-subtitle class="text-subtitle-1">
          <span v-text="`${movie.Year}, (${movie.Released})`" />
          <v-rating
            length="10"
            size="14"
            dense
            readonly
            id="imdb"
            :value="parseFloat(movie.imdbRating)"
          />
          {{ movie.imdbRating }}
          <br />
          <span class="text-overline" v-text="movie.Genre" />
        </v-card-subtitle>
        <v-card-text>
          <span class="font-weight-bold" v-text="'Runtime: '" />
          <span v-text="movie.Runtime" /><br />
          <span class="font-weight-bold" v-text="'Rated: '" />
          <span v-text="movie.Rated" /><br />
          <span class="font-weight-bold" v-text="'Director: '" />
          <span v-text="movie.Director" /><br />
          <span class="font-weight-bold" v-text="'Writer: '" />
          <span v-text="movie.Writer" /><br />
          <span class="font-weight-bold" v-text="'Actors: '" />
          <span v-text="movie.Actors" /><br />
          <span class="font-weight-bold" v-text="'Country: '" />
          <span v-text="movie.Country" /><br />
          <span class="font-weight-bold" v-text="'Awards: '" />
          <span v-text="movie.Awards" /><br />
          <span class="font-weight-bold" v-text="'Metascore: '" />
          <span v-text="movie.Metascore" /><br />
          <template v-if="movie.Type == 'series'">
            <span class="font-weight-bold" v-text="'Total Seasons: '" />
            <span v-text="movie.totalSeasons" />
            <br />
          </template>
          <span class="font-weight-bold" v-text="'Plot: '" />
          <span v-text="movie.Plot" /><br />
        </v-card-text>
        <v-card-actions>
          <v-btn
            title="IMDb Link"
            color="primary"
            v-text="'IMDb Link'"
            large
            text
            :href="`https://www.imdb.com/title/${movie.imdbID}/`"
          />
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      movie: null,
    }
  },
  created() {
    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_APIKEY}&plot=full&i=${this.$route.params.id}`
    )
      .then((json) => json.json())
      .then((res) => (this.movie = res))
      .catch((e) => console.log(e))
  },
}
</script>
