<template>
  <div class="calendar">
    <div class="calendar calendar-month">{{ `${month}월` }}</div>
    <table class="calendar calendar-table">
      <thead>
        <CalendarHead />
      </thead>
      <tbody>
        <CalendarBody :year="year" :month="month" :date="date" />
      </tbody>
    </table>
    <div class="calendar calendar-remain" v-html="getRemainDayText()" />
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { CalendarHead, CalendarBody } from '.'

const props = defineProps({
  year: {
    type: Number,
    default: new Date().getFullYear(),
  },
  month: {
    type: Number,
    default: new Date().getMonth(),
  },
  date: {
    type: Number,
    default: new Date().getDate(),
  },
})
const { year, month, date } = toRefs(props)

const today = new Date()
const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())
const weddingDate = new Date(year.value, month.value - 1, date.value)
const diffDate = Math.round((weddingDate - todayDate) / (1000 * 60 * 60 * 24))
const getRemainDayText = () => {
  if (diffDate > 0) {
    return `서현과 승진의 결혼식이 <span>${diffDate}일</span> 남았습니다.`
  } else if (diffDate === 0) {
    return `서현과 승진의 결혼식이 <span>오늘</span>입니다.`
  } else {
    return `서현과 승진의 결혼식이 <span>${Math.abs(diffDate)}일</span> 지났습니다.`
  }
}
</script>
<style lang="scss" scoped>
.calendar {
  text-align: center;
  font-size: 1.5rem;

  &-month {
    padding-bottom: 1rem;
  }
  &-table {
    margin: auto;
  }
  &-remain {
    padding: 2rem 0;
    :deep(span) {
      color: #d08c95;
      font-size: 1.6rem;
      font-weight: 800;
    }
  }
}
</style>
