<template>
  <i class="icon-swirl"></i>
</template>

<script>
export default {
  name: "TheSwirl",
  data() {
    return {
      swirlColorValue: this.swirlColor,
      swirlShadowValue: this.swirlShadow,
      swirlSizeValue: this.swirlSize
    }
  },
  props: {
    swirlSize: {
      required: false,
      type: String,
      default: '1rem'
    },
    swirlShadow: {
      required: false,
      type: String,
      default: '1px 1px 1px green'
    },
    swirlColor: {
      required: false,
      type: String,
      default: '#535353'
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/icomoon";

.icon-swirl {
  font-size: v-bind(swirlSizeValue);
  text-shadow: v-bind(swirlShadowValue);

  &:before {
    content: "\e900";
    color: v-bind(swirlColorValue);
  }
}
</style>