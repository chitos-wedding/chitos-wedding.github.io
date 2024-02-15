<template>
  <div>
    <img class="long-road" :src="getImage('long-road.jpg')" loading="lazy" />
  </div>
</template>
<script setup>
const getImage = (fileName) => {
  return new URL(`/src/assets/img/${fileName || 'default.jpg'}`, import.meta.url).href
}
</script>
<style lang="scss" scoped>
.long-road {
  width: 100%;
  padding: 2rem 0;
}
</style>
