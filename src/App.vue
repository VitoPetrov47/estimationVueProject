<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>
<script>
  import EmptyLayout from "@/layout/EmptyLayout";
  import MainLayout from "@/layout/MainLayout";

  export default {
    name: 'App',
    computed: {
      layout() {
        console.log('layout', this.$route.meta);
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    },
    components: {
      EmptyLayout, MainLayout
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
