<script setup lang="ts">
import { ref } from 'vue'

const searchText = ref('')
const disabledText = ref('我是禁用的')
</script>

<template>
  <div style="padding: 20px; width: 300px;">
    <h3>我的第一个组件：Input</h3>
    <MyInput v-model="searchText" placeholder="搜点什么..." />
    <p>你输入的内容是：{{ searchText }}</p>

    <MyInput v-model="disabledText" disabled />
  </div>
</template>
<style lang="scss" scoped>
</style>