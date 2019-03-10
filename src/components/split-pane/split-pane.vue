<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width: leftOffsetPercent, paddingRight: `${this.triggleWidth / 2}px`}">
      <slot name="left"></slot>
    </div>
    <div
      class="pane-trigger-con"
      @mousedown="handleMouseDown"
      :style="{left: triggleLeft, width: `${triggleWidth}px`}"
    ></div>
    <div class="pane pane-right" :style="{left: leftOffsetPercent, paddingLeft: `${this.triggleWidth / 2}px`}">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggleWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9 
    },
  },
  data() {
    return {
      // leftOffset: 0.3,
      canMove: false,
      initOffset: 0
    };
  },
  computed: {
    leftOffsetPercent() {
      return `${this.value * 100}%`;
    },
    triggleLeft() {
      return `calc(${this.value * 100}% - ${this.triggleWidth / 2}px)`;
    }
  },
  methods: {
    handleClick() {
      this.leftOffset -= 0.02;
    },
    handleMouseDown() {
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseup', this.handleMouseUp)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    handleMouseMove(event) {
      // console.log(this.$refs.outer.getBoundingClientRect());
      // console.log(event.pageX - this.$refs.outer.getBoundingClientRect().left);
      if (!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offsetPercent = (event.pageX - this.initOffset + this.triggleWidth / 2 - outerRect.left) / outerRect.width
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      // this.leftOffset = offsetPercent
      // this.$emit('input', offsetPercent)
      this.$emit('update:value', offsetPercent)
    },
    handleMouseUp() {
      this.canMove = false 
    }
  }
};
</script>
<style lang="stylus" scoped>
.split-pane-wrapper {
  height: 100%;
  width: 100%;
  position: relative;

  .pane {
    // display inline-block
    // float left
    position: absolute;
    top: 0;
    height: 100%;

    // width 50%
    &-left {
      // width 30%
      background: palevioletred;
    }

    &-right {
      right: 0;
      bottom: 0;
      // left 30%
      background: paleturquoise;
    }

    &-trigger-con {
      height: 100%;
      background: red;
      position: absolute;
      top: 0;
      z-index: 10;
      user-select none
      cursor col-resize
    }
  }
}
</style>  