<template>
  <Form ref="form" v-if="config" :label-width="100" :model="valueData" :rules="ruleData">
    <FormItem
      :label="config.label"
      label-position="left"
      :key="`${_uid}`"
      :prop="config.name"
      :error="errorStore[config.name]"
      @click.native="handleFocus(config.name)"
    >
      <!-- <Input v-if="config.type === 'input'"/> -->
      <component :is="config.type" :range="config.range" v-model="valueData[config.name]">
        <template v-if="config.children">
          <component
            :is="config.children.type"
            v-for="(child, i) in config.children.list"
            :key="`${_uid}_${i}`"
            :value="child.value"
            :label="child.label"
          >{{ child.title }}</component>
        </template>
      </component>
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: "FormSingle",
  props: {
    valueData: {
      type: Object,
      default: () => ({})
    },
    ruleData: {
      type: Object,
      default: () => ({})
    },
    errorStore: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    handleFocus(name) {
      this.errorStore[name] = "";
    },
    validate (callback) {
      this.$refs.form.validate(valid => {
        callback(valid)
      })
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>