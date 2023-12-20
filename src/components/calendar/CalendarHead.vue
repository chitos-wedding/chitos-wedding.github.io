<template>
  <tr>
    <th v-for="day in dayOfTheWeek" :key="day" class="calendar-day-item">
      <div class="calendar-head">{{ day }}</div>
    </th>
  </tr>
</template>

<script setup>
const dayOfTheWeek = ['일', '월', '화', '수', '목', '금', '토']
</script>
<style scoped>
.calendar-day-item {
  padding: 1rem;
}
.calendar-head {
  font-size: 1.6rem;
  font-weight: bold;
}
</style>
