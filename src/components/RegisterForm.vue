<template>
  <div class="s-flex-center h-100">
    <div class="register-body">
      <div class="register-text pb-3">
        Ready to watch? Enter your email to create or restart your membership.
      </div>
      <div class="s-flex-center h-50">
        <input
          class="register-input h-100"
          type="email"
          placeholder="Email address"
        />
        <button class="btn btn-danger h-100">Get Started ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>

<style>
.register-body {
  height: 100px;
}

.register-text {
  font-size: 20px;
  color: white;
}

.register-input {
  width: 350px;
  font-size: 20px;
}

.register-btn {
  background: solid red;
}
</style>
