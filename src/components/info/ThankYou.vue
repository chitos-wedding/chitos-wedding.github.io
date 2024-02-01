<template>
  <div class="thank-you">
    <q-intersection once transition="fade" transition-duration="1000">
      <img class="thank-you-image" :src="getImage()" loading="lazy" />
    </q-intersection>
  </div>
</template>
<script setup>
const getImage = () => new URL('/src/assets/img/thank-you.jpg', import.meta.url).href
</script>
<style lang="scss" scoped>
.thank-you {
  &-image {
    width: 100%;
  }
}
</style>
