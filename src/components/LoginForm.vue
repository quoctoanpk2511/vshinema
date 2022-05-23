<template>
  <form class="login-form" @submit.prevent="login">
    <div class="login-text">Login</div>
    <input
      v-model="email"
      type="email"
      class="form-control form-input"
      autocomplete="on"
      placeholder="Email address"
      @change="validEmail(email)"
    />
    <div v-show="isInvalid" id="emailHelp" class="form-text text-danger">
      Invalid email.
    </div>
    <input
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
export default {
  name: "Home",
  data() {
    return {
      isInvalid: false,
    };
  },
  methods: {
    login() {
      // call api login
      console.log("test");
    },
    validEmail(email) {
      console.log(email);
      if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        this.isInvalid = true;
      } else {
        this.isInvalid = false;
      }
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
