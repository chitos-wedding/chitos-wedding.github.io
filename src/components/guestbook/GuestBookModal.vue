<template>
  <q-dialog
    ref="qDialogRef"
    :persistent="isTyped"
    v-model="dialog"
    @update:model-value="dialogChanged"
  >
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
import { useQuasar } from 'quasar'
import { addDoc } from 'firebase/firestore'
import { uploadBytes, getDownloadURL } from 'firebase/storage'
import { getCollectionRef, getStorageRef } from '@/plugins/firebase'

const emit = defineEmits(['update'])
const q = useQuasar()

const commentsRef = getCollectionRef('comments')
const qDialogRef = ref(null)
const dialog = ref(false)
const gb = ref({
  image: null,
  name: '',
  message: '',
})

const isTyped = computed(() => !!gb.value.name || !!gb.value.message)
const isEmpty = computed(() => !gb.value.name || !gb.value.message)

const open = () => qDialogRef.value.show()
const close = () => qDialogRef.value.hide()
const dialogChanged = () => {
  gb.value = {
    image: null,
    name: '',
    message: '',
  }
}

const resizeImage = (settings) => {
  const file = settings.file
  const maxSize = settings.maxSize
  const reader = new FileReader()
  const image = new Image()
  const canvas = document.createElement('canvas')

  const dataURItoBlob = (dataURI) => {
    const bytes =
      dataURI.split(',')[0].indexOf('base64') >= 0
        ? atob(dataURI.split(',')[1])
        : unescape(dataURI.split(',')[1])
    const mime = dataURI.split(',')[0].split(':')[1].split(';')[0]
    const max = bytes.length
    const ia = new Uint8Array(max)
    for (let i = 0; i < max; i++) ia[i] = bytes.charCodeAt(i)
    return new Blob([ia], { type: mime })
  }

  const resize = () => {
    let width = image.width
    let height = image.height
    if (width > height) {
      if (width > maxSize) {
        height *= maxSize / width
        width = maxSize
      }
    } else {
      if (height > maxSize) {
        width *= maxSize / height
        height = maxSize
      }
    }
    canvas.width = width
    canvas.height = height
    canvas.getContext('2d').drawImage(image, 0, 0, width, height)
    const dataUrl = canvas.toDataURL(file.type)
    return dataURItoBlob(dataUrl)
  }

  return new Promise((resolve, no) => {
    if (!file) return
    if (!file.type.match(/image.*/)) {
      no(new Error('Not an image'))
      return
    }
    reader.onload = (readerEvent) => {
      image.onload = () => {
        return resolve(resize())
      }
      image.src = readerEvent.target.result
    }
    reader.readAsDataURL(file)
  })
}

const handleImgInput = async (file) => {
  const config = {
    file,
    maxSize: 1024,
  }
  return await resizeImage(config)
}

const saveMessage = async () => {
  try {
    q.loading.show()
    if (gb.value.image) {
      const contentType = gb.value.image.type
      const imageRef = getStorageRef(`images/${gb.value.image.name}`)
      const resizedImageRef = getStorageRef(`images/resized/${gb.value.image.name}`)
      const [result, resizedResult] = await Promise.all([
        uploadBytes(imageRef, gb.value.image),
        uploadBytes(resizedImageRef, await handleImgInput(gb.value.image), { contentType }),
      ])
      const [imageUrl, resizedImageUrl] = await Promise.all([
        getDownloadURL(result.ref),
        getDownloadURL(resizedResult.ref),
      ])
      gb.value.imageUrl = imageUrl
      gb.value.resizedImageUrl = resizedImageUrl
    }
    const data = {
      resizedImage: gb.value.resizedImageUrl || null,
      image: gb.value.imageUrl || null,
      name: gb.value.name,
      message: gb.value.message,
      createdDt: new Date(),
    }
    await addDoc(commentsRef, data)
    emit('update')
    close()
  } finally {
    q.loading.hide()
  }
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
