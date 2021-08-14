<template>
  <div class="tabBarItem" @click="itemClick">
    <div v-if="!isActive"><slot name="tabBarIetmimg"></slot></div>
    <div v-else><slot name="tabBarIetmactive"></slot></div>
    <div :style="isColor">
      <slot name="tabBarIetmtext"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  components: {},

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    isColor() {
      return this.isActive == true ? { color: "red" } : {};
    },
  },

  methods: {
    itemClick() {
      this.$router.push(this.link);
      // console.log(this.$route.path);
    },
  },
};
</script>
<style lang='css' scoped>
.tabBarItem img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.tabBarItem {
  flex: 1;
}
</style>