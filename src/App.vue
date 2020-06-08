<template>
  <div id="app">
    <div v-cloak>
      <Navbar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303938;
  font-family: 'Nunito', sans-serif;
  background-color: #fff;
  margin: 0px;
  height: 100vh;
  min-height: 100vh;
  overflow-x: hidden;
}

[v-cloak] {
  display: none;
}

h2 {
  font-weight: bold;
}
</style>
