<template>
  <b-navbar class="bg-dark" toggleable="lg" type="dark" variant="info">
    <div class="container-fluid">
      <b-navbar-brand class="navbar-brand" href="/">Shinema</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/about">TV Shows</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/about">Movies</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/about"
              >New & Popular</router-link
            >
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/about">My List</router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              class="form-control me-2"
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
    </div>
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
