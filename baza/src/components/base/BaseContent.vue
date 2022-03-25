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

  @media (min-width: 576px) {
    padding: 0 40px 0;
  }

  @media (min-width: 768px) {
    padding: 0 80px 0;
  }

  @media (min-width: 1200px) {
    padding: 0 10vw 0;
  }

}
</style>