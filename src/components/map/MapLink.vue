<template>
  <div class="map-link">
    <div class="map-link-group">
      <div class="map-link-group-item" @click="clickNaver">
        <img class="map-link-group-item-image" src="/icon/naver_map.png" loading="lazy" />
        <span>네이버지도</span>
      </div>
      <div class="vertical" />
      <div class="map-link-group-item" @click="clickTmap">
        <img class="map-link-group-item-image" src="/icon/t_map.png" loading="lazy" />
        <span>티맵</span>
      </div>
      <div class="vertical" />
      <div class="map-link-group-item" @click="clickKakao">
        <img class="map-link-group-item-image" src="/icon/kakao_map.png" loading="lazy" />
        <span>카카오맵</span>
      </div>
    </div>
  </div>
</template>
<script setup>
const clickNaver = () => {
  window.open('https://map.naver.com/p/entry/place/1271639035?c=15.00,0,0,0,dh', '_blank')
}
const clickTmap = () => {
  window.open('tmap://search?name=그랑파티오 호텔인터불고엑스코', '_blank')
}
const clickKakao = () => {
  window.open('https://kko.to/8vDiyEQnAJ', '_blank')
}
</script>
<style lang="scss" scoped>
.map-link {
  padding: 1rem;
  font-size: 1.2rem;

  &-group {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    border: 0.1rem solid $grey-4;
    border-radius: 0.5rem;

    &-item {
      cursor: pointer;
      display: flex;
      padding: 1rem;
      justify-content: center;
      align-items: center;

      &-image {
        width: 1.6rem;
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
