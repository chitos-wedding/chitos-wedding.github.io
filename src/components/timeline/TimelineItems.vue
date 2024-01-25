<template>
  <div class="timeline-container">
    <TimelineItem
      v-for="(item, idx) in items"
      :item="item"
      :key="idx"
      :first="idx === 0"
      :last="idx === items.length - 1"
    />
  </div>
</template>
<script setup>
import { TimelineItem } from '.'

const link = {
  url: '',
  text: '더보기 >',
}
const items = [
  {
    link,
    text: '2019 첫 데이트\n가을의...',
    date: 'February 25 2019',
    // image: 'test.jpg',
  },
  {
    link,
    text: '둘 만의 첫 프로젝트 ...',
    date: 'March 04 2019',
    image: 'main.jpg',
    images: ['main.jpg', 'main.jpg', 'main.jpg'],
  },
  {
    link,
    text: 'Got 1.000 followers on Twitter',
    date: 'March 07 2019',
  },
  {
    link,
    text: 'I published my first article in the FreeCodeCamp Medium Publication',
    date: 'March 18 2019',
  },
  {
    link,
    text: 'Over 12.000 views in a single day on my Medium posts',
    date: 'April 05 2019',
  },
]
</script>
<style lang="scss" scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 3rem;
}
</style>
