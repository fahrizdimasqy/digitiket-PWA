<template>
  <div class="konfirmasi-pembelian">
    <Navbar />
    <b-container>
      <h5 class="text-purple mt-4">Silahkan periksa kembali pesanan anda</h5>
      <h4 class="date text-left mt-5">Tanggal kedatangan</h4>
      <p class="text-muted text-left">Senin, 18 Oktober 2020</p>
      <hr />
      <div class="pemesanan text-left">
        <h4 class="mb-4">Pemesanan</h4>
        <h4>Tiket Masuk Anak Rinjani Waterpark</h4>
        <div class="d-flex justify-content-between">
          <p class="text-muted">1 Tiket</p>
          <p class="text-purple text-right">IDR 17.500</p>
        </div>
        <h4>Tiket Masuk Dewasa Rinjani Waterpark</h4>
        <div class="d-flex justify-content-between">
          <p class="text-muted">1 Tiket</p>
          <p class="text-purple text-right">IDR 22.500</p>
        </div>
      </div>
      <hr />
      <div class="promo text-left">
        <h4>Promo</h4>
        <div class="d-flex justify-content-between">
          <div>
            <b-form-input
              v-model="text"
              placeholder="Masukkan kode promo"
            ></b-form-input>
          </div>
          <b-button variant="light" class="ml-2">Promo Aktif</b-button>
        </div>
        <!-- <b-row no-gutters class="mt-2">
          <b-col cols>
            <div>
              <b-form-input
                v-model="text"
                placeholder="Enter your name"
              ></b-form-input>
            </div>
          </b-col>
          <b-col cols
            ><b-button variant="light" class="ml-2"
              >Promo Aktif</b-button
            ></b-col
          >
        </b-row> -->
      </div>
      <hr />
      <div class="rincian-pembayaran text-left">
        <h4>Rincian Pembayaran</h4>
        <div class="d-flex justify-content-between">
          <h5>Tiket Masuk Anak Rinjani Waterpark</h5>
          <p class="text-purple text-right">IDR 17.500</p>
        </div>
        <div class="d-flex justify-content-between">
          <h5>Tiket Masuk Dewasa Rinjani Waterpark</h5>
          <p class="text-purple text-right">IDR 22.500</p>
        </div>
        <div class="d-flex justify-content-between">
          <h5>Diskon</h5>
          <p class="text-purple text-right">IDR 0</p>
        </div>
        <div class="d-flex justify-content-between">
          <h5>Biaya Layanan</h5>
          <p class="text-purple text-right">IDR 0</p>
        </div>
        <div class="d-flex justify-content-between">
          <h5>Penggunaan Kredit</h5>
          <p class="text-purple text-right">IDR 0</p>
        </div>
      </div>
    </b-container>
    <div class="total-pembayaran ">
      <b-card>
        <b-row no-gutters class="mt-2">
          <b-col cols class="text-left">
            <p class="heading">Mulai dari</p>
            <p class="text-purple">IDR 17.500</p></b-col
          >
          <b-col cols>
            <b-button variant="primary">Bayar</b-button>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "KonfirmasiPembelian",
  data() {
    return {
      text: "",
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.konfirmasi-pembelian {
  /* margin-top: 20%; */
}
.text-purple {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 128.91%;
  /* identical to box height, or 18px */
  display: flex;
  align-items: center;
  color: #4e2e8a;
}
h4 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 128.91%;
  /* identical to box height, or 18px */

  display: flex;
  align-items: center;

  color: #000000;
}
.pemesanan h4:nth-child(1) {
  font-weight: 600;
}
.pemesanan .text-purple {
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
}

.promo h4 {
  font-weight: 600;
}

.rincian-pembayaran {
  margin-bottom: 25%;
}
.rincian-pembayaran h4 {
  font-weight: 600;
}

.rincian-pembayaran h5 {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
}
.rincian-pembayaran .text-purple {
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
}
.total-pembayaran {
  bottom: 0;
  position: fixed;
  width: 100%;
}
.total-pembayaran .heading {
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  /* identical to box height */
  color: #000000;
}

.total-pembayaran .text-purple {
  font-weight: bold;
}

.total-pembayaran button {
  float: right;
}
</style>
