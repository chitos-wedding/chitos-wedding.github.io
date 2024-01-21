<template>
  <div class="layout-body">
    <!-- <TheGallery /> -->
    <!-- <TimelineItems /> -->
    <!-- <div class="title-wrapper"> -->
    <div class="layout-body-title">
      <!-- <div class="title-item title-item-left">백서현</div> -->
      <div class="layout-body-title-item left">백서현</div>
      <div class="layout-body-title-item right">하승진</div>
      <!-- <div class="title-item title-item-right">하승진</div> -->
    </div>
    <MainImage />
    <HallInfo />
    <PoemInfo />
    <WelcomeInfo />
    <MapInfo />
    <TheCalendar :year="2024" :month="4" :date="6" />
    <AccountInfo />
    <GuestBook />
    <DriveInfo />
    <!-- <div class="main-image-effect-wrapper">
      <img
        class="main-image-effect"
        src="https://cdn2.makedear.com/homepage/img/effect/new1/1.png"
      />
    </div> -->
  </div>
</template>

<script setup>
import { TheCalendar } from '@/components/calendar'
import { AccountInfo, DriveInfo, HallInfo, MapInfo, PoemInfo, WelcomeInfo } from '@/components/info'
// import { TimelineItems } from '@/components/timeline'
// import { TheGallery } from '@/components/gallery'
import { GuestBook } from '@/components/guestbook'
import MainImage from '@/components/MainImage.vue'
</script>

<style lang="scss" scoped>
.layout-body {
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  background-color: #fdfdfd;
  padding: 0 3rem;

  &-title {
    display: flex;
    justify-content: center;
    padding: 2.5rem 2.5rem 0;
    font-size: 1.6rem;
    letter-spacing: 0.5rem;

    &-item {
      font-size: 2rem;
      padding: 1rem;
    }
    .left {
      writing-mode: vertical-rl;
    }
    .right {
      writing-mode: vertical-lr;
      margin-top: 2rem;
    }
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
</style>
