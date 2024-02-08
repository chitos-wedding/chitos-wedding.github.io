<template>
  <q-dialog v-model="isOpen" @update:model-value="dialogChanged">
    <q-card class="check">
      <q-card-section class="check-header">
        <div class="">참석 의사 전달</div>
        <q-btn flat round class="check-header-icon" size="xs" icon="close" v-close-popup />
      </q-card-section>

      <q-card-section>
        <div class="check-form">
          <div class="check-form-item">
            <div class="check-form-item-label">구분</div>
            <q-btn-toggle
              spread
              unelevated
              toggle-color="brown-3"
              :options="[
                { label: '신랑측', value: 'groom' },
                { label: '신부측', value: 'bride' },
              ]"
              style="border: 0.1rem solid rgba(0, 0, 0, 0.24)"
              v-model="model.classification"
            />
          </div>

          <div class="check-form-item">
            <div class="check-form-item-label">성함</div>
            <q-input outlined dense v-model="model.name" />
          </div>

          <div class="check-form-item">
            <div class="check-form-item-label">참석인원</div>
            <q-input
              outlined
              dense
              type="number"
              min="0"
              max="20"
              label="본인 포함 총 참석인원"
              v-model.number="model.attendance"
            />
          </div>
        </div>
      </q-card-section>

      <q-card-actions class="check-action">
        <div class="check-action-button" @click="send">참석 의사 보내기</div>
        <q-checkbox size="sm" v-model="notToday" label="오늘 하루 보지 않기" />
        <div class="check-action-close" v-close-popup>[닫기]</div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { addDoc } from 'firebase/firestore'
import { getCollectionRef } from '@/plugins/firebase'

const q = useQuasar()

const getModel = () => ({
  classification: 'groom', // [groom, bride]
  name: '',
  attendance: null,
})

const notToday = ref(false)
const model = ref(getModel())
const commentsRef = getCollectionRef('participants')

const send = async () => {
  q.loading.show()
  try {
    const data = model.value
    await addDoc(commentsRef, data)
    close()
  } finally {
    q.loading.hide()
  }
}

const setCookie = () => {
  const d = new Date()
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000)
  document.cookie = `not_today=true;expires=${d.toUTCString()};path=/`
}

const isOpen = ref(false)
const open = () => (isOpen.value = true)
const close = () => (isOpen.value = false)
const dialogChanged = () => {
  model.value = getModel()
  if (notToday.value) setCookie()
}
defineExpose({ open, close })
</script>
<style lang="scss" scoped>
.check {
  &-header {
    display: flex;
    justify-content: space-between;

    &-icon {
      color: grey;
    }
  }
  &-form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;

    &-item {
      display: grid;
      grid-template-columns: 10rem 1fr;
      grid-gap: 1rem;

      &-label {
        display: flex;
        align-items: center;
      }
    }
  }
  &-action {
    display: flex;
    justify-content: space-between;
    margin: 1rem;

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      line-height: 4rem;
      border: 0.1rem solid $grey-4;
      border-radius: 0.5rem;
      // background-color: $grey-4;
      background-color: #ece2e2c9;
      cursor: pointer;
    }

    &-close {
      cursor: pointer;
      &:hover {
        color: $grey-6;
        text-decoration: underline;
      }
    }
  }
}
</style>
