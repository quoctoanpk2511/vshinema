<template>
  <footer class="text-white text-center">
    <b-container>
      <div class="social-container py-2">
        <a class="social-icon" href="https://www.fb.com/quoctoanpk2511" target="blank">
          <b-icon icon="facebook" font-scale="2"></b-icon>
        </a>
        <a class="social-icon">
          <b-icon icon="instagram" font-scale="2"></b-icon>
        </a>
        <a class="social-icon">
          <b-icon icon="twitter" font-scale="2"></b-icon>
        </a>
        <a class="social-icon">
          <b-icon icon="youtube" font-scale="2"></b-icon>
        </a>
      </div>
      <div class="mb-3">
        © 2021 Copyright:
        <a class="text-reset" href="https://shinema.com/">Shinema.com</a>
      </div>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
footer {
  width: 100%;
  background-color: #141414;
  position: absolute;
}

.social-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-icon {
  color: #FFFFFF;
  height: 32px;
}
</style>
