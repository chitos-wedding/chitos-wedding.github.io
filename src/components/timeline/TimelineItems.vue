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
    text: '👶 1992.10 꼬마 신랑 서현 탄생\n👶 1994.05 꼬마 신부 승진 탄생 ',
    date: '1992년, 1994년 꼬꼬마 시절',
    image: 'childhood/01.jpg',
    images: ['childhood/01.jpg', 'childhood/02.jpg', 'childhood/03.jpg', 'childhood/04.png'],
  },
  {
    link,
    text: '💕 승진과 서현의 첫 만남\n💻 둘만의 첫 프로젝트\n🤭 싸(피)내 커플 진지가?',
    date: '2019년 여름부터 겨울까지',
    image: 'ssafy/01.jpg',
    images: ['ssafy/01.jpg', 'ssafy/02.jpg', 'ssafy/03.jpg', 'ssafy/04.png', 'ssafy/05.jpg'],
  },
  {
    link,
    text: '🍊 함께한 첫 제주 여행\n💍 치토스 첫 커플링',
    date: '2020년 봄에서 겨울까지',
    image: '2020/01.jpg',
    images: ['2020/01.jpg', '2020/02.jpg', '2020/03.jpg', '2020/04.jpg', '2020/05.jpg'],
  },
  {
    link,
    text: '👨‍🌾 둘만의 텃밭, 도시농부 도전기\n🎄 크리스마스 셀프 촬영',
    date: '2021 봄에서 겨울까지',
  },
  {
    link,
    text: '💗 치토스 커플 1000일\n👩🏻‍🤝‍🧑🏻 전주 나들이 커플 한복\n',
    date: '2022년 봄에서 겨울까지',
  },
  {
    link,
    text: '🛫 일본과 제주 섬 여행\n👰🤵 치토스 웨딩 준비\n⛄ ',
    date: '2023년 봄에서 겨울까지',
    image: 'studio/01.jpg',
    images: [
      'studio/01.jpg',
      'studio/02.jpg',
      'studio/03.jpg',
      'studio/04.jpg',
      'studio/05.jpg',
      'studio/06.jpg',
      'studio/07.jpg',
      'studio/08.jpg',
      'studio/09.jpg',
      'studio/10.jpg',
      'studio/11.jpg',
      'studio/12.jpg',
      'studio/13.jpg',
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
