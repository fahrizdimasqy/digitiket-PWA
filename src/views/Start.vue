<template>
  <div class="start">
    <SplashScreen />
    <b-container fluid class="p-0 ">
      <div>
        <img src="../assets/start-img.png" alt="" class="header-wrap" />
      </div>
      <div class="my-5 mx-2">
        <b-row>
          <b-col cols="12" class="mx-5 p-0">
            <img src="../assets/digi-logo.png" alt="" class="float-left mb-3" />
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12" class="text-left p-0 my-2">
            <p class="mx-5" style="font-size: 14px;">
              Cari dan pesan tiket wahana rekreasi, Booking promo tiket wahana
              rekreasi lebih praktis hanya di DigiTiket , virtual tour
              indonesia, wisata virtual indonesia.
            </p>
          </b-col>
        </b-row>
        <b-row class="mx-3">
          <b-col cols="6" class="p-0">
            <router-link to="/login">
              <b-button class="btn-start">Masuk</b-button>
            </router-link>
          </b-col>
          <b-col cols="6" class="p-0">
            <router-link to="/daftar">
              <b-button class="btn-start">Daftar</b-button>
            </router-link>
          </b-col>
        </b-row>
      </div>
      <div class="position-relative">
        <img src="../assets/circle-pink.png" alt="" class="decor" width="20%" />
      </div>
    </b-container>
  </div>
</template>

<script>
import SplashScreen from "./SplashScreen.vue";
export default {
  name: "Start",
  components: {
    SplashScreen,
  },
};
</script>

<style scoped>
.start {
  overflow: hidden;
}
.header-wrap {
  border-radius: 0px 0px 80px 80px;
  width: 100%;
  height: 350px; /* height of container */
  object-fit: cover;
  object-position: 10% 50%;
}

.btn-start {
  color: white;
  padding: 10px 40px;
  background-color: #4e2e8a;
  border: 2px solid #4e2e8a;
  border-radius: 10px;
  font-size: 12px;
}

.btn-start:hover,
.btn-focus:focus {
  background-color: white;
  color: #4e2e8a;
  outline: none;
}

.decor {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -99;
}
</style>
