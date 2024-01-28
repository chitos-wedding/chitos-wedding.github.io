<template>
  <div>
    <img class="long-road" :src="getImage('long-load.jpg')" />
  </div>
</template>
<script setup>
const getImage = (fileName) => {
  return new URL(`/src/assets/img/${fileName || 'default.png'}`, import.meta.url).href
}
</script>
<style lang="scss" scoped>
.long-road {
  width: 100%;
  padding: 2rem 0;
}
</style>
