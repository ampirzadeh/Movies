<template>
  <v-app>
    <v-app-bar app flat absolute>
      <v-toolbar-title v-text="'AMP\'s Movie Search'" />
      <v-spacer />
      <a :href="myGitData.html_url" :title="myGitData.login">
        <v-badge overlap bottom color="transparent" icon="mdi-github">
          <v-avatar>
            <v-img :src="myGitData.avatar_url" />
          </v-avatar>
        </v-badge>
      </a>
      <template #extension>
        <v-spacer />
        <template v-for="bar in searchBars">
          <v-text-field
            :name="bar.name"
            :key="bar.name"
            :prepend-inner-icon="
              bar.name === 'searchBar' ? bar.icon : undefined
            "
            :append-icon="bar.name === 'yearBar' ? bar.icon : undefined"
            :label="bar.label"
            :type="bar.type"
            v-model="bars[bar.name]"
            hide-details
            single-line
            solo
            flat
            dense
            clearable
            @keyup.enter="
              bars.searchBar
                ? $router.push({
                    name: 'Search',
                    query:
                      bars.searchBar && bars.yearBar
                        ? {
                            s: bars.searchBar,
                            y: bars.yearBar,
                          }
                        : { s: bars.searchBar },
                  })
                : $router.push({ name: 'Home' })
            "
          />
          <v-spacer :key="bar.icon" />
        </template>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-snackbar
      app
      bottom
      left
      :value="updateExists"
      :timeout="-1"
      color="primary"
    >
      An update is available
      <v-btn text @click="refreshApp">
        Update
      </v-btn>
    </v-snackbar>

    <v-footer app absolute>
      <span>
        Made By
        <a href="https://github.com/ampirzadeh">AMPirzadeh</a>
        in September 2020 With
        <a href="http://vuejs.org/">VueJs v.2</a> and
        <a href="https://www.omdbapi.com/">OMDb Api.</a>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import update from './mixins/update'

export default {
  name: 'App',
  mixins: [update],
  watch: {
    $route() {
      this.bars.searchBar = this.$route.query.s
      this.bars.yearBar = this.$route.query.y
    },
  },
  data() {
    return {
      myGitData: {},
      bars: {
        searchBar: null,
        yearBar: null,
      },
      searchBars: [
        {
          name: 'searchBar',
          label: 'Search a Movie',
          icon: 'mdi-magnify',
          type: 'text',
        },
        {
          name: 'yearBar',
          label: "Movie's Year (Optional)",
          icon: 'mdi-calendar',
          type: 'number',
        },
      ],
    }
  },
  created() {
    fetch('https://api.github.com/users/ampirzadeh')
      .then((response) => response.json())
      .then((data) => (this.myGitData = data))
      .catch((e) => alert(e.message))
  },
}
</script>
