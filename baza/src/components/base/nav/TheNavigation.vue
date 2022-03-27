<template>
  <nav>
    <div class="container-home">
      <router-link to="/">
        <swirl swirl-size="2rem"></swirl>
      </router-link>
    </div>
    <div class="container-links">
      <ul>
        <nav-link route="/schedule">harmonogram</nav-link>
        <nav-link route="/news">aktualności</nav-link>
        <nav-link route="/gallery">galeria</nav-link>
        <nav-link route="/about">kim jesteśmy</nav-link>
        <nav-link route="/contact">kontakt</nav-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import TheNavLink from "@/components/base/nav/TheNavLink";
import TheSwirl from "@/components/ui/TheSwirl";

export default {
  name: "TheNavigation",
  components: {
    'nav-link': TheNavLink,
    'swirl': TheSwirl
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/icomoon";

nav {
  height: 100%;
  text-transform: uppercase;
  background-color: $bckg-solid;
  transition: background-color .5s;
  font-size: 1.1rem;
}

.container-home {
  a {
    text-decoration: none;
  }
}

ul {
  list-style: none;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 2rem;
  }
}

</style>