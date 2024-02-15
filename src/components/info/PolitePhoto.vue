<template>
  <div>
    <img class="polite-photo" :src="getImage('polite-photo.jpg')" loading="lazy" />
  </div>
</template>
<script setup>
const getImage = (fileName) => {
  return new URL(`/src/assets/img/${fileName || 'default.jpg'}`, import.meta.url).href
}
</script>
<style lang="scss" scoped>
.polite-photo {
  width: 100%;
  padding: 2rem 0;
}
</style>
