<template>
  <div id="app">
    <router-view></router-view>
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
