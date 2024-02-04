<template>
  <div ref="shareInfoRef" class="share">
    <div class="share-button style-button" @click="clickButton">{{ '카카오톡 공유하기' }}</div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const shareInfoRef = ref(null)

const makeAndRunScript = () => {
  const kakaoScript = document.createElement('script')
  kakaoScript.setAttribute('src', 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js')
  kakaoScript.setAttribute(
    'integrity',
    'sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8',
  )
  kakaoScript.setAttribute('crossorigin', 'anonymous')
  shareInfoRef.value.appendChild(kakaoScript)
  kakaoScript.onload = () => {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY)
  }
}

const clickButton = () => {
  window.Kakao.Share.sendDefault({
    objectType: 'location',
    address: '대구 북구 유통단지로 80',
    addressTitle: '인터불고 엑스코 그랑파티오홀',
    // buttonTitle: '청첩장 보기',
    content: {
      title: '서현과 승진 결혼합니다.',
      // description: 'description 입력 하는 곳',
      imageUrl:
        'http://k.kakaocdn.net/dn/E4Iot/bl4D00ddvHF/kFO6ngHM1IcHLnmNmobvD1/kakaolink40_original.jpg',
      link: {
        mobileWebUrl: 'https://chitos-wedding.github.io',
        webUrl: 'https://chitos-wedding.github.io',
      },
    },
  })
}

onMounted(() => {
  makeAndRunScript()
})
</script>
<style lang="scss" scoped>
.share {
  padding: 3rem;
  text-align: center;

  &-button {
    padding: 1rem;
  }
}
</style>
