<template>
  <div class="guestbook">
    <div class="title text-bold text-center">방명록</div>
    <div class="divider"></div>
    <div class="guestbook-button" @click="openModal">글쓰기</div>
    <div class="guestbook-list">
      <div class="guestbook-item" v-for="(item, idx) of items" :key="idx">
        <div class="guestbook-item-image-wrapper">
          <img class="guestbook-item-image" :src="item.image ?? defaultImage" />
        </div>
        <div class="guestbook-item-content">
          <div class="guestbook-item-header">
            <div class="guestbook-item-date">{{ item.createdDt }}</div>
            <div class="guestbook-item-creator">{{ item.name }}</div>
          </div>
          <div class="guestbook-item-message">{{ item.message }}</div>
        </div>
      </div>
    </div>
    <GuestBookModal ref="guestBookModalRef" @update="loadList" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { date } from 'quasar'
import { collection, query, orderBy, getDocs } from 'firebase/firestore'
import { db } from '@/plugins/firebase'
import { GuestBookModal } from '.'
import defaultImage from '@/assets/img/default.png'

const commentsRef = collection(db, 'comments')
const items = ref([])
const guestBookModalRef = ref(null)

const openModal = () => guestBookModalRef.value.open()

const convertTimeStamp = (timestamp) => {
  return date.formatDate(timestamp.toDate(), 'YYYY-MM-DD HH:mm')
}

const loadList = async () => {
  const q = query(commentsRef, orderBy('createdDt', 'desc'))
  const comments = await getDocs(q)
  items.value = comments.docs.map((comment) => {
    const data = comment.data()
    return {
      ...data,
      createdDt: convertTimeStamp(data.createdDt),
    }
  })
}

loadList()
</script>
<style lang="scss" scoped>
* {
  font-size: 14px;
}
.guestbook {
  padding: 0 1em;

  &-button {
    height: 3em;
    margin-bottom: 0.5em;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1em;
    font-weight: bold;

    border: 1px solid unset;
    border-radius: 0.5em;
    background-color: $amber-3;

    &:hover {
      background-color: $amber-2;
      cursor: pointer;
    }
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    max-height: 30em;
    overflow-y: scroll;
    padding-bottom: 0.1rem;
  }

  &-item {
    display: flex;
    padding: 0.5em 1em 0.8em;
    border: 1px solid $grey-4; // REMOVE
    border-radius: 0.5em;
    margin-right: 0.2em;
    background-color: rgba(white, 50%);
    // max-height: 400px;
    // min-height: 20em;
    // overflow: scroll;

    &-image-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-image {
      flex: 0 0 auto;
      width: 6em;
      height: 6em;
      object-fit: contain;
    }
    &-content {
      margin-left: 0.5em;
      width: calc(100% - 6em);
    }
    &-header {
      margin-bottom: 0.5em;
    }
    &-date {
      color: $grey-6;
      text-align: right;
      font-size: 0.75em;
    }
    &-creator {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
    }
    &-message {
      font-size: 0.85em;
      word-break: break-all;
    }
  }
}
</style>
