<template>
  <div class="wedding">
    <div class="title text-bold text-center">안내사항</div>
    <div class="divider" />
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
        content-class="wedding-tab-item-text"
        :label="tab.text"
        :name="tab.value"
        :key="tab.value"
      />
    </q-tabs>
    <q-tab-panels animated class="wedding-tab-content" v-model="selected">
      <q-tab-panel dark :name="tabs[0].value">
        <div class="wedding-tab-content-item">
          <div class="wedding-content">
            <img class="wedding-content-image" :src="Hall" loading="lazy" />
            <div class="wedding-content-message">
              <div class="wedding-content-message-line emp">예식 정보</div>
              <div class="divider" />
              <div class="wedding-content-message-line">결혼식은 호텔 2층에서 진행됩니다.</div>
              <div class="wedding-content-message-line info">
                * 장소가 협소하여 화환은 정중히 사양합니다.
              </div>
              <br />
              <div class="wedding-content-message-line emp">주차 정보</div>
              <div class="divider" />
              <div class="wedding-content-message-line">인터불고 호텔 주차장: 제한 없음</div>
              <div class="wedding-content-message-line info">
                * 자리 없을 시, 엑스코 주차장: 2시간 제한
              </div>
            </div>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel :name="tabs[1].value">
        <div class="wedding-tab-content-item">
          <div class="wedding-content">
            <img class="wedding-content-image" :src="Dining" loading="lazy" />
            <div class="wedding-content-message">
              <div class="wedding-content-message-line emp">17:00 ~ 19:00</div>
              <div class="divider" />
              <div class="wedding-content-message-line">식사장소는 지하 1층입니다.</div>
              <div class="wedding-content-message-line">부족함 없이 즐기실 수 있도록</div>
              <div class="wedding-content-message-line">뷔페식으로 다양하게 준비했습니다.</div>
              <div class="wedding-content-message-line">마음껏 식사를 즐겨주시기 바랍니다.</div>
            </div>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel :name="tabs[2].value">
        <div class="wedding-tab-content-item">
          <div class="wedding-content">
            <img class="wedding-content-image" :src="PhotoBooth" loading="lazy" />
            <div class="wedding-content-message">
              <div class="wedding-content-message-line emp">16:00 ~ 17:30</div>
              <div class="divider" />
              <div class="wedding-content-message-line">본식 시작 1시간 전부터</div>
              <div class="wedding-content-message-line">포토부스가 설치될 예정입니다.</div>
              <div class="wedding-content-message-line">귀한 발걸음 해주신 여러분의</div>
              <div class="wedding-content-message-line">환한 미소와 따뜻한 말씀 남겨주시면</div>
              <div class="wedding-content-message-line">소중히 간직하도록 하겠습니다.</div>
            </div>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Hall from '@/assets/img/hall.jpg'
import Dining from '@/assets/img/dining.jpg'
import PhotoBooth from '@/assets/img/photo-booth.jpg'
const tabs = [
  {
    text: '식장정보',
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
:deep(.q-tab__label) {
  font-weight: bold;
}
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

      &-text {
        font-size: 2rem;
      }
    }
    &-content {
      border: 0.1rem solid $grey-4;
      border-top: none;
      border-radius: 0 0 0.5rem 0.5rem;

      &-item {
        height: 37rem;
      }
    }
  }

  &-content {
    // padding-bottom: 1rem;

    &-image {
      width: 100%;
      border-radius: 0.8rem;
    }
    &-message {
      padding: 1rem 0 0 0;
      text-align: center;
      line-height: 2.25rem;

      .emp {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .info {
        font-size: 1.2rem;
        color: $grey-8;
      }
    }
  }
}
</style>
