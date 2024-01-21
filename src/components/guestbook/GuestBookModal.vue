<template>
  <q-dialog :persistent="isTyped" v-model="dialog" @update:model-value="dialogChanged">
    <q-card style="width: 100%">
      <q-card-section>
        <div class="text-h6">방명록 남기기</div>
      </q-card-section>
      <q-card-section>
        <div>승진이와 추억이 담긴 사진과 함께 방명록을 남겨주시면 추첨을 통해 상품을 드려요!</div>
      </q-card-section>
      <q-card-section>
        <q-file
          counter
          outlined
          clearable
          label="사진(선택)"
          accept="image/*"
          style="margin-bottom: 0.5rem"
          v-model="gb.image"
        >
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
        <q-input
          counter
          outlined
          label="이름(필수)"
          maxlength="20"
          style="margin-bottom: 0.5rem"
          v-model="gb.name"
        />
        <q-input
          counter
          outlined
          autogrow
          label="메시지(필수)"
          maxlength="800"
          v-model="gb.message"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="취소" color="primary" v-close-popup />
        <q-btn flat label="저장" color="primary" :disable="isEmpty" @click="saveMessage" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, computed } from 'vue'
import { addDoc } from 'firebase/firestore'
import { uploadBytes, getDownloadURL } from 'firebase/storage'
import { getCollectionRef, getStorageRef } from '@/plugins/firebase'

const emit = defineEmits(['update'])

const commentsRef = getCollectionRef('comments')
const dialog = ref(false)
const gb = ref({
  image: null,
  name: '',
  message: '',
})

const isTyped = computed(() => !!gb.value.name || !!gb.value.message)
const isEmpty = computed(() => gb.value.name && gb.value.message)

const open = () => (dialog.value = true)
const close = () => (dialog.value = false)
const dialogChanged = () => {
  gb.value = {
    image: null,
    name: '',
    message: '',
  }
}

const saveMessage = async () => {
  if (gb.value.image) {
    const imageRef = getStorageRef(`images/${gb.value.image.name}`)
    const result = await uploadBytes(imageRef, gb.value.image)
    gb.value.imageUrl = await getDownloadURL(result.ref)
  }
  const data = {
    image: gb.value.imageUrl || null,
    name: gb.value.name,
    message: gb.value.message,
    createdDt: new Date(),
  }
  await addDoc(commentsRef, data)

  emit('update')
  close()
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
