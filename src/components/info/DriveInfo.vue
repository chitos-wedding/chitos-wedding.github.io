<template>
  <div class="drive-info">
    <div class="title text-bold text-center">사진 올려주세요</div>
    <div class="divider" />
    <div class="drive-info-messages">
      <div>결혼식 당일 촬영한 사진과 영상은</div>
      <div>신랑 신부에게 전달하고 싶다면</div>
      <div>아래 드라이브에 편하게 올려주세요!🙌</div>
    </div>
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
  &-messages {
    padding: 1rem;
    text-align: center;
    color: $grey-8;
  }
}
</style>
