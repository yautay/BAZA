<template>
  <the-background></the-background>
  <the-header></the-header>
  <base-content>
    <router-view></router-view>
  </base-content>
  <the-footer></the-footer>
</template>

<script>
import TheBackground from "@/components/base/TheBackground";
import TheHeader from "@/components/base/TheHeader";
import BaseContent from "@/components/base/BaseContent";
import TheFooter from "@/components/base/TheFooter";

export default {
  name: 'App',
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter,
    'the-background': TheBackground,
    'base-content': BaseContent
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
