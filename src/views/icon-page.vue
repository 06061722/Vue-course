<template>
  <div>
    <Icon type="md-menu" :size="50" color="pink"/>
    <i class="iconfont smile">&#xe748;</i>
    <i class="iconfont">&#xe745;</i>
    <svg class="iconfont-svg" aria-hidden="true" style="font-size: 70px">
      <use xlink:href="#icon-calendar"></use>
    </svg>
    <!-- <i class='iconfont icon-notebook'> </i> -->
    <Icon custom='iconfont icon-notebook'/>
    <icon-font icon="notebook" :size="50" color="pink" />
    <icon-svg icon='bank' :size='100'/>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
.smile {
  color: red;
}
</style>