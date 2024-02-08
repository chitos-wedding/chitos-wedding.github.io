<template>
  <div class="family">
    <div class="family-area">
      <span class="family-area-name">{{ '백승기' }}</span>
      <span class="family-area-name space">{{ '·' }}</span>
      <span class="family-area-name">{{ '오미자' }}</span>
      <span class="preposition">의</span>
      <span class="space">아들</span>
      <span class="family-area-name">{{ '서현' }}</span>
    </div>
    <div class="family-area">
      <span class="family-area-name">{{ '하양수' }}</span>
      <span class="family-area-name space">{{ '·' }}</span>
      <span class="family-area-name">{{ '김정애' }}</span>
      <span class="preposition">의</span>
      <span class="space-x2">딸</span>
      <span class="family-area-name">{{ '승진' }}</span>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.family {
  text-align: center;
  padding: 3rem;
  font-size: 1.6rem;

  &-area {
    padding-bottom: 1rem;

    white-space: pre-wrap;

    &-name {
      font-weight: bold;
      letter-spacing: 0.2rem;
    }
    .preposition {
      margin-left: 0.5rem;
    }
    .space {
      margin: 0 0.75rem;
    }
    .space-x2 {
      margin: 0 1.5rem;
    }
  }
}
</style>
