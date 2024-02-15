<template>
  <q-dialog v-model="dialog" style="max-width: inherit">
    <div class="detail">
      <div class="detail-header">
        <q-btn flat round size="xs" icon="close" v-close-popup />
      </div>
      <div class="detail-body">
        <img class="detail-body-image" :src="model.image ?? defaultImage" loading="lazy" />
        <div class="detail-body-content">
          <div class="detail-body-content-time">{{ model.createdDt }}</div>
          <div class="detail-body-content-name">{{ model.name }}</div>
          <div class="detail-body-content-message">{{ model.message }}</div>
        </div>
      </div>
    </div>
  </q-dialog>
</template>
<script setup>
import { ref } from 'vue'
import defaultImage from '@/assets/img/default.jpg'

const dialog = ref(false)
const model = ref({})

const open = (item) => {
  dialog.value = true
  model.value = item
}
const close = () => (dialog.value = false)

defineExpose({ open, close })
</script>
<style lang="scss" scoped>
.detail {
  background-color: white;
  width: 36rem;

  &-header {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
    color: grey;
  }

  &-body {
    padding: 0 2rem 2rem;

    &-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 0.3rem;
    }

    &-content {
      &-time {
        text-align: right;
        color: #777;
        font-size: 1rem;
        font-weight: bold;
      }
      &-name {
        border-bottom: 0.1rem solid $grey-6;
      }
      &-message {
        padding: 1rem 0;
      }
    }
  }
}
</style>
