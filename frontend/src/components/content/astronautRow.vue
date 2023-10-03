<template>
  <tr class="hover:bg-gray-100 group cursor-pointer">
    <td
      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
    >
      {{ astronaut.first_name }}
    </td>
    <td
      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
    >
      {{ astronaut.last_name }}
    </td>
    <td
      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
    >
      {{ formatTime(astronaut.date_of_birth, ". ") }}
    </td>
    <td
      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
    >
      {{ formatTimestamp(astronaut.updatedAt) }}
    </td>
    <td
      class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 xl:max-w-xl md:max-w-sm sm:max-w-xs truncate"
    >
      {{ astronaut.superpower }}
    </td>
    <td class="px-2 py-4 ">
      <div class="opacity-0 group-hover:opacity-100">
        <i class="pi pi-arrow-right"></i>
      </div>
    </td>
  </tr>
</template>

<script>
// Component defining the astronaut row in astronaut list
import { formatTimePretty } from "../../helpers/generalHelper.js";
import moment from "moment";

export default {
  name: "AstronautRow",
  props: ["astronaut"],
  data() {
    return {
      formated_updatedAt: "",
      interval: null
    };
  },
  methods: {
    formatTime(time, delimeter) {
      return formatTimePretty(time, delimeter);
    },
    formatTimestamp(time) {
      return moment(time)
        .utcOffset(time)
        .fromNow();
    }
  }
};
</script>

<style scoped lang="less"></style>
