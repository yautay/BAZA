<template>
  <div>
    <a href="https://www.facebook.com/BAZA-Pracownia-spotka%C5%84-tw%C3%B3rczych-110228761214690"><i
        class="fab fa-facebook-square"></i></a>
    <i class="fab fa-twitter-square" style="display: none"></i>
    <a href="mailto: kontakt@baza-cerekwica.pl"><i class="fas fa-at"></i></a>
  </div>
</template>

<script>
export default {
  name: "TheSocialmedia"
}
</script>

<style lang="scss" scoped>
div {
  @media (max-width: 410px) {
    display: none;
  }
  font-size: 2rem;

  i {
    padding: 0 10px 0;
    color: $text-dark-contrast;
    font-size: 4rem;
    transition: text-shadow, color, .7s;

    &:link &:visited {
      color: $text-dark-contrast;
    }
  }

  .fa-at:hover {
    color: #bb001b;
    text-shadow: 0 0 2px #bb001b;
  }

  .fa-facebook-square:hover {
    color: #4267B2;
    text-shadow: 0 0 2px #4267B2;

  }
}
</style>