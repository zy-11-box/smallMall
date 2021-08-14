<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/contents/maintarbar/MainTabBar";
export default {
  data() {
    return {};
  },

  components: {
    MainTabBar,
  },

  computed: {},

  methods: {},
};
</script>
<style lang='css' scoped>
@import "assets/css/base.css";
</style>
