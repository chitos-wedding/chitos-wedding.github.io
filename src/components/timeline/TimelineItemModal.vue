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
        padding
        animated
        control-color="grey"
        transition-prev="jump-right"
        transition-next="jump-left"
        v-model="slide"
      >
        <q-carousel-slide name="text1" style="padding-top: 0">
          <img class="contents" :src="defaultImage" />
          <div class="image-wrapper" />
        </q-carousel-slide>
        <q-carousel-slide name="text2" style="padding-top: 0">
          <img class="contents" :src="mainImage" />
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
import defaultImage from '@/assets/img/default.png'
import mainImage from '@/assets/img/main.jpg'

const dialog = ref(false)
const slide = ref('text1')

const open = () => (dialog.value = true)
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
  background-color: $grey-2;

  + .image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(red, 10%);
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
