<template>
  <div class="wedding">
    <q-tabs
      dense
      narrow-indicator
      class="wedding-tabs"
      active-color="brown-6"
      active-bg-color="white"
      indicator-color="orange-3"
      active-class="wedding-tab-active"
      align="justify"
      v-model="selected"
    >
      <q-tab
        v-for="tab in tabs"
        class="wedding-tab-item"
        :label="tab.text"
        :name="tab.value"
        :key="tab.value"
      />
    </q-tabs>
    <q-tab-panels animated class="wedding-tab-content" v-model="selected">
      <q-tab-panel dark :name="tabs[0].value">
        <div>인터불고 호텔 주차장: 제한 없음</div>
        <div>* 자리 없을 시, 엑스코 주차장: 2시간 제한</div>
      </q-tab-panel>

      <q-tab-panel :name="tabs[1].value">
        <div>식사는 지하 1층에서 하실 수 있습니다.</div>
      </q-tab-panel>

      <q-tab-panel :name="tabs[2].value">
        <div class="wedding-photo">
          <img class="wedding-photo-image" :src="PhotoBooth" />
          <div class="wedding-photo-message">
            <div class="wedding-photo-message-line">포토부스가 설치될 예정입니다.</div>
            <div class="wedding-photo-message-line">귀한 발걸음 해주신 여러분의</div>
            <div class="wedding-photo-message-line">환한 미소와 따뜻한 말씀 남겨주시면</div>
            <div class="wedding-photo-message-line">소중히 간직하도록 하겠습니다.</div>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import PhotoBooth from '@/assets/img/photo-booth.jpg'
const tabs = [
  {
    text: '주차안내',
    value: 'parking',
  },
  {
    text: '식사안내',
    value: 'food',
  },
  {
    text: '포토부스',
    value: 'photo',
  },
]
const selected = ref(tabs[0].value)
</script>
<style lang="scss" scoped>
.wedding {
  padding: 3rem;

  &-tabs {
    // border-top: 0.1rem solid $grey-4;
    background-color: $grey-4;
    // border-bottom: 0.1rem solid red;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  &-tab {
    &-active {
      border-radius: 0.5rem 0.5rem 0 0;
    }
    &-item {
      border: 0.1rem solid $grey-4;
      border-bottom: none;
    }
    &-content {
      border: 0.1rem solid $grey-4;
      border-top: none;
      border-radius: 0 0 0.5rem 0.5rem;
    }
  }

  &-photo {
    padding: 1rem;
    &-image {
      width: 100%;
      border-radius: 0.8rem;
    }
    &-message {
      text-align: center;
      line-height: 3rem;
      // &-line {
      // }
    }
  }
}
</style>
