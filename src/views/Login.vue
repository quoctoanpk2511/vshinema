<template>
  <div class="login login-body">
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
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-body {
  height: 100%;
  border-radius: 4px;
}
</style>
