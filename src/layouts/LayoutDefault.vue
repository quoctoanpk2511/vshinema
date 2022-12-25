<template>
  <div class="layout-default">
    <Navbar />
    <div class="default-container">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "LayoutDefault",
  components: { Navbar, Footer },
};
</script>

<style scoped>
.default-container {
  height: calc(100vh - 56px - 400px);
}
</style>
