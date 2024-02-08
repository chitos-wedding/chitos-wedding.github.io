<template>
  <div class="timeline-item" :class="classes">
    <span class="circle" />
    <div class="timeline-item-content">
      <div class="timeline-item-content-time">{{ item.date }}</div>
      <div class="timeline-item-content-post">
        <q-intersection once transition="fade" transition-duration="1000">
          <img
            class="timeline-item-content-post-image"
            loading="lazy"
            :src="getImage(item.image)"
            @click="openModal"
          />
        </q-intersection>
        <div class="timeline-item-content-post-body">
          <div class="timeline-item-content-post-body-text">{{ item.text }}</div>
          <div class="timeline-item-content-post-body-select" @click="openModal">
            {{ item.link.text }}
          </div>
        </div>
      </div>
    </div>
    <TimelineItemModal ref="TimelineItemModalRef" />
  </div>
</template>
<script setup>
import { ref, toRefs, computed } from 'vue'
import { TimelineItemModal } from '.'
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  first: {
    type: Boolean,
    default: false,
  },
  last: {
    type: Boolean,
    default: false,
  },
})
const { item } = toRefs(props)
const TimelineItemModalRef = ref(null)

const classes = computed(() => ({
  'timeline-item-first': props.first,
  'timeline-item-last': props.last,
}))

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
  padding: 1rem 0;

  border-left: 0.2rem solid $red-3;
  // border-image: linear-gradient(to bottom, black 50%, transparent 50%) 1;
  &-first {
    border-image: linear-gradient(to bottom, transparent 50%, $red-3 50%) 1;
  }
  &-last {
    border-image: linear-gradient(to bottom, $red-3 50%, transparent 50%) 1;
  }
}

.timeline-item-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  width: 93%;
  padding: 1rem;

  border: 0.1rem solid $grey-4;
  border-radius: 0.5rem;
  background-color: #fff;

  &::after {
    content: ' ';
    background-color: #fff;
    border-left: 0.1rem solid $grey-4;
    border-bottom: 0.1rem solid $grey-4;
    position: absolute;
    left: -0.75rem;
    right: auto;
    top: calc(50% - 0.75rem);
    transform: rotate(45deg);
    width: 1.5rem;
    height: 1.5rem;
  }

  &-time {
    text-align: right;
    color: #777;
    font-weight: bold;
    font-size: 1.2rem;
  }

  &-post {
    display: flex;
    gap: 1rem;

    &-image {
      width: 7rem;
      height: 7rem;
      flex: 0 0 auto;
      object-fit: contain;
      border-radius: 0.5rem;
      background-color: $grey-2;
      cursor: pointer;
    }

    &-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      &-text {
        white-space: pre-wrap;
        padding: 0.5rem 0;
      }

      &-select {
        text-align: right;

        color: #777;
        font-weight: bold;
        font-size: 1.2rem;

        cursor: pointer;
        user-select: none;
      }
    }
  }
}

.circle {
  position: absolute;

  top: calc(50% - 0.75rem);
  left: -0.9rem;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 100;

  border: 0.2rem solid $red-3;
  border-radius: 50%;
  background-color: #fff;
}
</style>
