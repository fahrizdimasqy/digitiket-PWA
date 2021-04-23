<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/promo">Promo</router-link> |
      <router-link to="/detailpromo">Detail Promo</router-link> |
      <router-link to="/metode-pembayaran">Metode Pembayaran</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>

<style lang="stylus">
#app {
    font-family: 'Lato', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
