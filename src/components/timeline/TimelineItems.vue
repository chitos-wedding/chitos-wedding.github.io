<template>
  <div class="timeline-container">
    <TimelineItem v-for="(item, idx) in items" :item="item" :key="idx" />
  </div>
</template>
<script setup>
import { TimelineItem } from '.'

const items = [
  {
    text: '2019 첫 데이트\n가을의...',
    date: 'February 25 2019',
    link: {
      // url: 'https://github.com/florinpop17/app-ideas',
      // text: 'Check it out on GitHub',
      url: '',
      text: '더보기 >',
    },
  },
  {
    text: '둘 만의 첫 프로젝트 ...',
    date: 'March 04 2019',
    link: {
      // url: 'https://florin-pop/blog/2019/03/weekly-coding-challenge/',
      // text: 'Check it out here',
      url: '',
      text: '더보기 >',
    },
  },
  {
    text: 'Got 1.000 followers on Twitter',
    date: 'March 07 2019',
    link: {
      // url: 'https://twitter.com/florinpop1705',
      // text: 'See profile',
      url: '',
      text: '더보기 >',
    },
  },
  {
    text: 'I published my first article in the FreeCodeCamp Medium Publication',
    date: 'March 18 2019',
    link: {
      // url: 'https://medium.freecodecamp.org/how-to-build-a-double-slider-sign-in-and-sign-up-form-6a5d03612a34',
      // text: 'Check it out here',
      url: '',
      text: '더보기 >',
    },
  },
  {
    text: 'Over 12.000 views in a single day on my Medium posts',
    date: 'April 05 2019',
    link: {
      // url: 'https://medium.com/@popflorin1705',
      // text: 'See profile',
      url: '',
      text: '더보기 >',
    },
  },
]
</script>
<style lang="scss" scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;
}

.timeline-container::after {
  content: '';
  background-color: #e17b77;
  position: absolute;
  left: 1rem;
  // width: 4px;
  width: 0.2rem;
  height: 100%;
}
</style>
