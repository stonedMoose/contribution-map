<template>
  <div class="row">
    <div class="column">
      <month-legend :week="[]" />
      <div
        v-for="(day, index) in days"
        :key="`${day}_${index}`"
        class="dayLegend"
      >
        {{ day }}
      </div>
    </div>
    <div
      v-for="week in contributions.contributions"
      :key="week[0].date"
      class="column"
    >
      <month-legend :week="week" />
      <contribution-intensity
        v-for="day in week"
        :key="day.date"
        :intensity="day.intensity"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContributionIntensity from "@/components/ContributionIntensity.vue";
import { Contributions } from "@/contributions";
import MonthLegend from "@/components/MonthLegend.vue";

@Component({
  components: {
    ContributionIntensity,
    MonthLegend,
  },
})
export default class ContributionMap extends Vue {
  public days = ["", "Mon", "", "Wed", "", "Fri", ""];

  public contributions: Contributions = {
    total: 879,
    contributions: [
      [
        { date: "2019-12-29", count: 1, intensity: 1 },
        { date: "2019-12-30", count: 0, intensity: 0 },
        { date: "2019-12-31", count: 0, intensity: 0 },
        { date: "2020-01-01", count: 0, intensity: 0 },
        { date: "2020-01-02", count: 1, intensity: 1 },
        { date: "2020-01-03", count: 0, intensity: 0 },
        { date: "2020-01-04", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-01-05", count: 1, intensity: 1 },
        { date: "2020-01-06", count: 1, intensity: 1 },
        { date: "2020-01-07", count: 7, intensity: 2 },
        { date: "2020-01-08", count: 0, intensity: 0 },
        { date: "2020-01-09", count: 2, intensity: 1 },
        { date: "2020-01-10", count: 4, intensity: 2 },
        { date: "2020-01-11", count: 1, intensity: 1 },
      ],
      [
        { date: "2020-01-12", count: 0, intensity: 0 },
        { date: "2020-01-13", count: 0, intensity: 0 },
        { date: "2020-01-14", count: 0, intensity: 0 },
        { date: "2020-01-15", count: 1, intensity: 1 },
        { date: "2020-01-16", count: 0, intensity: 0 },
        { date: "2020-01-17", count: 1, intensity: 1 },
        { date: "2020-01-18", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-01-19", count: 0, intensity: 0 },
        { date: "2020-01-20", count: 0, intensity: 0 },
        { date: "2020-01-21", count: 0, intensity: 0 },
        { date: "2020-01-22", count: 0, intensity: 0 },
        { date: "2020-01-23", count: 0, intensity: 0 },
        { date: "2020-01-24", count: 0, intensity: 0 },
        { date: "2020-01-25", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-01-26", count: 0, intensity: 0 },
        { date: "2020-01-27", count: 0, intensity: 0 },
        { date: "2020-01-28", count: 4, intensity: 2 },
        { date: "2020-01-29", count: 0, intensity: 0 },
        { date: "2020-01-30", count: 0, intensity: 0 },
        { date: "2020-01-31", count: 0, intensity: 0 },
        { date: "2020-02-01", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-02-02", count: 0, intensity: 0 },
        { date: "2020-02-03", count: 0, intensity: 0 },
        { date: "2020-02-04", count: 0, intensity: 0 },
        { date: "2020-02-05", count: 2, intensity: 1 },
        { date: "2020-02-06", count: 0, intensity: 0 },
        { date: "2020-02-07", count: 3, intensity: 1 },
        { date: "2020-02-08", count: 2, intensity: 1 },
      ],
      [
        { date: "2020-02-09", count: 0, intensity: 0 },
        { date: "2020-02-10", count: 0, intensity: 0 },
        { date: "2020-02-11", count: 0, intensity: 0 },
        { date: "2020-02-12", count: 0, intensity: 0 },
        { date: "2020-02-13", count: 0, intensity: 0 },
        { date: "2020-02-14", count: 0, intensity: 0 },
        { date: "2020-02-15", count: 1, intensity: 1 },
      ],
      [
        { date: "2020-02-16", count: 0, intensity: 0 },
        { date: "2020-02-17", count: 1, intensity: 1 },
        { date: "2020-02-18", count: 0, intensity: 0 },
        { date: "2020-02-19", count: 0, intensity: 0 },
        { date: "2020-02-20", count: 0, intensity: 0 },
        { date: "2020-02-21", count: 0, intensity: 0 },
        { date: "2020-02-22", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-02-23", count: 0, intensity: 0 },
        { date: "2020-02-24", count: 0, intensity: 0 },
        { date: "2020-02-25", count: 0, intensity: 0 },
        { date: "2020-02-26", count: 0, intensity: 0 },
        { date: "2020-02-27", count: 1, intensity: 1 },
        { date: "2020-02-28", count: 1, intensity: 1 },
        { date: "2020-02-29", count: 1, intensity: 1 },
      ],
      [
        { date: "2020-03-01", count: 0, intensity: 0 },
        { date: "2020-03-02", count: 0, intensity: 0 },
        { date: "2020-03-03", count: 0, intensity: 0 },
        { date: "2020-03-04", count: 0, intensity: 0 },
        { date: "2020-03-05", count: 0, intensity: 0 },
        { date: "2020-03-06", count: 0, intensity: 0 },
        { date: "2020-03-07", count: 8, intensity: 3 },
      ],
      [
        { date: "2020-03-08", count: 3, intensity: 1 },
        { date: "2020-03-09", count: 2, intensity: 1 },
        { date: "2020-03-10", count: 0, intensity: 0 },
        { date: "2020-03-11", count: 2, intensity: 1 },
        { date: "2020-03-12", count: 4, intensity: 2 },
        { date: "2020-03-13", count: 1, intensity: 1 },
        { date: "2020-03-14", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-03-15", count: 0, intensity: 0 },
        { date: "2020-03-16", count: 0, intensity: 0 },
        { date: "2020-03-17", count: 1, intensity: 1 },
        { date: "2020-03-18", count: 5, intensity: 2 },
        { date: "2020-03-19", count: 0, intensity: 0 },
        { date: "2020-03-20", count: 0, intensity: 0 },
        { date: "2020-03-21", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-03-22", count: 0, intensity: 0 },
        { date: "2020-03-23", count: 7, intensity: 2 },
        { date: "2020-03-24", count: 0, intensity: 0 },
        { date: "2020-03-25", count: 0, intensity: 0 },
        { date: "2020-03-26", count: 0, intensity: 0 },
        { date: "2020-03-27", count: 1, intensity: 1 },
        { date: "2020-03-28", count: 1, intensity: 1 },
      ],
      [
        { date: "2020-03-29", count: 0, intensity: 0 },
        { date: "2020-03-30", count: 3, intensity: 1 },
        { date: "2020-03-31", count: 4, intensity: 2 },
        { date: "2020-04-01", count: 0, intensity: 0 },
        { date: "2020-04-02", count: 7, intensity: 2 },
        { date: "2020-04-03", count: 4, intensity: 2 },
        { date: "2020-04-04", count: 5, intensity: 2 },
      ],
      [
        { date: "2020-04-05", count: 0, intensity: 0 },
        { date: "2020-04-06", count: 9, intensity: 3 },
        { date: "2020-04-07", count: 1, intensity: 1 },
        { date: "2020-04-08", count: 3, intensity: 1 },
        { date: "2020-04-09", count: 10, intensity: 3 },
        { date: "2020-04-10", count: 0, intensity: 0 },
        { date: "2020-04-11", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-04-12", count: 6, intensity: 2 },
        { date: "2020-04-13", count: 1, intensity: 1 },
        { date: "2020-04-14", count: 7, intensity: 2 },
        { date: "2020-04-15", count: 3, intensity: 1 },
        { date: "2020-04-16", count: 3, intensity: 1 },
        { date: "2020-04-17", count: 3, intensity: 1 },
        { date: "2020-04-18", count: 6, intensity: 2 },
      ],
      [
        { date: "2020-04-19", count: 11, intensity: 3 },
        { date: "2020-04-20", count: 5, intensity: 2 },
        { date: "2020-04-21", count: 6, intensity: 2 },
        { date: "2020-04-22", count: 8, intensity: 3 },
        { date: "2020-04-23", count: 18, intensity: 4 },
        { date: "2020-04-24", count: 5, intensity: 2 },
        { date: "2020-04-25", count: 7, intensity: 2 },
      ],
      [
        { date: "2020-04-26", count: 1, intensity: 1 },
        { date: "2020-04-27", count: 9, intensity: 3 },
        { date: "2020-04-28", count: 11, intensity: 3 },
        { date: "2020-04-29", count: 6, intensity: 2 },
        { date: "2020-04-30", count: 5, intensity: 2 },
        { date: "2020-05-01", count: 3, intensity: 1 },
        { date: "2020-05-02", count: 3, intensity: 1 },
      ],
      [
        { date: "2020-05-03", count: 3, intensity: 1 },
        { date: "2020-05-04", count: 0, intensity: 0 },
        { date: "2020-05-05", count: 2, intensity: 1 },
        { date: "2020-05-06", count: 5, intensity: 2 },
        { date: "2020-05-07", count: 4, intensity: 2 },
        { date: "2020-05-08", count: 0, intensity: 0 },
        { date: "2020-05-09", count: 1, intensity: 1 },
      ],
      [
        { date: "2020-05-10", count: 0, intensity: 0 },
        { date: "2020-05-11", count: 3, intensity: 1 },
        { date: "2020-05-12", count: 4, intensity: 2 },
        { date: "2020-05-13", count: 2, intensity: 1 },
        { date: "2020-05-14", count: 1, intensity: 1 },
        { date: "2020-05-15", count: 0, intensity: 0 },
        { date: "2020-05-16", count: 13, intensity: 4 },
      ],
      [
        { date: "2020-05-17", count: 1, intensity: 1 },
        { date: "2020-05-18", count: 5, intensity: 2 },
        { date: "2020-05-19", count: 3, intensity: 1 },
        { date: "2020-05-20", count: 3, intensity: 1 },
        { date: "2020-05-21", count: 1, intensity: 1 },
        { date: "2020-05-22", count: 9, intensity: 3 },
        { date: "2020-05-23", count: 1, intensity: 1 },
      ],
      [
        { date: "2020-05-24", count: 12, intensity: 4 },
        { date: "2020-05-25", count: 12, intensity: 4 },
        { date: "2020-05-26", count: 3, intensity: 1 },
        { date: "2020-05-27", count: 1, intensity: 1 },
        { date: "2020-05-28", count: 11, intensity: 3 },
        { date: "2020-05-29", count: 8, intensity: 3 },
        { date: "2020-05-30", count: 1, intensity: 1 },
      ],
      [
        { date: "2020-05-31", count: 1, intensity: 1 },
        { date: "2020-06-01", count: 8, intensity: 3 },
        { date: "2020-06-02", count: 3, intensity: 1 },
        { date: "2020-06-03", count: 5, intensity: 2 },
        { date: "2020-06-04", count: 5, intensity: 2 },
        { date: "2020-06-05", count: 8, intensity: 3 },
        { date: "2020-06-06", count: 13, intensity: 4 },
      ],
      [
        { date: "2020-06-07", count: 3, intensity: 1 },
        { date: "2020-06-08", count: 10, intensity: 3 },
        { date: "2020-06-09", count: 3, intensity: 1 },
        { date: "2020-06-10", count: 1, intensity: 1 },
        { date: "2020-06-11", count: 4, intensity: 2 },
        { date: "2020-06-12", count: 1, intensity: 1 },
        { date: "2020-06-13", count: 1, intensity: 1 },
      ],
      [
        { date: "2020-06-14", count: 3, intensity: 1 },
        { date: "2020-06-15", count: 2, intensity: 1 },
        { date: "2020-06-16", count: 0, intensity: 0 },
        { date: "2020-06-17", count: 0, intensity: 0 },
        { date: "2020-06-18", count: 0, intensity: 0 },
        { date: "2020-06-19", count: 1, intensity: 1 },
        { date: "2020-06-20", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-06-21", count: 0, intensity: 0 },
        { date: "2020-06-22", count: 3, intensity: 1 },
        { date: "2020-06-23", count: 8, intensity: 3 },
        { date: "2020-06-24", count: 6, intensity: 2 },
        { date: "2020-06-25", count: 7, intensity: 2 },
        { date: "2020-06-26", count: 4, intensity: 2 },
        { date: "2020-06-27", count: 7, intensity: 2 },
      ],
      [
        { date: "2020-06-28", count: 11, intensity: 3 },
        { date: "2020-06-29", count: 10, intensity: 3 },
        { date: "2020-06-30", count: 4, intensity: 2 },
        { date: "2020-07-01", count: 4, intensity: 2 },
        { date: "2020-07-02", count: 3, intensity: 1 },
        { date: "2020-07-03", count: 3, intensity: 1 },
        { date: "2020-07-04", count: 1, intensity: 1 },
      ],
      [
        { date: "2020-07-05", count: 0, intensity: 0 },
        { date: "2020-07-06", count: 0, intensity: 0 },
        { date: "2020-07-07", count: 2, intensity: 1 },
        { date: "2020-07-08", count: 4, intensity: 2 },
        { date: "2020-07-09", count: 4, intensity: 2 },
        { date: "2020-07-10", count: 0, intensity: 0 },
        { date: "2020-07-11", count: 1, intensity: 1 },
      ],
      [
        { date: "2020-07-12", count: 0, intensity: 0 },
        { date: "2020-07-13", count: 5, intensity: 2 },
        { date: "2020-07-14", count: 1, intensity: 1 },
        { date: "2020-07-15", count: 17, intensity: 4 },
        { date: "2020-07-16", count: 8, intensity: 3 },
        { date: "2020-07-17", count: 3, intensity: 1 },
        { date: "2020-07-18", count: 2, intensity: 1 },
      ],
      [
        { date: "2020-07-19", count: 1, intensity: 1 },
        { date: "2020-07-20", count: 5, intensity: 2 },
        { date: "2020-07-21", count: 2, intensity: 1 },
        { date: "2020-07-22", count: 3, intensity: 1 },
        { date: "2020-07-23", count: 11, intensity: 3 },
        { date: "2020-07-24", count: 1, intensity: 1 },
        { date: "2020-07-25", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-07-26", count: 0, intensity: 0 },
        { date: "2020-07-27", count: 0, intensity: 0 },
        { date: "2020-07-28", count: 3, intensity: 1 },
        { date: "2020-07-29", count: 8, intensity: 3 },
        { date: "2020-07-30", count: 5, intensity: 2 },
        { date: "2020-07-31", count: 7, intensity: 2 },
        { date: "2020-08-01", count: 1, intensity: 1 },
      ],
      [
        { date: "2020-08-02", count: 0, intensity: 0 },
        { date: "2020-08-03", count: 1, intensity: 1 },
        { date: "2020-08-04", count: 4, intensity: 2 },
        { date: "2020-08-05", count: 7, intensity: 2 },
        { date: "2020-08-06", count: 0, intensity: 0 },
        { date: "2020-08-07", count: 1, intensity: 1 },
        { date: "2020-08-08", count: 3, intensity: 1 },
      ],
      [
        { date: "2020-08-09", count: 0, intensity: 0 },
        { date: "2020-08-10", count: 2, intensity: 1 },
        { date: "2020-08-11", count: 0, intensity: 0 },
        { date: "2020-08-12", count: 5, intensity: 2 },
        { date: "2020-08-13", count: 0, intensity: 0 },
        { date: "2020-08-14", count: 1, intensity: 1 },
        { date: "2020-08-15", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-08-16", count: 2, intensity: 1 },
        { date: "2020-08-17", count: 3, intensity: 1 },
        { date: "2020-08-18", count: 2, intensity: 1 },
        { date: "2020-08-19", count: 1, intensity: 1 },
        { date: "2020-08-20", count: 6, intensity: 2 },
        { date: "2020-08-21", count: 3, intensity: 1 },
        { date: "2020-08-22", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-08-23", count: 0, intensity: 0 },
        { date: "2020-08-24", count: 2, intensity: 1 },
        { date: "2020-08-25", count: 3, intensity: 1 },
        { date: "2020-08-26", count: 1, intensity: 1 },
        { date: "2020-08-27", count: 4, intensity: 2 },
        { date: "2020-08-28", count: 1, intensity: 1 },
        { date: "2020-08-29", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-08-30", count: 0, intensity: 0 },
        { date: "2020-08-31", count: 0, intensity: 0 },
        { date: "2020-09-01", count: 0, intensity: 0 },
        { date: "2020-09-02", count: 0, intensity: 0 },
        { date: "2020-09-03", count: 0, intensity: 0 },
        { date: "2020-09-04", count: 0, intensity: 0 },
        { date: "2020-09-05", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-09-06", count: 0, intensity: 0 },
        { date: "2020-09-07", count: 1, intensity: 1 },
        { date: "2020-09-08", count: 2, intensity: 1 },
        { date: "2020-09-09", count: 3, intensity: 1 },
        { date: "2020-09-10", count: 0, intensity: 0 },
        { date: "2020-09-11", count: 1, intensity: 1 },
        { date: "2020-09-12", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-09-13", count: 0, intensity: 0 },
        { date: "2020-09-14", count: 0, intensity: 0 },
        { date: "2020-09-15", count: 0, intensity: 0 },
        { date: "2020-09-16", count: 1, intensity: 1 },
        { date: "2020-09-17", count: 0, intensity: 0 },
        { date: "2020-09-18", count: 2, intensity: 1 },
        { date: "2020-09-19", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-09-20", count: 0, intensity: 0 },
        { date: "2020-09-21", count: 1, intensity: 1 },
        { date: "2020-09-22", count: 1, intensity: 1 },
        { date: "2020-09-23", count: 4, intensity: 2 },
        { date: "2020-09-24", count: 4, intensity: 2 },
        { date: "2020-09-25", count: 1, intensity: 1 },
        { date: "2020-09-26", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-09-27", count: 0, intensity: 0 },
        { date: "2020-09-28", count: 1, intensity: 1 },
        { date: "2020-09-29", count: 2, intensity: 1 },
        { date: "2020-09-30", count: 0, intensity: 0 },
        { date: "2020-10-01", count: 1, intensity: 1 },
        { date: "2020-10-02", count: 4, intensity: 2 },
        { date: "2020-10-03", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-10-04", count: 0, intensity: 0 },
        { date: "2020-10-05", count: 0, intensity: 0 },
        { date: "2020-10-06", count: 2, intensity: 1 },
        { date: "2020-10-07", count: 1, intensity: 1 },
        { date: "2020-10-08", count: 7, intensity: 2 },
        { date: "2020-10-09", count: 0, intensity: 0 },
        { date: "2020-10-10", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-10-11", count: 0, intensity: 0 },
        { date: "2020-10-12", count: 0, intensity: 0 },
        { date: "2020-10-13", count: 0, intensity: 0 },
        { date: "2020-10-14", count: 0, intensity: 0 },
        { date: "2020-10-15", count: 0, intensity: 0 },
        { date: "2020-10-16", count: 0, intensity: 0 },
        { date: "2020-10-17", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-10-18", count: 0, intensity: 0 },
        { date: "2020-10-19", count: 1, intensity: 1 },
        { date: "2020-10-20", count: 0, intensity: 0 },
        { date: "2020-10-21", count: 0, intensity: 0 },
        { date: "2020-10-22", count: 0, intensity: 0 },
        { date: "2020-10-23", count: 0, intensity: 0 },
        { date: "2020-10-24", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-10-25", count: 2, intensity: 1 },
        { date: "2020-10-26", count: 7, intensity: 2 },
        { date: "2020-10-27", count: 1, intensity: 1 },
        { date: "2020-10-28", count: 0, intensity: 0 },
        { date: "2020-10-29", count: 0, intensity: 0 },
        { date: "2020-10-30", count: 0, intensity: 0 },
        { date: "2020-10-31", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-11-01", count: 0, intensity: 0 },
        { date: "2020-11-02", count: 0, intensity: 0 },
        { date: "2020-11-03", count: 5, intensity: 2 },
        { date: "2020-11-04", count: 6, intensity: 2 },
        { date: "2020-11-05", count: 3, intensity: 1 },
        { date: "2020-11-06", count: 5, intensity: 2 },
        { date: "2020-11-07", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-11-08", count: 0, intensity: 0 },
        { date: "2020-11-09", count: 7, intensity: 2 },
        { date: "2020-11-10", count: 10, intensity: 3 },
        { date: "2020-11-11", count: 4, intensity: 2 },
        { date: "2020-11-12", count: 7, intensity: 2 },
        { date: "2020-11-13", count: 6, intensity: 2 },
        { date: "2020-11-14", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-11-15", count: 0, intensity: 0 },
        { date: "2020-11-16", count: 1, intensity: 1 },
        { date: "2020-11-17", count: 1, intensity: 1 },
        { date: "2020-11-18", count: 3, intensity: 1 },
        { date: "2020-11-19", count: 0, intensity: 0 },
        { date: "2020-11-20", count: 1, intensity: 1 },
        { date: "2020-11-21", count: 1, intensity: 1 },
      ],
      [
        { date: "2020-11-22", count: 0, intensity: 0 },
        { date: "2020-11-23", count: 4, intensity: 2 },
        { date: "2020-11-24", count: 0, intensity: 0 },
        { date: "2020-11-25", count: 24, intensity: 4 },
        { date: "2020-11-26", count: 2, intensity: 1 },
        { date: "2020-11-27", count: 0, intensity: 0 },
        { date: "2020-11-28", count: 12, intensity: 4 },
      ],
      [
        { date: "2020-11-29", count: 15, intensity: 4 },
        { date: "2020-11-30", count: 8, intensity: 3 },
        { date: "2020-12-01", count: 3, intensity: 1 },
        { date: "2020-12-02", count: 5, intensity: 2 },
        { date: "2020-12-03", count: 1, intensity: 1 },
        { date: "2020-12-04", count: 0, intensity: 0 },
        { date: "2020-12-05", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-12-06", count: 6, intensity: 2 },
        { date: "2020-12-07", count: 4, intensity: 2 },
        { date: "2020-12-08", count: 1, intensity: 1 },
        { date: "2020-12-09", count: 5, intensity: 2 },
        { date: "2020-12-10", count: 11, intensity: 3 },
        { date: "2020-12-11", count: 1, intensity: 1 },
        { date: "2020-12-12", count: 4, intensity: 2 },
      ],
      [
        { date: "2020-12-13", count: 3, intensity: 1 },
        { date: "2020-12-14", count: 5, intensity: 2 },
        { date: "2020-12-15", count: 1, intensity: 1 },
        { date: "2020-12-16", count: 1, intensity: 1 },
        { date: "2020-12-17", count: 2, intensity: 1 },
        { date: "2020-12-18", count: 0, intensity: 0 },
        { date: "2020-12-19", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-12-20", count: 1, intensity: 1 },
        { date: "2020-12-21", count: 0, intensity: 0 },
        { date: "2020-12-22", count: 1, intensity: 1 },
        { date: "2020-12-23", count: 6, intensity: 2 },
        { date: "2020-12-24", count: 0, intensity: 0 },
        { date: "2020-12-25", count: 0, intensity: 0 },
        { date: "2020-12-26", count: 0, intensity: 0 },
      ],
      [
        { date: "2020-12-27", count: 0, intensity: 0 },
        { date: "2020-12-28", count: 0, intensity: 0 },
      ],
    ],
  };
}
</script>

<style lang="scss">
.row {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
  margin: 0 1px;
}

.dayLegend {
  color: gray;
  min-height: 12px;
  max-height: 12px;
  font-size: 12px;
  line-height: 12px;
  margin: 1px 0;
}
</style>
