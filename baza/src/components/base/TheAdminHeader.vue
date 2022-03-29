<template>
  <header class="header">
    <h2>ADMIN HEADER</h2>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  height: $header-height;
  width: 100vw;
  z-index: 999;
}
</style>