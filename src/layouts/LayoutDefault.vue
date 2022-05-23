<template>
  <div class="layoutDefault">
    <navbar></navbar>
    <slot />
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
