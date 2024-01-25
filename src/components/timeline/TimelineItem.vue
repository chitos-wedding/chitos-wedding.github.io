<template>
  <div class="timeline-item">
    <span class="circle" />
    <div class="timeline-item-content">
      <div class="timeline-item-content-time">{{ item.date }}</div>
      <div class="timeline-item-content-post">
        <img class="timeline-item-content-post-image" :src="getImage(item.image)" />
        <div class="timeline-item-content-post-body">
          <div class="timeline-item-content-post-body-text">{{ item.text }}</div>
          <div class="timeline-item-content-post-body-select" @click="openModal">
            {{ item.link.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <TimelineItemModal ref="TimelineItemModalRef" />
</template>
<script setup>
import { ref, toRefs } from 'vue'
import { TimelineItemModal } from '.'
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
const { item } = toRefs(props)
const TimelineItemModalRef = ref(null)

const getImage = (fileName) => {
  return new URL(`/src/assets/img/${fileName || 'default.png'}`, import.meta.url).href
}

const openModal = () => TimelineItemModalRef.value.open(item.value.images)
</script>
<style lang="scss" scoped>
.timeline-item {
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin: 1rem 0;
}

.timeline-item-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  width: 90%;
  padding: 1rem;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: #fff;

  &::after {
    content: ' ';
    background-color: #fff;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: -7.5px;
    right: auto;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
  }

  & p {
    font-size: 16px;
    line-height: 24px;
    margin: 15px 0;
    max-width: 250px;
  }

  &-time {
    text-align: right;
    color: #777;
    font-size: 0.75rem;
    font-weight: bold;
  }

  &-post {
    display: flex;
    gap: 0.5rem;

    &-image {
      width: 6rem;
      height: 6rem;
      flex: 0 0 auto;
      object-fit: contain;
      border-radius: 0.5rem;
      background-color: $grey-2;
    }

    &-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      &-text {
        padding: 0.5rem 0;
      }

      &-select {
        text-align: right;

        color: #777;
        font-size: 0.75rem;
        font-weight: bold;

        cursor: pointer;
        user-select: none;
      }
    }
  }
}

.circle {
  position: absolute;

  top: calc(50% - 0.75rem);
  left: 0.5rem;
  width: 20px;
  height: 20px;
  z-index: 100;

  border: 3px solid #e17b77;
  border-radius: 50%;
  background-color: #fff;
}
</style>
