<template>
  <div>
    <tab-bar>
      <tab-bar-item link="/home">
        <template v-slot:tabBarIetmimg>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:tabBarIetmactive>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template v-slot:tabBarIetmtext>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <template v-slot:tabBarIetmimg>
          <img src="~assets/img/tabbar/category.svg" alt="" />
        </template>
        <template v-slot:tabBarIetmactive>
          <img src="~assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <template v-slot:tabBarIetmtext>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link="shopcart">
        <template v-slot:tabBarIetmimg>
          <img src="~assets/img/tabbar/shopcart.svg" alt="" />
        </template>
        <template v-slot:tabBarIetmactive>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
        </template>
        <template v-slot:tabBarIetmtext>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link="profile">
        <template v-slot:tabBarIetmimg>
          <img src="~assets/img/tabbar/profile.svg" alt="" />
        </template>
        <template v-slot:tabBarIetmactive>
          <img src="~assets/img/tabbar/profile_active.svg" alt="" />
        </template>
        <template v-slot:tabBarIetmtext>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  data() {
    return {};
  },

  components: {
    TabBar,
    TabBarItem,
  },

  computed: {},

  methods: {},
};
</script>
<style lang='css' scoped>
</style>