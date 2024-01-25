<template>
  <tr v-for="(week, weekIdx) in numberOfWeek" :key="week">
    <td v-for="(weekDay, weekDayIdx) in 7" :key="weekDay">
      <div class="calendar-date-container">
        <div
          class="calendar-date-text"
          :class="{
            'calendar-date-selected': date === showDate(weekIdx * 7 + weekDay - firstDay),
            'calendar-date-sun': weekDayIdx === 0,
            'calendar-date-sat': weekDayIdx === 6,
          }"
          v-text="showDate(weekIdx * 7 + weekDay - firstDay)"
        />
        <div v-if="date === showDate(weekIdx * 7 + weekDay - firstDay)" class="calendar-date-time">
          17:00
        </div>
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
    width: 4rem;
    height: 4rem;
  }
  &-text {
    text-align: center;
    border-radius: 50%;
    padding: 1rem;
  }
  &-sat {
    color: $blue-11;
  }
  &-sun {
    color: #d099a1;
  }
  &-selected {
    background-color: #dab1b6;
    color: white;
  }
  &-time {
    color: #d099a1;
    font-size: 1rem;
  }
}
</style>
