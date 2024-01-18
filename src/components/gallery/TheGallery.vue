<template>
  <!-- <div class="gallery">
    <div class="title">Photo Gallery</div>
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
      </q-carousel-control>
    </template>
  </q-carousel> -->
  <div ref="galleryRef" class="gallery">
    <div class="gallery-section">a</div>
    <div class="gallery-section">b</div>
    <div class="gallery-section">c</div>
    <div class="gallery-section">d</div>
    <div class="gallery-section">e</div>
    <div class="gallery-section">f</div>
    <div class="gallery-section">g</div>
    <div class="gallery-section">h</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// const fullscreen = ref(false)
// const slide = ref(1)
const galleryRef = ref(null)
console.log(galleryRef)

onMounted(() => {
  galleryRef.value.addEventListener('wheel', (evt) => {
    evt.preventDefault()
    galleryRef.value.scrollLeft += evt.deltaY
  })
})
</script>

<style lang="scss" scoped>
// .gallery {
//   display: flex;
//   justify-content: center;
// }
.gallery {
  display: flex;
  overflow-x: auto;

  &-section {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 10rem;
    min-height: 10rem;

    &:nth-child(even) {
      background-color: teal;
    }
  }
}
</style>
