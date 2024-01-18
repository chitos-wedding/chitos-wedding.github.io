<template>
  <div class="drive-info">
    <div class="title text-bold text-center">사진 올려주세요</div>
    <div class="divider" />
    <div class="drive-info-button-group">
      <q-btn-group unelevated>
        <q-btn label="구글 드라이브" icon="img:icon/google_drive.png" @click="clickGDrive" />
        <q-btn label="네이버 마이박스" icon="img:icon/mybox_drive.png" @click="clickNDrive" />
      </q-btn-group>
    </div>
  </div>
</template>

<script setup>
const clickGDrive = () => {
  window.open(
    'https://drive.google.com/drive/folders/1J388QQ_izKRvI0_gJLyGIqSBpFBSirKX?usp=drive_link',
    '_blank',
  )
}
const clickNDrive = () => {
  window.open('http://naver.me/xRPff5UI', '_blank')
}
</script>

<style lang="scss" scoped>
.drive-info {
  &-button-group {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
}
</style>
