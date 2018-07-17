<template>
  <div id="app" class="app">
    <nav class="app-nav">
      <router-link class="app-nav-item" v-for="nav in navRoutes" :key="nav.name" :to="nav.path">{{nav.name}}</router-link>
    </nav>
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { navRoutes } from "./router/routes";

export default {
  name: "app",
  computed: {
    navRoutes() {
      return navRoutes;
    }
  }
};
</script>

<style lang="less">
html, body {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
}
.app {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &-nav {
    display: flex;
    align-items: center;
    background: #333;
    padding: 0 20px;
    &-item {
      display: inline-block;
      color: white;
      text-decoration: none;
      padding: 20px 20px;
      position: relative;
      z-index: 1;
      transition: 0.2s;
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        z-index: -1;
        background: white;
        top: 0;
        left: 0;
        transform: skewX(-30deg) scaleY(0);
        transition: 0.2s;
        transform-origin: center;
      }
      &.active,
      &:hover {
        color: #333;
        &::after {
          transform: skewX(-30deg) scaleY(1);
        }
      }
    }
  }
  &-content {
    flex: 1;
    padding: 20px;
    background: #f3f4f5;
  }
}
</style>
