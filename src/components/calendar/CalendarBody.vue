<template>
  <tr v-for="(week, weekIdx) in numberOfWeek" :key="week">
    <td v-for="weekDay in 7" :key="weekDay">
      <div class="calendar-date-container">
        <div
          class="calendar-date-text"
          :class="{ 'calendar-date-selected': date === showDate(weekIdx * 7 + weekDay - firstDay) }"
          v-text="showDate(weekIdx * 7 + weekDay - firstDay)"
        />
      </div>
    </td>
  </tr>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  year: {
    type: Number,
    default: new Date().getFullYear(),
  },
  month: {
    type: Number,
    default: new Date().getMonth() - 1,
  },
  date: {
    type: Number,
    default: new Date().getDate(),
  },
})
const { year, month, date } = toRefs(props)

const dateObject = new Date(year.value, month.value - 1, 1)
const lastDateObject = new Date(year.value, month.value, 0)
const lastDate = lastDateObject.getDate()
const firstDay = dateObject.getDay()
const numberOfWeek = Math.ceil((firstDay + lastDate) / 7)

const showDate = (date) => (date > 0 && date <= lastDate ? date : '')
</script>
<style lang="scss" scoped>
.calendar-date {
  &-container {
    width: 5rem;
    height: 5rem;
  }
  &-text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    text-align: center;
    /* border: 1px solid red; */
    border-radius: 50%;
  }
  &-selected {
    background-color: #dab1b6;
  }
}
</style>
