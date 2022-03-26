<template>
  <nav>
    <div>
      <div>
        <nav-link route="/"><i class="icon-swirl"></i></nav-link>
      </div>
      <div>
        <ul>
          <nav-link route="/schedule">harmonogram</nav-link>
          <nav-link route="/news">aktualności</nav-link>
          <nav-link route="/gallery">galeria</nav-link>
          <nav-link route="/about">kim jesteśmy</nav-link>
          <nav-link route="/contact">kontakt</nav-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import TheNavLink from "@/components/base/nav/TheNavLink";

export default {
  name: "TheNavigation",
  components: {
    'nav-link': TheNavLink
  }
}
</script>

<style lang="scss" scoped>
nav {
  height: 100%;
  text-transform: uppercase;
  background-color: $bckg-solid;
  transition: background-color .5s;
  font-size: 1.1rem;
}
.icon-swirl {
    font-size: 2rem;
    text-shadow: 2px 2px 4px green;
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