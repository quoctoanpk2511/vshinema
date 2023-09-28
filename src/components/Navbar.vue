<template>
  <b-navbar class="bg-dark" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand class="pl-4" href="/">
      <img class="nav-logo" src="../statics/images/shinema-logo.png" />
    </b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="/tvshow">TV Shows</b-nav-item>
        <b-nav-item href="/about">Movies</b-nav-item>
        <b-nav-item href="/about">New & Popular</b-nav-item>
        <b-nav-item href="/about">My List</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <b-button type="submit" variant="link">
            <b-icon icon="search" variant="white"></b-icon>
          </b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-icon icon="bell-fill"></b-icon>
          </template>
          <b-dropdown-item href="#">Noti 1</b-dropdown-item>
          <b-dropdown-item href="#">Noti 2</b-dropdown-item>
          <b-dropdown-item href="#">Noti 3</b-dropdown-item>
          <b-dropdown-item href="#">Noti 4</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown v-if="isLoggedIn == true" right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-icon icon="person"></b-icon>
          </template>
          <b-dropdown-item href="/profile">My Profile</b-dropdown-item>
          <b-dropdown-item href="/logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: true,
    }
  },
};
</script>

<style scoped>
.nav-logo {
  height: 40px;
}
</style>
