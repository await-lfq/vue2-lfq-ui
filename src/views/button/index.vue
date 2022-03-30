<template>
  <div class="button-component">
    <lfq-button native-type="submit" :is-loading="true" :is-autofocus="false"  :is-disabled="false" :is-round="true" size="medium" type="warning"> 
      <template #content>按钮</template>
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