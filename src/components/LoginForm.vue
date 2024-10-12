<template>
  <form class="login-form" @submit.prevent="handleSubmit">
    <div class="login-text">Login</div>
    <div v-show="isInvalidUser" class="form-text text-danger">
      {{ errorMessage }}
    </div>
    <input
      v-model="username"
      class="form-control form-input"
      autocomplete="on"
      placeholder="Username"
    />
    <input
      v-model="password"
      type="password"
      class="form-control form-input"
      placeholder="Password"
    />

    <div class="form-check mt-3 mb-3">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Remember me</label>
    </div>
    <div class="s-flex-center w-100">
      <button type="submit" class="w-100 btn btn-danger pt-2 pb-2">
        Login
      </button>
    </div>
    <div class="mt-3">
      <p>You are new member? <a href="/register">Sign up now</a></p>
    </div>
  </form>
</template>

<script>
import { userService } from "../services";

export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
      isInvalidUser: false,
    };
  },
  created() {},
  methods: {
    handleSubmit() {
      userService
        .login(this.username, this.password)
        .then((response) => {
          if (response.success) {
            this.$router.push("/");
          } else {
            this.isInvalidUser = true;
            this.errorMessage = response.errorMessage;
          }
        })
        .catch((error) => {
          console.log("Error: " + error);
        });
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px 30px;
  color: white;
}

.login-text {
  font-size: 30px;
  padding-bottom: 20px;
}

.form-input {
  margin-top: 30px;
  height: 45px;
}
</style>
