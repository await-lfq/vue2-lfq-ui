<template>
  <div class="drag-container">
    <img :src="src" ref="imgRef" alt="" @mousedown.prevent="mousedown" @mouseup="mouseup">
  </div>
</template>

<script>
export default {
  props: {
    // 图片路径
    src: {
      type: String,
      default: require("./img/drag.webp")
    }
  },
  data () {
    return {
      // 鼠标离目标元素的距离
      offsetX: 0,
      offsetY: 0,
    }
  },
  methods: {
    // 鼠标按下
    mousedown (e) {
      this.offsetX = e.offsetX;
      this.offsetY = e.offsetY;
      window.addEventListener("mousemove", this.moveCallback)
    },
    // 移动回调函数
    moveCallback (e) {
      this.$refs.imgRef.style.left = e.clientX - this.offsetX + "px";
      this.$refs.imgRef.style.top = e.clientY - this.offsetY + "px";
    },
    // 鼠标抬起
    mouseup () {
      window.removeEventListener("mousemove", this.moveCallback);
    }
  }
}
</script>
<style >
body {
  overflow: hidden;
}
</style>
<style scoped lang="scss">
// 拖拽组件
.drag-container {
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    position: absolute;
  }
}
</style>