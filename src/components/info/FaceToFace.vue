<template>
  <div ref="contentsRef" class="contents">
    <img class="contents-image" :src="SeohyunImage" />
    &
    <!-- <HeartIcon width="1.5rem" height="1.5rem" color="#d08c95" /> -->
    <img class="contents-image" :src="SeungjinImage" />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import SeohyunImage from '@/assets/img/seohyun_solo.jpg'
import SeungjinImage from '@/assets/img/seungjin_solo.jpg'
// import { HeartIcon } from '@/components/icons'

const contentsRef = ref(null)
// const targetImageRef = ref(null)

// const getImage = (fileName) => {
//   const url = new URL(`/src/assets/img/${fileName || 'default.png'}`, import.meta.url)
//   console.log(url)
//   console.log(url.href)
//   return url.href
// }

// const resizeImage = (settings) => {
//   const file = settings.file
//   const maxSize = settings.maxSize
//   const reader = new FileReader()
//   const image = new Image()
//   const canvas = document.createElement('canvas')

//   const dataURItoBlob = (dataURI) => {
//     const bytes =
//       dataURI.split(',')[0].indexOf('base64') >= 0
//         ? atob(dataURI.split(',')[1])
//         : unescape(dataURI.split(',')[1])
//     const mime = dataURI.split(',')[0].split(':')[1].split(';')[0]
//     const max = bytes.length
//     const ia = new Uint8Array(max)
//     for (let i = 0; i < max; i++) ia[i] = bytes.charCodeAt(i)
//     return new Blob([ia], { type: mime })
//   }

//   const resize = () => {
//     let width = image.width
//     let height = image.height
//     if (width > height) {
//       if (width > maxSize) {
//         height *= maxSize / width
//         width = maxSize
//       }
//     } else {
//       if (height > maxSize) {
//         width *= maxSize / height
//         height = maxSize
//       }
//     }
//     canvas.width = width
//     canvas.height = height
//     canvas.getContext('2d').drawImage(image, 0, 0, width, height)
//     const dataUrl = canvas.toDataURL('image/jpeg')
//     return dataURItoBlob(dataUrl)
//   }

//   return new Promise((ok, no) => {
//     if (!file) return
//     console.log(file.type)
//     if (!file.type.match(/image.*/)) {
//       no(new Error('Not an image'))
//       return
//     }
//     reader.onload = (readerEvent) => {
//       image.onload = () => {
//         return ok(resize())
//       }
//       image.src = readerEvent.target.result
//     }
//     reader.readAsDataURL(file)
//   })
// }

// const handleImgInput = async (targetRef, e) => {
//   const config = {
//     file: e,
//     maxSize: 1024,
//   }
//   const resizedImage = await resizeImage(config)
//   const url = window.URL.createObjectURL(resizedImage)
//   console.log(targetRef.value)
//   targetRef.value.setAttribute('src', url)
//   // const img = document.createElement('img')
//   // img.setAttribute('src', url)
//   // img.className = 'profile-img'
//   // img.style.display = 'block'
//   // img.style.height = '21rem'
//   // contentsRef.value.appendChild(img)
// }

// const convertURLtoFile = async (url) => {
//   const response = await fetch(url)
//   const data = await response.blob()
//   const ext = url.split('.').pop() // url 구조에 맞게 수정할 것
//   const filename = url.split('/').pop() // url 구조에 맞게 수정할 것
//   const metadata = { type: `image/${ext}` }
//   return new File([data], filename, metadata)
// }

onMounted(async () => {
  // const test = await convertURLtoFile(getImage('seohyun_solo.jpg'))
  // const test = await convertURLtoFile('/src/assets/img/seohyun_solo.jpg')
  // console.log(targetImageRef)
  // handleImgInput(targetImageRef, test)
})
</script>
<style lang="scss" scoped>
.contents {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;

  font-family: 'Nanum Myeongjo', serif;
  font-weight: bold;
  font-size: 1.5rem;

  &-image {
    // flex: 0 0 auto;
    // width: 15rem;
    height: 21rem;
    object-fit: contain;
    border-radius: 1rem;
  }
}
</style>
