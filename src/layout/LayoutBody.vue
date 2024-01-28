<template>
  <div class="layout-body">
    <!-- <TheGallery /> -->
    <TitleInfo />
    <MainImage />
    <HallInfo />
    <PoemInfo />
    <WelcomeInfo />
    <FamilyInfo />
    <FaceToFace />
    <MapInfo />
    <TheCalendar :year="2024" :month="4" :date="6" />
    <WeddingInfo />
    <TimelineItems />
    <AccountInfo />
    <GuestBook />
    <DriveInfo />
    <ShareInfo />
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
import {
  AccountInfo,
  DriveInfo,
  FaceToFace,
  FamilyInfo,
  HallInfo,
  MapInfo,
  PoemInfo,
  ShareInfo,
  TitleInfo,
  WeddingInfo,
  WelcomeInfo,
} from '@/components/info'
import { TimelineItems } from '@/components/timeline'
// import { TheGallery } from '@/components/gallery'
import { GuestBook } from '@/components/guestbook'
import MainImage from '@/components/MainImage.vue'
</script>

<style lang="scss" scoped>
.layout-body {
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  background-color: #fdfdfd;
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
