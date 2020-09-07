<template>
  <v-row
    align="center"
    justify="center"
    :style="{
      transform: 'translateY(35vh)',
    }"
  >
    <v-col cols="12" class="text-center">
      <span class="display-1" v-text="'AMP\'s Movie Search'" />
    </v-col>
    <v-col cols="10">
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
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Home',
}
</script>
