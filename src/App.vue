<template>
  <div id="app">
    <lfq-button>
      <template v-slot:content>主要按钮</template>
    </lfq-button>
  </div>
</template>

<script>
import lfqButton from "./components/lfqButton";
export default {
  name: "app",
  components: {
    // 按钮组件
    lfqButton,
  },
};
</script>

<style lang="scss" scoped>


</style>
