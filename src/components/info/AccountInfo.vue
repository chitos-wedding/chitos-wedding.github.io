<template>
  <div class="account-info">
    <div class="account-info-title text-bold text-center">마음 전하실 곳</div>
    <div class="account-info-divider">
      <hr class="account-info-divider-line" />
    </div>
    <div class="account-info-message">
      <p>참석이 어려워 직접 축하를 전하지 못하는</p>
      <p>분들을 위해 계좌번호를 기재하였습니다.</p>
      <p>전해주시는 진심은 소중하게 간직하여</p>
      <p>좋은 부부의 모습으로 보답하겠습니다.</p>
    </div>
    <div class="account-info-items q-gutter-sm">
      <q-list v-for="(item, idx) in items" bordered class="rounded-borders" :key="idx">
        <q-expansion-item :label="item.headerText">
          <q-card>
            <q-card-section>
              <div class="account-info-item-title">{{ `${item.headerText} ${item.name}` }}</div>
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
  &-title {
    font-size: 1.25rem;
    padding: 1rem 0;
  }

  &-divider {
    color: $grey-6;
    padding: 0 1rem;

    &-line {
      border-top: 1px dotted;
    }
  }

  &-message {
    padding: 1rem;
  }

  &-item {
    &-title {
    }
    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
