<template>
  <header id="header">
    <the-navigation></the-navigation>
  </header>
</template>

<script>
import TheNavigation from "@/components/base/nav/TheNavigation";

export default {
  name: 'TheHeader',
  components: {
    'the-navigation': TheNavigation
  }
}
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  height: $header;
  width: 100vw;
  z-index: 999;
}
</style>