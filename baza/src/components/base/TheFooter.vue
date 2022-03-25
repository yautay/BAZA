<template>
  <footer id="footer">
    <div class="footer socialmedia visible"> SOCIALMEDIA</div>
    <div class="footer copywright visible"><p>Copyright © {{ presentYear }}</p></div>
    <div class="footer aquarius visible"> AQUARIUS LOGO</div>
  </footer>
</template>

<script>
let year = new Date()

export default {
  name: "TheFooter",
  data() {
    return {
      presentYear: year.getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
#footer {
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 0 20px 0;
  height: auto;
  background-color: rgb(236, 189, 106);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .footer {
    flex: 1 250px;
    height: 150px;
    background-color: red;
    margin: 5px;
  }
}
</style>