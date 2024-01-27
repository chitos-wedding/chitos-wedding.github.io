<template>
  <q-intersection once transition="fade" transition-duration="1000">
    <img class="main-image" :src="MainImage" />
  </q-intersection>
</template>

<script setup>
import MainImage from '@/assets/img/main.jpg'
</script>

<style scoped>
.main-image {
  width: 100%;
  padding: 0 4rem;
}
</style>
