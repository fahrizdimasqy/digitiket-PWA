<template>
  <b-container fluid="sm" class="d-flex flex-column text-left p-4">
    <h4 class="font-weight-bold">{{ tiket.nama }}</h4>
    <p class="text-secondary">
      Usia {{ kategori === "dewasa" ? "diatas 15 " : "antara 2 s.d 15 " }} tahun
    </p>
    <div class="d-flex justify-content-start align-items-baseline">
      <div class="d-flex flex-column w-75">
        <div class="d-flex p-0">
          <div class="col-5 p-0">Masa Aktif</div>
          <div class="col-1 p-0">:</div>
          <div class="col-5 p-0">{{ tiket.masa_aktif }} Hari</div>
        </div>
        <div class="d-flex p-0">
          <div class="col-5 p-0">Harga</div>
          <div class="col-1 p-0">:</div>
          <div class="col-5 p-0">IDR {{ converter(totalHarga()) }}</div>
        </div>
      </div>
      <b-form-spinbutton
        v-if="isSpin"
        :disabled="!isSpin"
        id="sb-default"
        min="0"
        max="200"
        v-model="tiket.jumlah"
        :value="tiket.jumlah"
        class="mb-2 w-50 align-items-end"
      ></b-form-spinbutton>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "PilihTiket",
  props: {
    kategori: {
      required: false,
      type: String,
      default: "dewasa",
    },
    isSpin: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      tiket: {
        nama: "Tiket Masuk Rinjani Water Park",
        jumlah: 1,
        masa_aktif: 1,
        harga: {
          dewasa: 22500,
          anak: 17500,
        },
      },
    };
  },
  methods: {
    totalHarga() {
      if (this.kategori === "dewasa")
        return this.tiket.jumlah * this.tiket.harga.dewasa;
      else return this.tiket.jumlah * this.tiket.harga.anak;
    },

    converter(nominal) {
      const currency = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      });
      return currency.format(nominal).slice(3);
    },
  },
};
</script>

<style lang="scss">
$primary: #4e2e8a;
$grey: rgba(229, 229, 229, 0.8);
@media (max-width: 720px) {
  * {
    font-size: 14px;
  }
  h1 {
    font-size: 18px;
  }
  h2,
  h3,
  h4 {
    font-size: 16px;
  }
  h5,
  h6 {
    font-size: 14;
  }
}
.b-form-spinbutton {
  border: none;
  &:focus {
    box-shadow: none !important;
  }
  .btn {
    margin-left: 4px;
    margin-right: 4px;
    border-radius: 5px !important;
    color: $primary;
    background: $grey;
  }
  output {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
    height: 100%;
    vertical-align: middle;
    border-radius: 5px !important;
    border: 1px solid $grey !important;
  }
}
</style>
