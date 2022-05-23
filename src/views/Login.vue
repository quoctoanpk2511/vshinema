<template>
  <div class="login-body s-flex-center">
    <login-form></login-form>
  </div>
</template>

<script>
import LayoutAuth from "../layouts/LayoutAuth.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Login",
  created() {
    this.$emit("update:layout", LayoutAuth);
  },
  components: { LoginForm },
};
</script>

<style scoped>
.login-body {
  height: 100%;
  border-radius: 4px;
}
</style>
