<template>
  <div class="guestbook">
    <div class="title text-bold text-center">방명록</div>
    <div class="divider"></div>
    <div class="guestbook-button" @click="openModal">글쓰기</div>
    <div class="guestbook-list">
      <div class="guestbook-item" v-for="item of items" :key="item.createdBy">
        <div class="guestbook-item-image"></div>
        <div class="guestbook-item-content">
          <div class="guestbook-item-header">
            <div class="guestbook-item-date">{{ item.createdDt }}</div>
            <div class="guestbook-item-creator">{{ item.createdBy }}</div>
            <!-- <q-separator vertical spaced inset /> -->
          </div>
          <div class="guestbook-item-message">{{ item.message }}</div>
        </div>
      </div>
    </div>
    <GuestBookModal ref="guestBookModalRef" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { GuestBookModal } from '.'
const guestBookModalRef = ref(null)
const openModal = () => guestBookModalRef.value.open()
const items = [
  {
    title: 'aaaaaaaaaaaaaaaa',
    message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaa\ndffdf',
    createdDt: '2024-01-17',
    createdBy: '유니',
  },
  {
    title: 'bbbbbbbbbbbbbbbbbbb',
    message: 'lkasjdhad a;sdas[d[a;askhasd7\nsajksahdas907dy ^as8d sa6d8 \nd8s90asd',
    createdDt: '2024-01-17',
    createdBy: '짜장 짜장짜장 짜장 짜장 짜장 짜장 짜장 짜장짜장 짜장',
  },
  {
    title: 'cccccccccccccccccc',
    message: 'dasjlsakd as89dasd lk98asd08duasj \nald8ads asdljkasdas8das d0 \ndffdf',
    createdDt: '2024-01-17',
    createdBy: '짬뽕',
  },
  {
    title: 'dddddddddddddddddddd',
    message: 'sfhflsdhfkjsdhfksdjhf\nlfu0sd fsdflsdjflsda jfasld;0xcvjs odf\naksdjasldj',
    createdDt: '2024-01-17',
    createdBy: '치치는 거꾸로해도 치치',
  },
  {
    title: 'eeeeeeeeeeeeeeeee',
    message: 'ffffffasdfasdfsdafsdafsdf\nldafkjslad; fksdaf \nasku8saslk12',
    createdDt: '2024-01-17',
    createdBy: '유니',
  },
]
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
    height: 30em;
    overflow-y: scroll;
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

    &-image {
      flex: 0 0 auto;
      width: 6em;
      height: 30px;
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
