<template>
  <div class="drive-info">
    <div class="title text-bold text-center">본식 사진 공유</div>
    <div class="divider" />
    <div class="drive-info-messages">
      <div>결혼식 당일 촬영한 사진과 영상은</div>
      <div>신랑 신부에게 전달하고 싶다면</div>
      <div>아래 드라이브에 편하게 올려주세요!🙌</div>
    </div>
    <div class="drive-info-button-group style-button">
      <div class="drive-info-button-group-item" @click="clickGDrive">
        <img
          class="drive-info-button-group-item-image"
          src="/icon/google_drive.png"
          loading="lazy"
        />
        <span>구글 드라이브</span>
      </div>
      <div class="vertical" />
      <div class="drive-info-button-group-item" @click="clickNDrive">
        <img
          class="drive-info-button-group-item-image"
          src="/icon/mybox_drive.png"
          loading="lazy"
        />
        <span>네이버 마이박스</span>
      </div>
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
  padding: 2rem;

  &-messages {
    padding: 1rem 0;
    text-align: center;
    color: $grey-8;
  }

  &-button-group {
    display: flex;
    align-items: center;
    justify-content: space-around;

    &-item {
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
