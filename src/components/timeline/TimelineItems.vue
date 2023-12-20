<template>
  <div class="timeline-container">
    <TimelineItem v-for="(item, idx) in items" :item="item" :key="idx" />
  </div>
</template>
<script setup>
import { TimelineItem } from '.'

const items = [
  {
    text: 'Started working on the app-ideas repository',
    date: 'February 25 2019',
    link: {
      url: 'https://github.com/florinpop17/app-ideas',
      text: 'Check it out on GitHub',
    },
  },
  {
    text: 'Started the Weekly Coding Challenge program',
    date: 'March 04 2019',
    link: {
      url: 'https://florin-pop/blog/2019/03/weekly-coding-challenge/',
      text: 'Check it out here',
    },
  },
  {
    text: 'Got 1.000 followers on Twitter',
    date: 'March 07 2019',
    link: {
      url: 'https://twitter.com/florinpop1705',
      text: 'See profile',
    },
  },
  {
    text: 'I published my first article in the FreeCodeCamp Medium Publication',
    date: 'March 18 2019',
    link: {
      url: 'https://medium.freecodecamp.org/how-to-build-a-double-slider-sign-in-and-sign-up-form-6a5d03612a34',
      text: 'Check it out here',
    },
  },
  {
    text: 'Over 12.000 views in a single day on my Medium posts',
    date: 'April 05 2019',
    link: {
      url: 'https://medium.com/@popflorin1705',
      text: 'See profile',
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
  left: 1.8rem;
  width: 4px;
  height: 100%;
}
</style>
