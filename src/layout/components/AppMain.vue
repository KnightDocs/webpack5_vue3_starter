<script setup lang="ts"></script>

<template>
  <div class="app-main">
    <div class="top">组件名称：AppMain（子路由）</div>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.app-main {
  position: absolute;
  top: 40px;
  left: 200px;
  width: calc(100% - 200px);
  height: calc(100% - 40px);
  border: 1px solid #000;
  .top {
    background-color: #ef9696;
  }
}
</style>
