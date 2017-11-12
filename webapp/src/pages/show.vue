<template>
<div>
    <topbar></topbar>
    <div >
      <div>
        <main>
            55
        </main>
        <footbar></footbar>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from "../components/topbar.vue"
import footbar from "../components/footbar.vue"
import profile from "../components/profile.vue"
export default {
  name: "about",
  components: {
    topbar,
    footbar,
    profile
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>