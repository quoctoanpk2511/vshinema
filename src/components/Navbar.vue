<template>
  <nav class="layoutDefault__nav navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Shinema</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">TV Shows</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Movies</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about"
              >New & Popular</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">My List</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
