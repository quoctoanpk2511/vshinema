<template>
  <register-form></register-form>
</template>

<script>
import LayoutAuth from "@/layouts/LayoutAuth.vue";
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  name: "Register",
  created() {
    this.$emit("update:layout", LayoutAuth);
  },
  components: { RegisterForm },
};
</script>

<style></style>
