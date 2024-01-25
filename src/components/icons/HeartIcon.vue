<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    class="heart-icon h-6 w-6"
    :width="width"
    :height="heigth"
    :fill="color"
  >
    <path
      fill-rule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clip-rule="evenodd"
    ></path>
  </svg>
</template>
<script setup>
const props = defineProps({
  width: {
    type: [Number, String],
    default: '1rem',
  },
  heigth: {
    type: [Number, String],
    default: '1rem',
  },
  color: {
    type: String,
    default: 'currentColor',
  },
})
console.log(props)
</script>
