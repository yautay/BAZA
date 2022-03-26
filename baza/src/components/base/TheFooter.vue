<template>
  <footer id="footer">
    <div class="tofitcontent">
      <the-socialmedia class="footer socialmedia visible"></the-socialmedia>
      <the-copyright class="footer copywright visible"></the-copyright>
      <the-aquarius class="footer aquarius visible"></the-aquarius>
    </div>
  </footer>
</template>

<script>
import TheSocialmedia from "@/components/base/footer/TheSocialmedia";
import TheCopyright from "@/components/base/footer/TheCopyright";
import TheAquarius from "@/components/base/footer/TheAquarius";

export default {
  name: "TheFooter",
  components: {
    'the-socialmedia': TheSocialmedia,
    'the-copyright': TheCopyright,
    'the-aquarius': TheAquarius,
  }
}
</script>

<style lang="scss" scoped>

#footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: $nav-bckg-solid;

  .tofitcontent {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    @media (min-width: $mobile) {
      padding: 0 40px 0;
    }

    @media (min-width: $tablet) {
      padding: 0 80px 0;
    }

    @media (min-width: $laptop) {
      padding: 0 10vw 0;
    }
    @media (min-width: $hd + 1) {
      padding: 0 20vw 0;
    }

    .footer {
      flex: 1 200px;
      text-align: center;
      font-size: 1.3rem;
    }
  }
}

</style>