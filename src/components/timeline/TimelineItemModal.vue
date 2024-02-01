<template>
  <q-dialog v-model="dialog">
    <q-card class="post">
      <div class="post-header">
        <q-btn flat round size="xs" icon="close" v-close-popup />
      </div>
      <q-carousel
        swipeable
        navigation
        arrows
        animated
        control-color="grey"
        transition-prev="jump-right"
        transition-next="jump-left"
        v-model="slide"
      >
        <q-carousel-slide
          v-for="(image, idx) in images"
          :name="`${image}-${idx}`"
          style="padding-top: 0"
          :key="image"
        >
          <img class="contents" :src="getImage(image)" loading="lazy" />
          <div class="image-wrapper" />
        </q-carousel-slide>
        <template #navigation-icon="{ active, onClick }">
          <div class="navigation-item" :class="{ active }" @click="onClick" />
        </template>
      </q-carousel>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const slide = ref('')

const images = ref([])

const getImage = (fileName) => {
  return new URL(`/src/assets/img/${fileName || 'default.png'}`, import.meta.url).href
}

const open = (items) => {
  images.value = items
  slide.value = `${images.value[0]}-0`
  dialog.value = true
}
const close = () => (dialog.value = false)

defineExpose({ open, close })
</script>
<style lang="scss" scoped>
.post {
  width: 100%;

  &-header {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
    color: grey;
  }
}
.contents {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.3rem;

  + .image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.navigation-item {
  margin: 1rem 0.5rem;
  width: 0.75rem;
  height: 0.75rem;
  background-color: $grey-4;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: $grey-5;
  }

  &.active {
    background-color: $grey-6;
  }
}
</style>
