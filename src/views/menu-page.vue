<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-sub-menu>
        <div slot="title">一级title</div>
        <a-menu-item>333</a-menu-item>
        <a-menu-item>444</a-menu-item>
        <a-sub-menu>
          <div slot="title">二级title</div>
          <a-menu-item>555</a-menu-item>
          <a-menu-item>666</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>-->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{ item.title }}</a-menu-item>
        <re-submenu v-else :key="`menu_item_${index}`" :parent="item" :index="index"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import menuComponents from "_c/menu";
import ReSubmenu from './re-submenu.vue'
const { AMenu, AMenuItem, ASubMenu } = menuComponents;
export default {
  components: {
    AMenu,
    AMenuItem,
    ASubMenu,
    ReSubmenu
  },
  data() {
    return {
      list: [
        {
          title: "1111"
        },
        {
          title: "2222"
        },
        {
          title: "3333",
          children: [
            {
              title: "3333-1"
            },
            {
              title: "3333-2"
            },
            {
              title: "3333-3",
              children: [
                {
                  title: "3333-3-1"
                },
                {
                  title: "3333-3-2"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
.menu-box {
  width: 300px;
  height: 400px;
}
</style>