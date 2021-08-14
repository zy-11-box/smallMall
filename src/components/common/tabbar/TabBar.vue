<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang='css' scoped>
.tabBar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 49px;
  text-align: center;
  background-color: #f2f2f2;
  box-shadow: 0, -3px, 1px, rgba(150, 150, 150, 0.3);
}
</style>