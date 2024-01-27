<template>
  <div class="poem">
    <div class="poem-image">
      <q-intersection once transition="fade" transition-duration="1000">
        <img
          class="poem-image-item"
          src="https://cdn2.makedear.com/homepage/img/leaf.png"
          alt="leaf"
        />
      </q-intersection>
    </div>
    <div class="poem-line" v-for="message in messages" :key="message">{{ message }}</div>
  </div>
</template>
<script setup>
const messages = [
  '함께 가자',
  '먼 길',
  '\n',
  '너와 함께라면',
  '멀어도 가깝고',
  '\n',
  '아름답지 않아도',
  '아름다운 길',
  '\n',
  '<먼 길>, 나태주',
  '\n',
]
</script>
<style lang="scss" scoped>
.poem {
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 2rem 7rem;

  &-image {
    padding-bottom: 2rem;

    &-item {
      width: 2rem;
      height: 2rem;
    }
  }

  &-line {
    color: $grey-8;
    font-size: 2rem;
    font-family: 'Nanum Pen Script', cursive;

    border-bottom: 0.1rem solid $grey-3;

    white-space: pre-wrap;
    word-break: keep-all;
  }
}
</style>
