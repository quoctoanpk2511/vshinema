<template>
    <div class="page_content profile-page">
      <div class="profile-section">
        <div>
            <h1>Profile</h1>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import LayoutDefault from "../layouts/LayoutDefault.vue";
  
  export default {
    name: "Profile",
    created() {
      this.$emit("update:layout", LayoutDefault);
    },
  };
  </script>
  