<template>
  <div class="lfq-button">
    <button :type="nativeType" :autofocus="isAutofocus" :disabled="isDisabled" :class="{round:isRound,circle:isCircle,disabled:isDisabled}" :style="{...btnStyle}">
      <slot name="content" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    // 宽度
    width: {
      type: String,
      default: "140px",
    },
    // 高度
    height: {
      type: String,
      default: "60px",
    },
    // 行高
    lineHeight: {
      type: String,
      default: "60px",
    },
    // 边框
    border: {
      type: String,
      default: "1px solid #dcdfe6",
    },
    // 背景色
    background: {
      type: String,
      default: "#fff"
    },
    // 字体颜色
    color: {
      type: String,
      default: "#000"
    },
    // 尺寸
    size: {
      type: String,
    },
    // 类型
    type: {
      type: String,
    },
    // 是否是圆角
    isRound: {
      type: Boolean,
      default: false,
    },
    // 是否是圆形
    isCircle: {
      type: Boolean,
      default: false,
    },
    // 是否禁用
    isDisabled: {
      type: Boolean,
      default: false,
    },
    // 是否聚焦
    isAutofocus: {
      type: Boolean,
      default: false,
    },
    // 原生的type属性
    nativeType:{
      type:String,
      default:"button"
    }
  },
  computed: {
    // 样式
    btnStyle () {
      return (
        {
          width: this.size ? this.btnSize.width : this.width,
          height: this.size ? this.btnSize.height : this.height,
          "line-height": this.size ? this.btnSize["line-height"] : this.lineHeight,
          background: this.type ? this.btntype.background : this.background,
          color: this.type ? this.btntype.color : this.color,
          border: this.type ? this.btntype.border : this.border,
        }
      )
    },
    // 按钮尺寸
    btnSize () {
      if (!this.size) {
        return;
      }
      switch (this.size) {
        case "medium":
          return {
            width: "120px",
            height: "50px",
            "line-height": "50px"
          }
          break;
        case "small":
          return {
            width: "100px",
            height: "40px",
            "line-height": "40px"
          }
          break;
        case "mini":
          return {
            width: "80px",
            height: "30px",
            "line-height": "30px"
          }
          break;
      }

    },
    // 按钮类型
    btntype () {
      if (!this.type) {
        return;
      }
      switch (this.type) {
        case "primary":
          return {
            background: "#409eff",
            color: "#fff",
            border: "1px solid #409eff"

          }
          break;
        case "success":
          return {
            background: "#67c23a",
            color: "#fff",
            border: "1px solid #67c23a"
          }
          break;
        case "warning":
          return {
            background: "#e6a23c",
            color: "#fff",
            border: "1px solid #e6a23c"
          }
          break;
      }
    }
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

};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>