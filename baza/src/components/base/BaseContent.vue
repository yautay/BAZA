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
  top: $header;
  margin-bottom: $footer - ($footer - $header);

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

}
</style>