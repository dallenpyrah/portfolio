<template>
  <mobile-tablet class="mobile-tablet" />
  <desktop class="desktop" />
</template>

<script>
import MobileTablet from './MobileTablet.vue'
import Desktop from './Desktop.vue'
export default {
  components: { MobileTablet, Desktop },
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
.line-padding{
  padding: 10px 0 0 0;
  line-height: 25px;
}
.line-padding-title{
  padding: 10px 0 0 0;
  line-height: 45px;
}
.rounded{
  border-radius: 1rem!important;
}
</style>
