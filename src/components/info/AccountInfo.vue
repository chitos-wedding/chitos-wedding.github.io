<template>
  <div class="account-info">
    <div class="title text-bold text-center">마음 전하실 곳</div>
    <div class="divider" />
    <div v-for="message in messages" class="account-info-message" :key="message">
      {{ message }}
    </div>
    <div class="account-info-items q-gutter-sm">
      <q-list v-for="(item, idx) in items" bordered class="rounded-borders" :key="idx">
        <q-expansion-item :label="item.headerText">
          <q-card>
            <q-card-section>
              <div>{{ `${item.headerText} ${item.name}` }}</div>
              <div class="account-info-item-content">
                <div class="account-info-item-content-text">
                  {{ `${item.bankName} ${item.accountNumber}` }}
                </div>
                <q-btn
                  color="white"
                  text-color="primary"
                  label="Copy"
                  @click="copyClipboard(item.accountNumber)"
                />
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>
<script setup>
import { useQuasar } from 'quasar'
const quasar = useQuasar()

const items = [
  {
    headerText: '신랑',
    name: '백서현',
    bankName: '농협',
    accountNumber: '70912053535',
  },
  {
    headerText: '신부',
    name: '하승진',
    bankName: '국민',
    accountNumber: '61580104176214',
  },
]

const messages = [
  '저희 두 사람의 소중한 시작을',
  '함께해 주시는 모든 분들께 감사드리며,',
  '전해주시는 따뜻한 마음 깊이 새기며',
  '오래도록 행복하게 잘 살겠습니다.',
]

const copyClipboard = (text) => {
  navigator.clipboard.writeText(text)
  quasar.notify({
    message: '복사되었습니다.',
    type: 'positive',
    color: 'purple',
    position: 'center',
    timeout: 1000,
  })
}
</script>
<style lang="scss" scoped>
.account-info {
  margin: 0 3rem;
  &-message {
    color: $grey-8;
    white-space: pre-wrap;
    text-align: center;
    line-height: 2.5rem;
  }

  &-items {
    padding: 1rem;
  }

  &-item {
    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
