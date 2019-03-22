<template>
  <div class="box">
    <!-- <Select v-model="selectData" style="width:200px">
      <virtual-list :size="30" :remain="6">
        <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </virtual-list>
    </Select>
    <Select v-model="selectData" style="width:200px">
      <virtual-list :size="30" :remain="6">
        <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </virtual-list>
    </Select>
    <Select v-model="selectData" style="width:200px">
      <virtual-list :size="30" :remain="6">
        <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </virtual-list>
    </Select>
    <Select v-model="selectData" style="width:200px">
      <virtual-list :size="30" :remain="6">
        <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </virtual-list>
    </Select>-->
    <CheckboxGroup v-model="checkedArr">
      <virtual-list :size="30" :remain="10">
        <p v-for="item in list" :key="`check${item.value}`" style="height: 30px">
          <Checkbox :label="item.value">
            <Icon type="logo-twitter"></Icon>
            <span>{{ item.label }}</span>
          </Checkbox>
        </p>
      </virtual-list>
    </CheckboxGroup>
  </div>
</template>

<script>
import { doCustomtimes } from "@/lib/tools";
import VirtualList from "vue-virtual-scroll-list";
export default {
  components: {
    VirtualList
  },
  data() {
    return {
      list: [],
      selectData: 0,
      checkedArr: []
    };
  },
  methods: {},
  mounted() {
    let list = [];
    doCustomtimes(500, index => {
      list.push({
        value: index,
        label: `select${index}`
      });
    });
    this.list = list;
  }
};
</script>
<style lang="stylus" scoped>
// .box {
//   height: 300px;
//   overflow: auto;
// }
</style>