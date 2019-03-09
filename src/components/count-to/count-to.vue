<template>
  <div>
    <slot name="left"></slot>
    <span :class="countClass" ref="number" :id="eleId"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from "countup";
export default {
  mounted() {
    this.$nextTick(() => {
      (this.counter = new CountUp(
        this.eleId,
        this.startVal,
        this.endVal,
        this.decimals,
        this.duration,
        {
          useEasing: this.useEasing,
          useGrouping: this.useGrouping,
          separator: this.separator,
          decimals: this.decimals
        }
      )),
        setTimeout(() => {
          this.counter.start();
          this.emitEndEvent();
        }, this.delay);
    });
  },
  props: {
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 最终值
     */
    endVal: {
      type: Number,
      required: true
    },
    /**
     * @description 小数保留位数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 渐变时长
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * @description 是否使用变速效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否使用分组
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * @description 是否使用分组
     */
    separator: {
      type: String,
      default: ","
    },
    /**
     * @description 整数和小数分割符号
     */
    separator: {
      type: String,
      default: "."
    },
    /**
     * @description 动画延迟
     */
    delay: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: ""
    }
  },
  // name: 'CountTo',
  data() {
    return {
      counter: {}
    };
  },
  methods: {
    getCount() {
      return this.$refs.number.innerText;
    },
    emitEndEvent() {
      setTimeout(() => {
        this.$nextTick(() => {
        this.$emit("on-animation-end", Number(this.getCount()));
        })
      }, this.duration * 1000 + 5);
    }
  },
  computed: {
    eleId() {
      return `count_id_${this._uid}`;
    },
    countClass() {
      return ["count-to-number", this.className];
    }
  },
  watch: {
    endVal(newVal, oldVal) {
      this.counter.update(newVal);
      this.emitEndEvent();
    }
  }
};
</script>
<style lang="stylus" scoped>
@import './count-to.stylus'
</style>