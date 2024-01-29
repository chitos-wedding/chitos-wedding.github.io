<template>
  <div class="kakao-map">
    <div class="kakao-map-icon-wrapper">
      <q-icon
        class="kakao-map-icon"
        size="xs"
        :name="isLocked ? 'lock' : 'lock_open'"
        @click="isLocked = !isLocked"
      />
    </div>
    <div
      id="daumRoughmapContainer1705587233002"
      class="root_daum_roughmap root_daum_roughmap_landing"
      style="width: auto; position: relative"
    >
      <div
        :class="{ 'kakao-map-lock': isLocked }"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        @touchstart="isHovered = true"
        @touchend="isHovered = false"
        @touchcancel="isHovered = false"
      >
        <div v-if="isLocked && isHovered" class="kakao-map-lock-dim">
          <div class="kakao-map-lock-dim-message">
            {{ '자물쇠 아이콘을 눌러\n터치 잠금해제 후 확대 및 이동해주세요.' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLocked = ref(true)
const isHovered = ref(false)

const executeScript = () => {
  const scriptTag = document.createElement('script')
  const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1705587233002",
    "key" : "2hqer",
    "mapHeight" : "240"
  }).render();`)
  scriptTag.appendChild(inlineScript)
  document.body.appendChild(scriptTag)
}

const installScript = () => {
  const scriptTag = document.createElement('script')
  scriptTag.className = 'daum_roughmap_loader_script'

  const url_protocal = location.protocol == 'https:' ? 'https:' : 'http:'
  const cdn = '6af7869e'
  if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) return
  window.daum = window.daum || {}
  window.daum.roughmap = {
    cdn,
    URL_KEY_DATA_LOAD_PRE: `${url_protocal}//t1.daumcdn.net/roughmap/`,
    url_protocal,
  }
  const kakaoJsFile = `${url_protocal}//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/${cdn}/roughmapLander.js`
  scriptTag.src = kakaoJsFile
  document.body.appendChild(scriptTag)
  scriptTag.onload = () => {
    executeScript()
  }
}
installScript()
</script>
<style lang="scss" scoped>
.kakao-map {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  position: relative;

  &-icon {
    padding: 1rem;
    border: 0.1rem solid $grey-4;
    border-radius: 0.5rem;
    background-color: white;
    cursor: pointer;

    &-wrapper {
      display: flex;
      align-items: center;
    }
  }

  &-lock {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 21;

    &-dim {
      position: absolute;
      top: 70%;
      width: 100%;
      height: 30%;
      background-color: rgba($grey-9, 0.8);

      &-message {
        padding: 2rem;
        white-space: pre-wrap;
        color: white;
        text-align: center;
        line-height: 2rem;
      }
    }
  }
}
</style>
