<template>
  <el-menu default-active="/" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
    <el-menu-item index="/"><i class="el-icon-menu"></i>Home</el-menu-item>
    <el-submenu index="">
      <template slot="title">Devices</template>
      <el-menu-item index="/dev_list">Device List</el-menu-item>
    </el-submenu>
    <el-menu-item index="">Base Station</el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
