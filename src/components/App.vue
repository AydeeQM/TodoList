<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <a href="!#" class="navbar-brand">
          <img src="/src/assets/logo.png" alt="brand" width="40" height="40">
          <span>Welcome</span>
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">Register</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
#app header {
  background-color: #eae9e9;
  padding-top: 1em;
  padding-bottom: 1em;

  .nav-item {
    background-color: #046ace;
    padding: 0.5em 1em;
    border-radius: 6px;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>

