<template>
  <div class="pilih-tiket">
    <Navbar title="Pemesanan Tiket" />
    <!-- <PilihTiket /> -->
    <b-container>
      <h5 class="text-left mt-5">Tanggal kedatangan</h5>
      <div class="d-flex">
        <b-img
          src="../assets/icons/kalender.svg"
          @click="isOpenCalendar = !isOpenCalendar"
        ></b-img>
        <p class="text-muted ml-2 mt-3">{{ convertDate(user.date) }}</p>
      </div>

      <!-- <p class="display-1" v-if="!isOpenCalendar ? false : true">test</p> -->
      <b-calendar
        tabindex="0"
        @blur="isOpenCalendar = !isOpenCalendar"
        hide-header
        v-if="!isOpenCalendar ? false : true"
        class="position-absolute calendar"
        v-model="user.date"
        locale="ID"
        :date-format-options="{
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }"
        :initial-date="user.date"
      ></b-calendar>

      <hr />
    </b-container>
    <PilihTiket />
    <hr />
    <PilihTiket />
    <div class="total-pembayaran ">
      <b-card>
        <b-row no-gutters class="mt-2">
          <b-col cols class="text-left">
            <p>Total Harga</p>
            <p class="text-purple">IDR 17.500</p></b-col
          >
          <b-col cols>
            <b-button variant="primary">Konfirmasi</b-button>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
// import PilihTiket from "@/components/PilihTiket"
import PilihTiket from "../components/PilihTiket.vue";
export default {
  name: "HalamanPilihTiket",
  data() {
    return {
      text: "",
      isOpenCalendar: false,
      user: {
        date: new Date(),
      },
    };
  },
  methods: {
    convertDate(date) {
      return new Date(date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },
  },
  components: {
    Navbar,
    PilihTiket,
    // PilihTiket,
  },
};
</script>

<style scoped>
h5 {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 128.91%;
  /* identical to box height, or 18px */
  display: flex;
  align-items: center;
  color: #000000;
}
.calendar {
  right: 5%;
  top: 5.5rem;
  z-index: 1;
}
.pilih-tiket {
  /* margin-top: 25%; */
}
.total-pembayaran {
  bottom: 0;
  position: fixed;
  width: 100%;
}
.total-pembayaran button {
  float: right;
}

.total-pembayaran p:nth-child(1) {
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
}
.text-purple {
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  color: #4e2e8a;
}
img {
  object-fit: none !important;
}
</style>
