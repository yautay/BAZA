<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "@/components/base/TheHeader";
import TheFooter from "@/components/base/TheFooter";

export default {
  name: 'App',
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter,
  }

}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  html {
    font-family: sans-serif;
  }
  body {
    margin: 0;
    height: 100vh;

    #app-header {
      position: fixed;
      top: 0;
      height: 50px;
      width: 100vw;
      z-index: 999;
    }
    main {
      position: relative;
      margin: auto;
      top: 50px;
      width: 80vw;
    }
    #app-footer {
      position: relative;
      bottom: 0;
      width: 100%;
      height: 100px;
    }
  }
}
</style>
