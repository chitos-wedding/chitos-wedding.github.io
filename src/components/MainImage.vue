<template>
  <div class="main">
    <img class="main-image" :src="MainImage" />
  </div>
</template>

<script setup>
import MainImage from '@/assets/img/main.jpg'
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 30rem;
  &-image {
    width: 100%;
    padding: 0 4rem;
  }
}
</style>
