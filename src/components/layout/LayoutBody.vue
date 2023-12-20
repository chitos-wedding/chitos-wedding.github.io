<template>
  <div class="layout-body">
    <TimelineItems />
    <div class="title-wrapper">
      <div class="title-item title-item-left">백서현</div>
      <div class="title-item title-item-right">하승진</div>
    </div>
    <MainImage />
    <!-- <div class="main-image-effect-wrapper">
      <img
        class="main-image-effect"
        src="https://cdn2.makedear.com/homepage/img/effect/new1/1.png"
      />
    </div> -->
    <div class="hall-info">
      2024년 4월 6일 토요일 오후 5시
      <br />
      대구 인터불고 엑스코 2층 그랑파티오홀
    </div>
    <TheCalendar :year="2024" :month="4" :date="6" />
  </div>
</template>

<script setup>
import { TheCalendar } from '@/components/calendar'
import { TimelineItems } from '@/components/timeline'
import MainImage from '@/components/MainImage.vue'
</script>

<style lang="scss" scoped>
.layout-body {
  position: relative;
}
.title-wrapper {
  display: flex;
  justify-content: center;
  padding: 2.5rem 2.5rem 0;
  font-size: 1.6rem;
  letter-spacing: 0.5rem;
  background-color: #fdfdfd;
}

.title-item {
  font-size: 2.5rem;
  padding: 1rem;

  &-left {
    writing-mode: vertical-rl;
  }
  &-right {
    writing-mode: vertical-lr;
    margin-top: 2.5rem;
  }
}
.main-image-effect-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
}
.main-image-effect {
  width: inherit;
}
.hall-info {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  font-size: 2rem;
  line-height: 4rem;
}
</style>
