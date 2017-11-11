<template>
<div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#0B7BB3" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="0"><router-link to ='/'>
        <img src="../assets/sjlogo.jpg"/></router-link>
      </el-menu-item>       
      <el-menu-item index="1">
        <router-link to ='/'>首頁</router-link>
      </el-menu-item>      
      <el-menu-item index="2">
        <router-link to ='/about'>公司简介</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to ='#'>产品展示</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to ='#'>中颖</router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to ='#'>IXYS/ABOV</router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link to ='#'>资料下载</router-link>
      </el-menu-item>
      <el-menu-item index="7">
        <router-link to ='#'>人才招聘</router-link>
      </el-menu-item>
      <el-submenu index="8">
        <template slot="title">联系我们</template>
        <el-menu-item index="2-1">在线留言</el-menu-item>
        <el-menu-item index="2-2">加入我们</el-menu-item>
      </el-submenu>
      </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: "index",
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
