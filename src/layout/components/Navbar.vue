<script setup lang="ts">
import CurrentUser from '@/components/CurrentUser.vue'
</script>

<template>
  <div class="navbar">
    <div class="left">组件名称：Navbar</div>
    <CurrentUser />
  </div>
</template>

<style scoped lang="scss">
.navbar {
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  height: 40px;
}
</style>
