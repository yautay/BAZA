<template>
  <header id="app-header">
    <nav>
      <ul>
        <li>
          <router-link to="/schedule">harmonogram</router-link>
        </li>
        <li>
          <router-link to="/news">aktualności</router-link>
        </li>
        <li>
          <router-link to="/gallery">galeria</router-link>
        </li>
        <li>
          <router-link to="/about">kim jesteśmy</router-link>
        </li>
        <li>
          <router-link to="/contact">kontakt</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style lang="scss" scoped>
#app-header {
  background-color: rgb(147, 227, 209);
  nav {
    height: 100%;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        margin: 0 2rem;
      }
    }

  }
}


</style>