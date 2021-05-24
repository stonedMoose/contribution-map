<template>
  <div class="intensitySquare" :style="squareStyle"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ContributionIntensity extends Vue {
  @Prop()
  public intensity!: number;

  public get color() {
    if (this.intensity === 0) {
      return "#fff";
    }
    if (this.intensity === 1) {
      return "#9be9a8";
    }
    if (this.intensity === 2) {
      return "#40c463";
    }
    if (this.intensity === 3) {
      return "#30a14e";
    }
    return "#216e39";
  }

  public get squareStyle(): any {
    return {
      backgroundColor: this.color,
    };
  }
}
</script>

<style>
.intensitySquare {
  width: 12px;
  height: 12px;
  margin: 1px 0;
  border: 1px solid gray;
  border-radius: 2px;
}
</style>
