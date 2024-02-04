<template>
  <img class="title-image" :src="TitleImage" loading="lazy" />
</template>
<script setup>
import TitleImage from '@/assets/img/title.png'
</script>
<style lang="scss" scoped>
.title-image {
  width: 100%;
}
</style>
