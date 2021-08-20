<template>
  <div class="button-component">
    <lfq-button :disabled="true"> 
      <template v-slot:content>按钮</template>
    </lfq-button>
  </div>
</template>
<script>
import lfqButton from "../../components/lfqButton";
export default {
  components:{
    lfqButton
  }
}
</script>

<style lang="scss" scoped>

</style>