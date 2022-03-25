<template>
  <div class="bg">
    <div class="bg__shadow"></div>
  </div>
</template>

<script>
export default {
  name: "TheBackground"
}
</script>

<style lang="scss" scoped>
.bg {
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url("https://baza-mrowino.s3.eu-central-1.amazonaws.com/wood-800.jpg");
    @media (min-width: 768px) {
      background-image: url("https://baza-mrowino.s3.eu-central-1.amazonaws.com/wood-1200.jpg");
    }
    @media (min-width: 1200px) {
      background-image: url("https://baza-mrowino.s3.eu-central-1.amazonaws.com/wood-3000.jpg");
    }
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    filter: grayscale(80%) brightness(180%) contrast(105%);
  }

  .bg__shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);
  }
}
</style>