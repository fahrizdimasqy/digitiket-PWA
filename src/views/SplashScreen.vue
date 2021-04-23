<template>
  <div v-if="show" class="splashscreen">
    <b-container>
      <b-row class="vh-100 text-center" align-v="center">
        <b-img center src="../assets/digitiket.png" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "SplashScreen",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 2000);
    },
  },
};
</script>
<style scoped></style>
