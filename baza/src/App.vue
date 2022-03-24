<template>
  <the-header></the-header>
  <the-body></the-body>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "@/components/containers/TheHeader";
import TheBody from "@/components/containers/TheBody";
import TheFooter from "@/components/containers/TheFooter";

export default {
  name: 'App',
  components: {
    'the-header': TheHeader,
    'the-body': TheBody,
    'the-footer': TheFooter
  }

}
</script>

<style>
</style>
