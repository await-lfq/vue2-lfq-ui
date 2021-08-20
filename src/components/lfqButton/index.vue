<template>
  <div class="lfq-button">
    <button ref="buttonNode" :class="{disabled}" @mouseleave="onMouseleave" @mouseenter="onMouseenter" :style="{width,height,color,'line-height':lineHeight,'font-size':fontSize,'border-radius':borderRadius,background}">
      <slot name="content" />
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  props: {
    // 宽度
    width: {
      type: String,
      default: "120px",
    },
    // 高度
    height: {
      type: String,
      default: "50px",
    },
    // 行高
    lineHeight: {
      type: String,
      default: "50px",
    },
    // 背景色
    background: {
      type: String,
      default: "#409EFF"
    },
    // 字体颜色
    color: {
      type: String,
      default: "#fff"
    },
    // 字体大小
    fontSize: {
      type: String,
      default: "16px"
    },
    // 圆角的大小
    borderRadius: {
      type: String,
      default: "5px"
    },
    // 鼠标滑入显示的背景色
    mouseenterColor: {
      type: String,
      default: "#66b1ff"
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    /**
     * @description 移入事件
     * @method onMouseenter
     */
    onMouseenter () {
      const buttonNode = this.$refs.buttonNode;
      if (!this.disabled) {
        buttonNode.style.background = this.mouseenterColor;
      }
    },
    /**
     * @description 移出事件
     * @method onMouseleave
     */
    onMouseleave () {
      const buttonNode = this.$refs.buttonNode;
      if (!this.disabled) {
        buttonNode.style.background = this.background;
      }
    },

  },
  watch: {


  }

};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>