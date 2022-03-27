<template>
    <li>
      <router-link v-bind:to="route"><slot>LINK</slot></router-link>
    </li>
</template>

<script>
export default {
  name: "TheNavLink",
  props: ['route']
}
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: inherit;


  }
  a:hover,
  a:active,
  a.router-link-exact-active {
    background-color: red;
  }
</style>