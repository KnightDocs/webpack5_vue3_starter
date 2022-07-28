<script setup lang="ts"></script>

<template>
  <div class="sidebar">
    组件名称：Sidebar
    <el-menu :default-active="$route.path" router>
      <el-menu-item index="/home">
        <span>Home</span>
      </el-menu-item>
      <el-menu-item index="/works/index">
        <span>Works</span>
      </el-menu-item>
      <el-menu-item index="/contact/index">
        <span>Contact</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  width: 200px;
  height: calc(100% - 40px);
  border: 1px solid #000;
}
</style>
