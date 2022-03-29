<template>
  <main class="main-container">
    <slot><p>EMPTY SLOT!!!</p></slot>
  </main>
</template>

<script>
export default {
  name: "BaseContent"
}
</script>

<style lang="scss">
.main-container {
  position: relative;
  margin: auto;
  top: $header-height;
  margin-bottom: $footer-height - ($footer-height - $header-height);

  @media (min-width: $mobile) {
    padding: $content-padding-mobile;
  }

  @media (min-width: $tablet) {
    padding: $content-padding-tablet;
  }

  @media (min-width: $laptop) {
    padding: $content-padding-laptop;
  }
  @media (min-width: $hd) {
    padding: $content-padding-hd;
  }
  .page__header {
    height: $page-title-height;
    text-align: center;
    .page-title {
      line-height: $page-title-height;
      font-size: 4rem;
      color: $text-contrast;
      text-transform: uppercase;
      font-weight: bold;
      text-shadow: 2px 2px 5px $text-shadow;
    }
  }
  .page__content {
    min-height: calc(100vh - #{$page-title-height} - #{$header-height} - #{$footer-height});
    padding: 10px 0 10px;
  }
}
</style>