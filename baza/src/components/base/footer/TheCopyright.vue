<template>
  <div>
    <p>Copyright &copy; {{ presentYear }}</p>
    <a href="mailto:contact@cpt-aquarius.pl"><p class="aquarius-inline">A<span class="qa-inline">Q</span>U<span
        class="qa-inline">A</span>RIUS
    </p></a>
    <p>All Rights Reserved</p>
  </div>
</template>

<script>
let year = new Date();
export default {
  name: "TheCopyright",
  data() {
    return {
      presentYear: year.getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: $text-dark-contrast;
}

div {
  margin: 5px;
  .aquarius-inline {
    text-transform: capitalize;
    font-weight: bolder;

    .qa-inline {
      color: red;
    }
  }
}
</style>