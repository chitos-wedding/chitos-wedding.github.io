<template>
  <div class="link-button-group">
    <q-btn-group unelevated>
      <q-btn label="네이버지도" icon="img:icon/naver_map.png" @click="clickNaver" />
      <q-btn label="티맵" icon="img:icon/t_map.png" @click="clickTmap" />
      <q-btn label="카카오맵" icon="img:icon/kakao_map.png" @click="clickKakao" />
    </q-btn-group>
  </div>
</template>
<script setup>
const clickNaver = () => {
  window.open('https://map.naver.com/p/entry/place/1271639035?c=15.00,0,0,0,dh', '_blank')
}
const clickTmap = () => {
  window.open('https://map.naver.com/p/entry/place/1271639035?c=15.00,0,0,0,dh', '_blank')
}
const clickKakao = () => {
  window.open('https://kko.to/8vDiyEQnAJ', '_blank')
}
</script>
<style lang="scss" scoped>
.link-button-group {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
</style>
