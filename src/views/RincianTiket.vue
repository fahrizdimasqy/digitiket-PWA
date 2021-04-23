<template>
    <!-- Navigation -->
    <div class="rincian-tiket">
        <b-container class="rincian">
            <strong><h5 class="text-purple text-left mb-3">Detail Pembelian</h5></strong>
            <div class="d-flex flex-column w-75"  >
              <div class="d-flex p-0">
                <div class="col-12 p-0">
                  <div class="d-flex p-0">
                    <div class="col-7 p-0">ID Order</div>
                    <div class="col-1 p-0">:</div>
                    <div class="col-8 p-0">{{ IDOrder }}</div>
                  </div>
                  <div class="d-flex p-0">
                    <div class="col-7 p-0">Status</div>
                    <div class="col-1 p-0">:</div>
                    <div class="col-6 p-0">{{ Status }} </div>
                  </div>
                  <div class="d-flex p-0">
                    <div class="col-7 p-0">Metode Pembayaran</div>
                    <div class="col-1 p-0">:</div>
                    <div class="col-8 p-0">{{ metodePembayaran }}</div>
                  </div>
                  <div class="d-flex p-0">
                    <div class="col-7 p-0">Total Pembayaran</div>
                    <div class="col-1 p-0">:</div>
                    <div class="col-8 p-0">IDR {{ formatPrice(totalPembayaran) }}</div>
                  </div>
                </div>
                <div class="col-3 p-2">
                  <qrcode-vue :value="value" :size="size" level="H" />
                  <!-- <b-img src="https://i1.wp.com/www.candra.web.id/wp-content/uploads/2012/02/qrcodeex.png?fit=248%2C248" fluid alt="Responsive image" width="60px"></b-img> -->
                </div>
              </div>
            </div>
        </b-container>
        <hr />
        <b-container class="rincian">
            <strong><h5 class="text-purple text-left mb-3">Informasi Pembeli</h5></strong>
            <div class="d-flex flex-column w-75">
              <div class="d-flex p-0">
                <div class="col-7 p-0">Nama</div>
                <div class="col-1 p-0">:</div>
                <div class="col-8 p-0">{{ nama }}</div>
              </div>
              <div class="d-flex p-0">
                <div class="col-7 p-0">Email</div>
                <div class="col-1 p-0">:</div>
                <div class="col-8 p-0">{{ email }}</div>
              </div>
              <div class="d-flex p-0">
                <div class="col-7 p-0">Nomor Handphone</div>
                <div class="col-1 p-0">:</div>
                <div class="col-8 p-0">{{ nomorHandphone }}</div>
              </div>
              <div class="d-flex p-0">
                <div class="col-7 p-0">Tanggal Pemesanan</div>
                <div class="col-1 p-0">:</div>
                <div class="col-8 p-0">{{ tanggalPemesanan }}</div>
              </div>
            </div>
        </b-container>
        <hr />
        <b-container class="rincian">
            <strong><h5 class="text-purple text-left mb-3">Informasi Tiket</h5></strong>
            <div class="d-flex flex-column w-75">
              <div class="d-flex p-0">
                <div class="col-7 p-0">Nama Wahana</div>
                <div class="col-1 p-0">:</div>
                <div class="col-8 p-0">{{ namaWahana }}</div>
              </div>
              <div class="d-flex p-0">
                <div class="col-7 p-0">Jadwal</div>
                <div class="col-1 p-0">:</div>
                <div class="col-8 p-0">{{ jadwal }}</div>
              </div>
              <div class="d-flex p-0">
                <div class="col-7 p-0">Masa Aktif</div>
                <div class="col-1 p-0">:</div>
                <div class="col-8 p-0">{{ masaAktif }}</div>
              </div>
            </div>
        </b-container>
        <hr />
        <b-container class="rincian">  
            <strong><h5 class="text-purple text-left mb-3">Rincian Pembayaran</h5></strong>
            <p >Tiket Anak Dewasa Rinjani Waterpark <strong class="text-purple float-right">IDR {{ formatPrice(tiketAnak) }}</strong></p>
            <p >Tiket Masuk Dewasa Rinjani Waterpark <strong class="text-purple float-right">IDR {{ formatPrice(tiketDewasa) }}</strong></p>
            <p >Diskon <strong class="text-purple float-right">IDR {{ formatPrice(diskon) }}</strong></p>
            <p >Biaya Layanan <strong class="text-purple float-right">IDR {{ formatPrice(biayaLayanan) }}</strong></p>
            <p >Penggunaan Kredit <strong class="text-purple float-right">IDR {{ formatPrice(kredit) }}</strong></p>
        </b-container>
        <b-container>
          <div class="bg-primary mt-3 mb-3">
            <b-row>
              <b-col class="text-left rincian">
                <strong><p class="text-left ml-2 mr-2 mt-2">Total Pembayaran</p></strong>
              </b-col>
              <b-col class="text-right rincian">
                <strong><p class="text-right ml-2 mr-2 mt-2">IDR {{ formatPrice(totalHarga) }}</p></strong>
              </b-col>
            </b-row>
          </div>
        </b-container>
        <b-button class="bg-primary">Download E-Tiket</b-button>
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
    name: "Rincian Tiket",
    data() {
        return {
            value: 'https://example.com',
            size: 300,
            IDOrder: '1162837629',
            Status: 'Lunas',
            metodePembayaran: 'Transfer Bank',
            totalPembayaran: 35000, 
            nama: 'Natasya Joan',
            email: 'natasyajoan@gmail.com',
            nomorHandphone: '081273628271', 
            tanggalPemesanan: 'Rabu, 30 Juni 2020 12:03',
            namaWahana: 'Rinjani Waterpark', 
            jadwal: 'Senin, 18 Oktober 2020',
            masaAktif: '1 Hari', 
            tiketDewasa: 22500,
            tiketAnak: 17500, 
            diskon: 0,
            biayaLayanan: 0,
            kredit: 0, 
            totalHarga: 40000, 
        };
    },
    components: {
      QrcodeVue
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }
}
</script>

<style>
.text-purple{
    color: #4E2E8A;
}
.text-grey {
    color: #C0C0C0;
}
.bg-purple {
  background-color: #4E2E8A;
  line-height: 20px;
  color: #FFFFFF;
}
.rincian div {
  font-size: 12px;
  text-align: left;
}
.rincian p {
  font-size: 12px;
  line-height: 5px;
  text-align: left;
}
.rincian-tiket hr {
  line-height: 5px;
  background-color: #E5E5E5;
}
</style>