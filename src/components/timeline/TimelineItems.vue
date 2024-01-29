<template>
  <div class="timeline-container">
    <div class="title text-bold text-center">우리들의 이야기</div>
    <div class="divider" />
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
    text: '2020 ',
    date: 'March 04 2019',
    image: 'main.jpg',
    images: ['main.jpg', 'main.jpg', 'main.jpg'],
  },
  {
    link,
    text: '둘만의 텃밭, 도시농부 도전기',
    date: '2021',
  },
  {
    link,
    text: 'I published my first article in the FreeCodeCamp Medium Publication',
    date: 'March 18 2019',
  },
  {
    link,
    text: '치토스 웨딩 준비',
    date: '2023년 봄에서 겨울까지',
    images: [
      // 'studio/01.jpg',
      // 'studio/02.jpg',
      // 'studio/03.jpg',
      // 'studio/04.jpg',
      // 'studio/05.jpg',
      // 'studio/06.jpg',
      // 'studio/07.jpg',
      // 'studio/08.jpg',
      // 'studio/09.jpg',
      // 'studio/10.jpg',
      // 'studio/11.jpg',
      // 'studio/12.jpg',
      // 'studio/13.jpg',
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg',
      '05.jpg',
      '06.jpg',
      '07.jpg',
      '08.jpg',
      '09.jpg',
      '10.jpg',
      '11.jpg',
      '12.jpg',
      '13.jpg',
    ],
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
