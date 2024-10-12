<template>
  <div class="s-flex-center h-100">
    <div class="register-body">
      <div class="register-text pb-3">
        Ready to watch? Enter your email to create or restart your membership.
      </div>
      <form class="s-flex-center h-50" @submit.prevent="register">
        <input
          v-model="email"
          class="register-input h-100"
          type="email"
          placeholder="Email address"
          @change="validEmail(email)"
        />
        <button type="submit" class="btn btn-danger h-100">
          Get Started <b-icon icon="chevron-right"></b-icon>
        </button>
      </form>
      <div v-show="isInvalidEmail" class="s-flex-center form-text text-danger">
        Invalid email.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      isInvalidEmail: false,
      email: "",
    };
  },
  methods: {
    register() {
      console.log("You are already registered");
    },
    validEmail(email) {
      if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        this.isInvalidEmail = true;
      } else {
        this.isInvalidEmail = false;
      }
    },
  },
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
