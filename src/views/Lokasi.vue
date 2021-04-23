<template>
  <div>
    <div class="input-with-icon d-flex justify-content-center">
      <b-img src="../assets/icons/location.svg" class="lokasi-icon"></b-img>
      <b-input
        type="search"
        placeholder="Jakarta Selatan, Jakarta"
        v-model="value"
        class="search"
      ></b-input>
    </div>
    <GoogleMap
      :latitude="13.7013266"
      :longitude="-89.226622"
      style="width:100%; height:100px;"
    />
    <div class="frame14">
      <div class="d-flex">
        <b-img
          src="../assets/icons/lokasi_circle.svg"
          class="lokasi-circle"
        ></b-img>
        <p>Lihat wisata disekitar mu</p>
        <b-img
          src="../assets/icons/arrow_right.svg"
          class="arrow-right"
        ></b-img>
      </div>
    </div>
    <BottomNavbar />
  </div>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";
import BottomNavbar from "../components/BottomNavbar";
export default {
  data() {
    return {
      value: "",
    };
  },
  name: "Lokasi",
  components: {
    GoogleMap,
    BottomNavbar,
  },
};
</script>

<style scoped>
.lokasi-icon {
  position: absolute;
  left: 30px;
  top: 50px;
  margin: auto 5px;
  width: 5%;
  z-index: 2;
  object-fit: cover;
}
.search {
  position: absolute;
  top: 5%;
  z-index: 1;
  width: 358px;
  height: 56px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 auto !important;
  padding-left: 40px;
}
.frame14 {
  position: absolute;
  bottom: 80px;
  left: 10px;
  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 222.87px;
  height: 58px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding: 10px;
}
.frame14 p {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #000000;
  margin: auto;
}
.lokasi-circle {
  margin-right: 5px;
  object-fit: cover;
  width: 30px !important;
}
.arrow-right {
  margin-left: 5px;
  width: 10px;
}
@media only screen and (min-width: 411px) {
  .lokasi-icon {
    position: absolute;
    top: 55px;
  }
  .search {
    padding-left: 35px;
  }
}
</style>
