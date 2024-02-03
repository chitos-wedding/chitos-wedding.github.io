<template>
  <div class="welcome">
    <div class="welcome-message" v-for="message in messages" :key="message">{{ message }}</div>
  </div>
</template>
<script setup>
const messages = [
  '함께일 때 행복한 우리,',
  '멀고도 아름다운 길을',
  '나란히 걸어보려 합니다.',
  '\n',
  '저희의 새로운 시작을 위해',
  '기쁜 마음으로 자리를 빛내주세요.',
]
</script>
<style lang="scss" scoped>
.welcome {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  &-message {
    color: $grey-8;
    font-size: 1.3rem;
    line-height: 2.5rem;

    white-space: pre-wrap;
    word-break: keep-all;
  }
}
</style>
