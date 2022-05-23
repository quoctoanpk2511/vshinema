<template>
  <div class="layoutAuth">
    <a href="/">
      <img class="logo" src="../statics/images/shinema-logo.png"
    /></a>
    <slot />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "LayoutAuth",
  components: {
    Footer,
  },
};
</script>

<style>
.layoutAuth {
  height: 100vh;
  background-image: url("@/statics/images/layoutauth-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.logo {
  height: 80px;
  padding-left: 20px;
  position: absolute;
}
</style>
