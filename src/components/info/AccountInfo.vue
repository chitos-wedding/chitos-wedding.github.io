<template>
  <div class="account-info">
    <div class="title text-bold text-center">마음 전하실 곳</div>
    <div class="divider" />
    <div v-for="message in messages" class="account-info-message" :key="message">
      {{ message }}
    </div>
    <div class="account-info-items q-gutter-sm">
      <q-list v-for="(item, idx) in items" bordered class="style-button" :key="idx">
        <q-expansion-item :label="`${item.emoji} ${item.headerText}`">
          <q-card>
            <q-card-section>
              <div class="account-info-item">
                <div class="account-info-item-content">
                  <div class="account-info-item-content-text">
                    <span>{{ item.headerText }}</span>
                    <span class="account-info-item-content-text-name">{{ item.name }}</span>
                  </div>
                  <div class="account-info-item-content-kakao" @click="sendKakaoPay(item.kakaoPay)">
                    <img
                      class="account-info-item-content-kakao-image"
                      :src="KakaoPay"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="account-info-item-account">
                  <div class="account-info-item-account-text">
                    <span>{{ item.bankName }}</span> <span>{{ item.accountNumber }}</span>
                  </div>
                  <div
                    class="account-info-item-account-clip style-button"
                    @click="copyClipboard(item.accountNumber)"
                  >
                    <q-icon name="content_copy" />
                    {{ '복사' }}
                  </div>
                </div>
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
import KakaoPay from '@/assets/img/icon/kakao-pay.jpg'

const items = [
  {
    emoji: '🤵',
    headerText: '신랑',
    name: '백서현',
    bankName: '농협',
    accountNumber: '70912053535',
    kakaoPay: 'https://qr.kakaopay.com/FUMieahFh',
  },
  {
    emoji: '👰',
    headerText: '신부',
    name: '하승진',
    bankName: '국민',
    accountNumber: '61580104176214',
    kakaoPay: 'https://qr.kakaopay.com/Ej8UJiuLi',
  },
]

const messages = [
  '저희 두 사람의 소중한 시작을',
  '함께해 주시는 모든 분들께 감사드리며,',
  '전해주시는 따뜻한 마음 깊이 새기며',
  '오래도록 행복하게 잘 살겠습니다.',
]

const sendKakaoPay = (link) => {
  window.open(link, '_blank')
}

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
  padding: 0 2rem;
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
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-text {
        display: flex;
        gap: 0.5rem;

        &-name {
          font-weight: bold;
        }
      }

      &-kakao {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 7.5rem;
        height: 3rem;
        border-radius: 0.5rem;
        background-color: #ffdf00;

        &-image {
          margin-top: 0.2rem;
          width: 5rem;
          cursor: pointer;
        }
      }
    }
    &-account {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-clip {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        width: 7.5rem;
        height: 3rem;
        text-align: center;
      }
    }
  }
}
</style>
