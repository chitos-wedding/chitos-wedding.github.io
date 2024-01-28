<template>
  <div class="layout-body">
    <img class="main-image-effect" src="https://cdn2.makedear.com/homepage/img/effect/new1/2.png" />
    <TitleInfo />
    <MainImage />
    <component :is="InfoComponent('HallInfo')" />
    <component :is="InfoComponent('PoemInfo')" />
    <component :is="InfoComponent('WelcomeInfo')" />
    <component :is="InfoComponent('FamilyInfo')" />
    <component :is="InfoComponent('FaceToFace')" />
    <component :is="InfoComponent('MapInfo')" />
    <component :is="CalendarComponent()" :year="2024" :month="4" :date="6" />
    <!-- <TheCalendar :year="2024" :month="4" :date="6" /> -->
    <component :is="InfoComponent('WeddingInfo')" />
    <TimelineItems />
    <component :is="InfoComponent('AccountInfo')" />
    <GuestBook />
    <template v-for="(infoComponent, idx) in infoComponents" :key="`${infoComponent}-${idx}`">
      <component :is="InfoComponent(infoComponent)" />
    </template>
  </div>
</template>

<script setup>
// import { TheCalendar } from '@/components/calendar'
import { TimelineItems } from '@/components/timeline'
import GuestBook from '@/components/guestbook/GuestBook.vue'
import MainImage from '@/components/MainImage.vue'
import TitleInfo from '@/components/info/TitleInfo.vue'
import { lazyLoadComponentIfVisible } from '@/utils/lazy'

const infoComponents = ['DriveInfo', 'ShareInfo', 'ThankYou', 'CopyRight']

const CalendarComponent = () => {
  return lazyLoadComponentIfVisible({
    componentLoader: () => import(`@/components/calendar/TheCalendar.vue`),
    loadingComponent: () => import(`@/components/info/LoadingInfo.vue`),
  })
}

const InfoComponent = (component) => {
  return lazyLoadComponentIfVisible({
    componentLoader: () => import(`@/components/info/${component}.vue`),
  })
}
</script>

<style lang="scss" scoped>
.layout-body {
  display: flex;
  flex-direction: column;
  max-width: 36rem;
  background-color: #fdfdfd;
}
.main-image-effect {
  position: absolute;
}
</style>
