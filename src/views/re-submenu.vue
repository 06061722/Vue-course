<template>
  <a-sub-menu>
    <div slot="title">{{ parent.title }}</div>
    <template v-for="(item, i) in parent.children">
      <a-menu-item v-if="!item.children" :key="`menu_item_${index}_${i}`">{{ item.title }}</a-menu-item>
      <re-submenu v-else :key="`menu_item_${index}_${i}`" :parent="item"></re-submenu>
    </template>
  </a-sub-menu>
</template>

<script>
import menuComponents from "_c/menu";
const { AMenuItem, ASubMenu } = menuComponents;
export default {
  name: "ReSubmenu",
  props: {
    parent: {
      type: Object,
      default: () => ({}) 
    },
    index: {
      type: Number
    }
  },
  components: {
    AMenuItem,
    ASubMenu,
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
</style>