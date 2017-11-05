<template>
<div>
    <topbar></topbar>
    <div >
      <div>
        <main>
          <router-view></router-view>
        </main>
        <footbar></footbar>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from "../components/topbar.vue"
import footbar from "../components/footbar.vue"
export default {
  name: "about",
  components: {
    topbar,
    footbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>