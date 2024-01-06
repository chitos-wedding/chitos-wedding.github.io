<template>
  <div class="gallery">
    <div class="gallery-title">Photo Gallery</div>
  </div>
  <q-carousel swipeable animated arrows infinite v-model="slide" v-model:fullscreen="fullscreen">
    <q-carousel-slide
      :name="1"
      img-src="https://cdn.quasar.dev/img/mountains.jpg"
      @click="fullscreen = true"
    />
    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />

    <template v-slot:control>
      <q-carousel-control position="top-right" :offset="[18, 18]">
        <q-btn flat round dense icon="close" color="black" @click="fullscreen = !fullscreen" />
        <!-- text-color="primary" -->
        <!-- color="white" -->
        <!-- :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'" -->
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script setup>
import { ref } from 'vue'

const fullscreen = ref(false)
const slide = ref(1)
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  justify-content: center;

  &-title {
    font-size: 1rem;
  }
}
</style>
