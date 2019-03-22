<template>
  <Form
    ref="form"
    v-if="Object.keys(valueList).length"
    :label-width="labelWidth"
    :model="valueList"
    :rules="rules"
  >
    <FormItem
      v-for="(item, index) in list "
      :label="item.label"
      label-position="left"
      :key="`${_uid}_${index}`"
      :prop="item.name"
      :error='errorStore[item.name]'
      @click.native="handleFocus(item.name)"
    >
      <!-- <Input v-if="item.type === 'input'"/> -->
      <component :is="item.type" :range="item.range" v-model="valueList[item.name]" >
        <template v-if="item.children">
          <component
            :is="item.children.type"
            v-for="(child, i) in item.children.list"
            :key="`${_uid}_${index}_${i}`"
            :value="child.value"
            :label="child.label"
          >{{ child.title}}</component>
        </template>
      </component>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary">提交</Button>
      <Button @click="handleReset">重置</Button>
    </FormItem>
  </Form>
</template>

<script>
import clonedeep from "clonedeep";
import { sentFormData } from "@/api/data";

export default {
  name: "FormGroup",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: Number,
      default: 100
    },
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      initValueList: [],
      rules: {},
      valueList: {},
      errorStore: ''
    };
  },
  watch: {
    list() {
      this.setInitValue();
    }
  },
  methods: {
    setInitValue() {
      // this.initValueList = this.list.map(item => item.value)
      let rules = {};
      let valueList = {};
      let initValueList = {};
      let errorStore = {} 
      this.list.forEach(item => {
        rules[item.name] = item.rule;
        valueList[item.name] = item.value;
        initValueList[item.name] = item.value;
        errorStore[item.name] = ''
      });
      this.rules = rules;
      this.valueList = valueList;
      this.initValueList = initValueList;
      this.errorStore = errorStore;
    },
    
  },
  mounted() {
    this.setInitValue();
  }
};
</script>
<style lang="stylus" scoped>
</style>