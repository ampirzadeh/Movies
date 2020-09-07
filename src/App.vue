<template>
  <v-app>
    <v-app-bar
      flat
      elevate-on-scroll
      app
      v-if="$route.path !== '/'"
      color="white"
    >
      <v-toolbar-title
        class="d-none d-md-block"
        v-text="'AMP\s Movie Search'"
      />
      <v-spacer />
      <v-text-field
        @keyup.enter="
          $router.push({
            name: 'Search',
            query: { s: $refs.searchBar.lazyValue },
          })
        "
        label="Search a Movie"
        prepend-inner-icon="search"
        :value="$route.query.s"
        ref="searchBar"
        hide-details
        single-line
        rounded
        filled
        dense
      />
      <v-spacer />
      <v-text-field
        @keyup.enter="
          $router.push({
            name: 'Search',
            query: { s: $refs.searchBar.lazyValue, y: $refs.yearBar.lazyValue },
          })
        "
        label="Movie's Year (Optional)"
        append-icon="event"
        :value="$route.query.y"
        ref="yearBar"
        hide-details
        single-line
        rounded
        filled
        dense
      />
      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>
