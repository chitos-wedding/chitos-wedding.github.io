<template>
  <div class="map-info">
    <div class="map-info-title text-bold text-center">오시는 길</div>
  </div>
  <MapLink />
  <KakaoMap />
</template>
<script setup>
import { KakaoMap, MapLink } from '@/components/map'
</script>
<style lang="scss" scoped>
.map-info {
  &-title {
    font-size: 1.25rem;
    padding: 1rem 0;
  }
}
</style>
