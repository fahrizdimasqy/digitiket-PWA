<template>
  <b-card
    no-body
    class="overflow-hidden d-flex justify-content-sm-between"
    style="max-width: 540px;"
  >
    <b-row no-gutters>
      <b-col cols="6">
        <b-card-img
          src="https://picsum.photos/400/400/?image=20"
          alt="Image"
          class=""
        ></b-card-img>
      </b-col>
      <b-col cols="6">
        <b-card-body :title="judul">
          <b-card-text :sub-title="lokasi" class="text-location">
            {{ lokasi }}</b-card-text
          >
          <b-card-text :sub-title="harga" class="text-price">
            IDR {{ converter(harga) }}</b-card-text
          >
          <b-card-footer
            class="border-0 bg-transparent d-flex justify-content-end p-0 m-0 align-items-baseline"
          >
            <b-form-rating
              v-model="score"
              variant="warning"
              inline
              no-border
              readonly
              size="sm"
            ></b-form-rating>
            <b-card-text class="text-ulasan">
              {{ ulasan + " ulasan " }}
            </b-card-text>
          </b-card-footer>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
export default {
  name: "ListViewCard",
  // untuk url gambar bisa memakai data dulu dalam fakeapi karena tidak mempunyai urlnya
  // props gambar sama denagn url gambar
  // score dan nilai sama dipakau di didata dulu saja
  props:[
    'judul', 'lokasi', 'gambar', 'harga', 'nilai','ulasan'
  ],
  data() {
    return {
      // judul: "Virtual Tour Candi Prambanan",
      // lokasi: "Sleman, Yogyakarta",
      url_gambar: "https://picsum.photos/400/400/?image=20",
      // harga: 35000,
      score: 4.0,
      // ulasan: 17,
    };
  },
  methods: {
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
<style scoped>
.card {
  width: 90%;
  /* height: 195px; */
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.card-title {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  color: #000000;
}

.card-text {
  text-align: left;
}

.text-location {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  /* identical to box height */
  color: #c4c4c4;
  transform: translateY(-5px);
}

.text-price {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #4e2e8a;
}

.text-ulasan {
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 10px;
  /* identical to box height */
  color: #c4c4c4;
  white-space: nowrap;
}
.card-img {
  /* position: relative; */
  /* top: 10%; */
  /* left: 5%; */
  border-radius: 20px 20px 20px 20px;
  padding: 10px 0px 10px 10px;
  /* margin: 10px; */
  /* width: 200px; */
  /* height: 162px; */
}
.b-rating.d-inline-flex {
  background: transparent;
  width: auto;
  position: relative;
  left: 5px;
}
.b-rating .b-rating-star .b-rating-icon {
  display: inline-flex;
  transition: all 0.15s ease-in-out;
  width: 10px;
}
</style>
