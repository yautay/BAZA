<template>
  <the-background></the-background>
  <router-view name="router_header"></router-view>
  <base-content>
    <router-view name="router_content"></router-view>
  </base-content>
  <the-footer></the-footer>
</template>

<script>
import TheBackground from "@/components/base/TheBackground";
import BaseContent from "@/components/base/BaseContent";
import TheFooter from "@/components/base/TheFooter";

export default {
  name: 'App',
  components: {
    'the-background': TheBackground,
    'base-content': BaseContent,
    'the-footer': TheFooter
  }

}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Roboto", sans-serif;
  background-color: #fff9f4;
  font-size: 10px;

  body {
    position: relative;
    font-family: "Roboto", sans-serif;
    background-color: #fff9f4;
    font-size: 10px;
  }
}
</style>
