<template>
  <q-dialog :persistent="isTyped" v-model="dialog" @update:model-value="dialogChanged">
    <q-card>
      <q-card-section class="row items-center">
        <q-input outlined label="이름" :rules="nameRules" v-model="gb.name">
          <template v-slot:append>
            <q-icon name="favorite" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="row items-center scroll">
        <span class="q-ml-sm">You are currently not connected to any network.</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat dense label="취소" color="primary" v-close-popup />
        <q-btn flat dense label="저장" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, computed } from 'vue'

const dialog = ref(false)
const gb = ref({
  name: '',
  message: '',
})

const nameRules = [(v) => v.length < 5 || 'test']

const isTyped = computed(() => !!gb.value.name || !!gb.value.name)

const open = () => (dialog.value = true)
const close = () => (dialog.value = false)
const dialogChanged = () => {
  gb.value.name = ''
  gb.value.message = ''
}

defineExpose({ open, close })
</script>
<style lang="scss" scoped>
.dialog-content {
  &-message {
    max-height: 20rem;
  }
}
</style>
