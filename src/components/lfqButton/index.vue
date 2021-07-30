<template>
  <div class="lfq-button">
    <button :class="[size,type,{round}]">
      <slot name="content" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: {
    // 尺寸
    size: {
      type: String,
      default:"small"
    },
    // 类型
    type:{
      type:String,
      default:"primary"
    },
    // 圆角
    round:{
      type:Boolean,
      default:true,
    }
  },
  created(){

  },
  methods:{
   
  }

};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>