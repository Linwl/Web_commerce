<template>
<div>
    <topbar></topbar>
    <div >
      <div>
        <headbar></headbar>
        <main>
          <router-view></router-view>
          <home></home>
        </main>
        <footbar></footbar>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from "../components/topbar.vue"
import headbar from "../components/headbar.vue"
import footbar from "../components/footbar.vue"
import home from "../components/home.vue"
export default {
  name: "index",
  components: {
    topbar,
    footbar,
    headbar,
    home
  }
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 @import '../style/card.css';
</style>
