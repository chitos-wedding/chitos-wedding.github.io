<template>
  <div class="check">
    <div class="title text-bold text-center">참석 정보</div>
    <div class="divider" />
    <div class="check-message">참석의 부담은 가지지 말아주시고</div>
    <div class="check-message">정성껏 준비하기 위해 여쭙는 것이니</div>
    <div class="check-message">참석 정보를 알려주시면 감사하겠습니다.</div>
    <div class="check-button style-button" @click="emit('open')">참석 정보 전달하기</div>
  </div>
</template>
<script setup>
const emit = defineEmits(['open'])
</script>
<style lang="scss" scoped>
.check {
  padding: 2rem;

  &-message {
    color: $grey-8;
    white-space: pre-wrap;
    text-align: center;
    line-height: 2.5rem;
  }

  &-button {
    margin: 1rem;
    padding: 1rem;
    text-align: center;
  }
}
</style>
