<template>
<div>
    <topbar></topbar>
    <div >
      <div>
        <headbar></headbar>
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
import headbar from "../components/headbar.vue"
import footer from "../components/footer.vue"
export default {
  name: "index",
  components: {
    topbar,
    footer,
    headbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.viewFramework {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
