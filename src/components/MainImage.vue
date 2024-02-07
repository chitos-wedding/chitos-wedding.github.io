<template>
  <div class="main">
    <div class="main-wrapper">
      <img class="main-image" :src="MainImage" />
      <div class="main-wrapper-shadow"></div>
    </div>
  </div>
</template>

<script setup>
import MainImage from '@/assets/img/main.jpg'
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 30rem;

  &-wrapper {
    position: relative;
    &-shadow {
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 7rem;
      // background: linear-gradient(180deg, transparent, #fdfdfd);
    }
  }

  &-image {
    width: 100%;
    padding: 0 3rem;
    position: relative;
  }
}
</style>
