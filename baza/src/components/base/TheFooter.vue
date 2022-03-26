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
  background-color: $bckg-solid;

  .tofitcontent {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    @media (min-width: $mobile) {
      padding: $content-padding-mobile;
    }

    @media (min-width: $tablet) {
      padding: $content-padding-tablet;
    }

    @media (min-width: $laptop) {
      padding: $content-padding-laptop;
    }
    @media (min-width: $hd) {
      padding: $content-padding-hd;
    }

    .footer {
      flex: 1 195px;
      text-align: center;
      font-size: 1.3rem;
    }
  }
}

</style>