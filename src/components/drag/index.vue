<template>
  <div class="drag">
    <div :class="['box']" @drop="drop(index,$event)" @dragover="dragover" @dragstart="dragstart(item,index,$event)" draggable="true" v-for="(item,index) in dataList" :key="item">{{item}}</div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {

    }
  },

  methods: {
    // 开始推拽
    dragstart (item, index, event) {
      event.dataTransfer.setData("item", JSON.stringify({ item, index }));
    },
    // 将托拽元素推拽到放置区域时触发该事件
    dragover (e) {
      e.preventDefault();
    },
    // 推拽元素放置到有效区域时触发
    drop (index, event) {
      const { item, index: targetIndex } = JSON.parse(event.dataTransfer.getData("item"));
      this.dataList.splice(targetIndex, 1); // 先删掉当前位置
      this.dataList.splice(index, 0, item); // 拖动的元素放到拖动的位置
    },
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 50%;
  height: 50px;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: 0px 0px 8px 0px #ccc;
  margin-bottom: 10px;
}
</style>