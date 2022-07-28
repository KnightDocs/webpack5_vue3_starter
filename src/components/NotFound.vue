<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let timer = ref(null)
const count = ref(3)
onMounted(() => {
  timer = window.setInterval(() => {
    count.value -= 1
    if (count.value === 0) {
      window.clearInterval(timer)
      router.push({
        name: 'Home'
      })
    }
  }, 1000)
})
</script>

<template>未知页面，将在 {{ count }} 秒后跳转到主页</template>

<style scoped lang="scss"></style>
