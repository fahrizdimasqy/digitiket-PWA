<template>
  <div>
    <SplashScreen />
    <b-img src="../assets/digi-logo.png" fluid class="mt-3 mb-3"></b-img>
    <VueSlickCarousel v-bind="carousel" ref="carousel">
      <div
        style="width:100vw;"
        v-for="(item, index) in onboardings"
        :key="index"
      >
        <center>
          <b-img :src="item.image" class="card-rounded" />
          <h1 class="title mt-3" v-text="item.title"></h1>
          <p class="subtitle" v-text="item.subtitle"></p>
        </center>
      </div>
      <!-- <div class="d-flex align-content-around"> -->
      <template #nextArrow="arrowOption">
        <div>
          {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          <div class="test d-flex justify-content-between">
            <div class="test">
              <router-link to="/home">
                <p class="txt-lewati">Lewati</p>
              </router-link>
              <p
                v-if="arrowOption.currentSlide !== onboardings.length - 1"
                class="txt-selanjutnya"
              >
                Selanjutnya
              </p>

              <b-button v-else class="btn btn-primary btn-login" to="/login"
                >Login</b-button
              >
            </div>
          </div>
        </div>
      </template>

      <!-- </div> -->
    </VueSlickCarousel>
    <!-- <b-container>
        <div class="mt-5 d-flex justify-content-between">
          <router-link to="/home">
            <p>Lewati</p>
          </router-link>

          <div v-if="!buttonLogin">
            <p @click="nextSlide">Selanjutnya</p>
          </div>
          <div v-else>
            <b-button class="primary">Login</b-button>
          </div>
        </div>
      </b-container> -->
  </div>
</template>
<script>
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import SplashScreen from "./SplashScreen.vue";
export default {
  name: "Onboarding",
  components: {
    SplashScreen,
  },
  data: () => ({
    slide: 0,
    buttonLogin: false,
    onboardings: [
      {
        image: require("../assets/onboarding1.png"),
        title: "Beli tiket tanpa antre",
        subtitle:
          "Pesan tiket langsung dari smartphone mu tanpa ribet tanpa antre.",
      },
      {
        image: require("../assets/onboarding2.png"),
        title: "Liburan ala virtual tour",
        subtitle:
          "Virtual tour menawarkan pengalaman liburan yang tak kalah  seru dengan liburan langsung.",
      },
      {
        image: require("../assets/onboarding3.png"),
        title: "Temukan wahana disekitarmu",
        subtitle:
          "Cari semua yang kamu suka dan temukan wahana rekreasi di sekitarmu.",
      },
    ],

    carousel: {
      dots: true,
      arrows: true,
      //   fade: true,
      dotsClass: "slick-dots custom-dot-class",
      edgeFriction: 0.35,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    },
  }),
};
</script>
<style scoped>
.title {
  /* width: 110px; */
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #4e2e8a;
}
.subtitle {
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  width: 228.19px;
  color: rgba(0, 0, 0, 0.5);
}
.test {
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: 120px;
  padding: 10px;
  margin-top: 90%;
}

.txt-selanjutnya {
  position: absolute;
  float: right !important;
  left: 250px;
}
.btn-login {
  position: absolute;
  left: 270px;
  bottom: 5px;
  background-color: #4e2e8a;
}
@media (min-width: 411px) {
.txt-selanjutnya {
  left: 305px;
}
.btn-login {
  left: 325px;
  bottom: 5px;
}
}
@media (min-width: 375px) {
.txt-selanjutnya {
  left: 270px;
}
.btn-login {
  left: 285px;
  bottom: 5px;
}
}
@media (max-width: 320px) {
.txt-selanjutnya {
  position: absolute;
  left: 220px;
}
.btn-login {
  position: absolute;
  left:230px;
  bottom: 5px;
  background-color: #4e2e8a;
}
}
@media (max-width: 280px) {
.txt-selanjutnya {
  position: absolute;
  left: 180px;
}
.btn-login {
  position: absolute;
  left:200px;
  bottom: 5px;
  background-color: #4e2e8a;
}
}
</style>
