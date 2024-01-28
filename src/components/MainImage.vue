<template>
  <div class="main">
    <q-intersection once transition="fade" transition-duration="1000">
      <img class="main-image" :src="MainImage" />
    </q-intersection>
  </div>
</template>

<script setup>
import MainImage from '@/assets/img/main.jpg'
</script>

<style lang="scss" scoped>
.main {
  &-image {
    width: 100%;
    padding: 0 4rem;
  }
}
</style>
