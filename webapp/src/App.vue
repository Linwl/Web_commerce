<template>
  <div id="app">
    <img src="./assets/logo.png">
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#0B7BB3" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to ='/'>首頁</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title">联系我们</template>
        <el-menu-item index="2-1">在线留言</el-menu-item>
        <el-menu-item index="2-2">加入我们</el-menu-item>
      </el-submenu>
      </el-menu-item>
  </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
   data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
