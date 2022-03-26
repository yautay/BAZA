<template>
  <main id="content">
    <slot><p>CONTENT</p></slot>
  </main>
</template>

<script>
export default {
  name: "BaseContent"
}
</script>

<style lang="scss" scoped>
#content {
  position: relative;
  margin: auto;
  top: 50px;
  margin-bottom: 50px;

  @media (min-width: $mobile) {
    padding: 0 40px 0;
  }

  @media (min-width: $tablet) {
    padding: 0 80px 0;
  }

  @media (min-width: $laptop) {
    padding: 0 10vw 0;
  }
  @media (min-width: $hd + 1) {
    padding: 0 20vw 0;
  }

}
</style>