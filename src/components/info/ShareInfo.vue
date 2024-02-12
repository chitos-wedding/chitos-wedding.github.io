<template>
  <div ref="shareInfoRef" class="share">
    <div class="share-button style-button" @click="clickButton">{{ '청첩장 카카오톡 공유하기' }}</div>
    <!-- <q-file filled v-model="kakaoImage" label="Label (stacked)" stack-label /> -->
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
      title: '서현🩷승진 우리 결혼합니다.',
      // description: 'description 입력 하는 곳',
      imageUrl:
        // 'http://k.kakaocdn.net/dn/biNd2Q/bl4Eqfn7LWN/xgFs8nNKOTstHSX44Hpqyk/kakaolink40_original.jpg',
        'http://k.kakaocdn.net/dn/WcA6z/bl4ExBD8OIu/F8XPwogt4m0G0o3RjtgtNk/kakaolink40_original.png',
      link: {
        mobileWebUrl: 'https://chitos-wedding.github.io',
        webUrl: 'https://chitos-wedding.github.io',
      },
    },
  })
}

// const kakaoImage = ref(null);
// const uploadImage = () => {
//   window.Kakao.Share.uploadImage({
//     file: [kakaoImage.value],
//   })
//   .then(function(response) {
//     console.log(response.infos.original.url);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// };

onMounted(() => {
  makeAndRunScript()
})
</script>
<style lang="scss" scoped>
.share {
  padding: 4rem 2rem;
  text-align: center;

  &-button {
    padding: 1rem;
  }
}
</style>
