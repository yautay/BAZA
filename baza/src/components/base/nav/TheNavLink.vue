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

<style scoped>
  * {
    text-decoration: none;
    color: inherit;
  }
</style>