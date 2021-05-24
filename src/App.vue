<template>
  <div id="app">
    <v-container fluid>
      <contribution-map />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContributionMap from "@/components/ContributionMap.vue";

@Component({
  components: {
    ContributionMap,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  padding: 8px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
