<template>
  <div class="timeline-item">
    <span class="circle" />
    <div class="timeline-item-content">
      <time>{{ item.date }}</time>
      <p>{{ item.text }}</p>
      <a v-if="item.link" :href="item.link.url" target="_blank" rel="noopener noreferrer">
        {{ item.link.text }}
      </a>
    </div>
  </div>
</template>
<script setup>
import { toRefs } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
const { item } = toRefs(props)
</script>
<style lang="scss" scoped>
.timeline-item {
  display: flex;
  justify-content: flex-end;
  // justify-content: flex-start;
  // padding-right: 30px;
  // padding-left: 0;
  // padding-left: 30px;
  position: relative;
  margin: 1rem 0;
  width: 100%;
  // width: 50%;

  // &:nth-child(odd) {
  //   align-self: flex-end;
  //   justify-content: flex-start;
  //   padding-left: 30px;
  //   padding-right: 0;
  // }
}

.timeline-item-content {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end; // 시간
  padding: 15px;
  position: relative;
  // width: 400px;
  width: 90%;
  // max-width: 70%;
  & time {
    color: #777;
    font-size: 12px;
    font-weight: bold;
  }
}

.timeline-item-content::after {
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

.timeline-item-content p {
  font-size: 16px;
  line-height: 24px;
  margin: 15px 0;
  max-width: 250px;
}

.timeline-item-content a {
  color: #333;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
}

// .timeline-item-content a::after {
//   content: ' ►';
//   font-size: 12px;
// }

.circle {
  background-color: #fff;
  border: 3px solid #e17b77;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 1rem);
  left: 1rem;
  width: 20px;
  height: 20px;
  z-index: 100;
}

// @media only screen and (max-width: 1023px) {
//   .timeline-item-content {
//     max-width: 100%;
//   }
// }

// @media only screen and (max-width: 767px) {
//   .timeline-item-content,
//   .timeline-item:nth-child(odd) .timeline-item-content {
//     padding: 15px 10px;
//     text-align: center;
//     align-items: center;
//   }

//   .timeline-item-content .tag {
//     width: calc(100% - 10px);
//     text-align: center;
//   }

//   .timeline-item-content time {
//     margin-top: 20px;
//   }

//   .timeline-item-content a {
//     text-decoration: underline;
//   }

//   .timeline-item-content a::after {
//     display: none;
//   }
// }
</style>
