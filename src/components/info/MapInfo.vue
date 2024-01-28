<template>
  <div class="map-info">
    <div class="title text-bold text-center">오시는 길</div>
    <div class="divider" />
    <MapLink />
    <KakaoMap />
  </div>
</template>
<script setup>
import { KakaoMap, MapLink } from '@/components/map'
</script>
<style lang="scss" scoped>
.map-info {
  padding: 3rem;
}
</style>
