<template>
  <div class="layout-main">
    <LayoutHead />
    <LayoutBody />
  </div>
</template>

<script setup>
import { LayoutHead, LayoutBody } from '.'
</script>

<style lang="scss" scoped>
.layout-main {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  // background-color: #333;
}
</style>
