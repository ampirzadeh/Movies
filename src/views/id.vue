<template>
  <v-container>
    <v-card outlined rounded="lg">
      <h1
        v-if="movie.Response !== 'False'"
        class="display-1"
        v-text="movie.Error"
      />
      <v-row no-gutters>
        <v-col cols="12" md="4" v-if="movie.Poster !== 'N/A'">
          <v-img :src="movie.Poster" class="rounded-lg" />
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
            <template v-for="item in data" v-if="movie[item]">
              <span
                class="font-weight-bold"
                v-text="`${item === 'totalSeasons' ? 'Total Seasons' : item}: `"
                :key="item"
              />
              <span v-text="movie[item]" :key="item" /><br :key="item" />
            </template>
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      movie: null,
      data: [
        'Runtime',
        'Rated',
        'Director',
        'Writer',
        'Actors',
        'Country',
        'Awards',
        'Metascore',
        'totalSeasons',
        'Plot',
      ],
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
