<template>
  <div class="monthLegend">{{ monthDisplay }}</div>
</template>

<script lang="ts">
const monthMap = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

import { Component, Prop, Vue } from "vue-property-decorator";
import { Week } from "@/contributions";

@Component
export default class MonthLegend extends Vue {
  @Prop()
  public week!: Week;

  public get monthDisplay(): string {
    const startOfMonthDay = this.week.find(
      (day) => new Date(day.date).getDate() == 1
    );
    if (startOfMonthDay) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return monthMap[new Date(startOfMonthDay.date).getMonth()];
    }
    return "";
  }
}
</script>

<style>
.monthLegend {
  max-width: 12px;
  margin: 0 1px;
  font-size: 12px;
  height: 16px;
  color: gray;
}
</style>
