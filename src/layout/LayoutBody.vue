<template>
  <div class="layout-body">
    <img
      class="effect"
      src="https://cdn2.makedear.com/homepage/img/effect/new1/2.png"
      loading="lazy"
    />
    <TitleInfo />
    <MainImage />
    <HallInfo />
    <PoemInfo />
    <LongRoad />
    <WelcomeInfo />
    <FamilyInfo />
    <FaceToFace />
    <MapInfo />
    <TheCalendar :year="2024" :month="4" :date="6" />
    <WeddingInfo />
    <TimelineItems />
    <CheckParticipation @open="openCheckModal" />
    <AccountInfo />
    <PolitePhoto />
    <GuestBook />
    <DriveInfo />
    <ShareInfo />
    <ThankYou />
    <CopyRight />
    <CheckAttendanceModal ref="checkAttendanceModalRef" />
  </div>
</template>

<script setup>
import { TheCalendar } from '@/components/calendar'
import { TimelineItems } from '@/components/timeline'
import GuestBook from '@/components/guestbook/GuestBook.vue'
import MainImage from '@/components/MainImage.vue'
import PolitePhoto from '@/components/info/PolitePhoto.vue'
import AccountInfo from '@/components/info/AccountInfo.vue'
import TitleInfo from '@/components/info/TitleInfo.vue'
import LongRoad from '@/components/info/LongRoad.vue'
import HallInfo from '@/components/info/HallInfo.vue'
import FaceToFace from '@/components/info/FaceToFace.vue'
import WeddingInfo from '@/components/info/WeddingInfo.vue'
import MapInfo from '@/components/info/MapInfo.vue'
import PoemInfo from '@/components/info/PoemInfo.vue'
import FamilyInfo from '@/components/info/FamilyInfo.vue'
import DriveInfo from '@/components/info/DriveInfo.vue'
import ShareInfo from '@/components/info/ShareInfo.vue'
import ThankYou from '@/components/info/ThankYou.vue'
import WelcomeInfo from '@/components/info/WelcomeInfo.vue'
import CopyRight from '@/components/info/CopyRight.vue'
import CheckParticipation from '@/components/info/CheckParticipation.vue'
import CheckAttendanceModal from '@/components/popup/CheckAttendanceModal.vue'
import { ref, onMounted } from 'vue'

const checkAttendanceModalRef = ref(null)

const getCookie = (name) => {
  var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
  return value ? value[2] : null
}

const openCheckModal = () => {
  checkAttendanceModalRef.value.open()
}

onMounted(() => {
  if (!getCookie('not_today')) openCheckModal()
})
</script>

<style lang="scss" scoped>
.layout-body {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 36rem;
  background-color: #fdfdfd;

  .effect {
    position: absolute;
    width: 100%;
  }
}

@media only screen and (max-width: 767px) {
  .layout-body {
    max-width: 100%;
  }
}
</style>
