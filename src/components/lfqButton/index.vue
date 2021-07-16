<template>
  <div class="lfq-button">
    <button :class="[size]">
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