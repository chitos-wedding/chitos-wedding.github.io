<template>
  <div class="title">
    <span class="title-item">서현</span>
    <span class="and">그리고</span>
    <span class="title-item">승진</span>
    <br />
    <span class="title-item">우리 결혼합니다</span>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.title {
  text-align: center;
  padding: 3rem;
  letter-spacing: 0.5rem;
  line-height: 3.5rem;

  font-size: 2.5rem;
  font-weight: bold;
  -webkit-text-stroke: 0.05rem #424242;

  .and {
    font-size: 1.5rem;
    padding: 1rem;
  }

  .item {
    padding: 1rem;
  }
  .left {
    writing-mode: vertical-rl;
  }
  .right {
    writing-mode: vertical-lr;
    margin-top: 2rem;
  }
}
</style>
