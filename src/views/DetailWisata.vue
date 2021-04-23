<template>
  <div>
    <navbar title="Rinjani WaterPark" />
    <div id="DetaiLWisata">
      <!-- header -->
      <b-container fluid  >
        <b-row>
          <b-col>
            <a href="#">Tiket</a>
          </b-col>
          <b-col>
            <a href="#">Informasi</a>
          </b-col>
          <b-col>
            <a href="#">Lokasi</a>
          </b-col>
          <b-col>
            <a href="#">Ulasan</a>
          </b-col>
        </b-row>

       <b-row>
         <img class="w-100 h-75" src="../assets/tempat-wisata-img/rinjani-1.png" alt="">
       </b-row>
       <b-row class="mx-0">
                <div
                    v-for="(imgUrl, idx) in imageList"
                    :key="idx"
                    class="list-image"
                >
                    <b-img-lazy
                        v-if="idx < 3"
                        :src="imgUrl"
                        :alt="'image-' + idx"
                        fluid-grow
                    ></b-img-lazy>
                </div>
            </b-row>


       
         <b-row>
         <b-col class="text-left ml-2">
           <h2>Tiket Masuk {{ tiket.nama.anak}} {{informasiTitle}}</h2>
          <p class="text-muted">Usia antara 2 s.d 15 tahun</p>
         </b-col>
       </b-row>

       <b-row>
         <b-col class="text-left ml-2">
         <p class="mb-0">Masa Aktif :  {{ tiket.aktif }} hari </p>
         <p class="mt-0">Harga :  IDR {{ tiket.harga.anak }} hari </p>
         </b-col>
       </b-row>
       

       
         <b-row>
         <b-col class="text-left ml-2">
           <h2>Tiket Masuk {{ tiket.nama.dewasa }} {{informasiTitle}}</h2>
          <p class="text-muted">Usia diatas 15 tahun</p>
         </b-col>
       </b-row>

       <b-row>
         <b-col class="text-left ml-2">
         <p class="mb-0">Masa Aktif :  {{ tiket.aktif }} hari </p>
         <p class="mt-0">Harga :  IDR {{ tiket.harga.dewasa }} hari </p>
         </b-col>
       </b-row>
       

        
       <b-row>
          <div class="my-3">
              <h2 class="text-left ml-4">Ketentuan</h2>
              <b-row class="px-3">
                  <ul style="list-style-type: none" class="text-left">
                      <li>
                          <span class="mr-3"><img src="../assets/icons/park-tickets.svg"/></span>
                          Maksimal Jumlah Tiket per transaksi {{ maxTiket }}
                      </li>
                      <li v-if="isRefundable" class="text-success">
                          <span class="mr-3"><img src="../assets/icons/refund-success.svg"/></span>
                          Pembelian bisa di-refund
                      </li>
                      <li v-else-if="!isRefundable" class="text-danger">
                          <span class="mr-3"><img src="../assets/icons/refund-danger.svg"/></span>
                          Pembelian tidak dapat di-refund
                      </li>
                      <li>
                          <span class="mr-3"><img src="../assets/icons/prints.svg"/></span>
                          Anda tidak perlu mencetak kartu
                      </li>
                      <li>
                          <span class="mr-3"><img src="../assets/icons/break-ticket.svg"/></span>
                          Anda harus menukar tiket ke kasir
                      </li>
                  </ul>
              </b-row>
          </div>       
        </b-row>
      </b-container>

      <!-- informasi -->
      <b-container fluid>
        <b-row>
          <div class="my-3 mx-4">
              <h2 class="text-left ">Informasi Tentang {{informasiTitle }}</h2>
              <p class="text-left ">{{ informasi }}</p>
          </div>
        </b-row>
      </b-container>


      <!-- lokasi -->
      <b-container fluid>
        <b-row>
            <h2 class="text-left ml-4">Lokasi {{informasiTitle }}</h2>    
        </b-row>
        <b-row>
          <p class="text-left ml-4">{{ alamat }}</p>     
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15777.574780611196!2d116.5157346!3d-8.654055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1481c4b722ee03be!2sRinjani%20Waterpark!5e0!3m2!1sen!2sid!4v1615368187587!5m2!1sen!2sid" 
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" class="mx-3"></iframe> 
        </b-row>
      </b-container>

      <!-- ulasan  -->
      <b-container fluid>
        <b-row>
          <b-col-8><h2 class="text-left ml-4">Ulasan Pengunjung {{informasiTitle }}</h2></b-col-8>
          <b-col class="align-self-center"><a href="#">lihat Semua</a></b-col>        
        </b-row>
      </b-container>
      

      
      <!-- carousel -->
      <VueSlickCarousel v-bind="carousel" >
        <b-container v-for="i in 20" :key="i" class="h-100 w-100">
        <b-card class="w-auto ulasan mt-3">
          <b-row >
            <b-col cols>
              <div class="user d-flex">
                <b-img src="../assets/Ellipse.png" alt="logo google"></b-img>
                <h5 class="name ml-3 mt-2">Nur Ali</h5>
              </div>
              <p class="komentar text-left">Tempatnya bagus, luas dan bersih</p>
            </b-col>
            <b-col cols>
              <b-form-rating
                v-model="score"
                variant="warning"
                inline
                no-border
                readonly
              ></b-form-rating>
            </b-col>
          </b-row> 
         </b-card>
       </b-container>
      </VueSlickCarousel>

          <!-- button -->
        <b-container fluid style="box-shadow: 2px -5px 18px rgba(0, 0, 0, 0.1);" class="py-3">               
          <b-row >
            <b-col class="text-left ml-4">             
                <p style="font-size: 10px" class="mb-1">Mulai Dari</p>           
                 <p style="color:#4E2E8A" class=" mb-0">Rp.{{ harga }}</p>
              </b-col>
            <b-col class=" align-self-center"><b-button style="background-color:#4E2E8A" href="#">Beli Sekarang</b-button></b-col>
          </b-row>
        </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';


export default {
  components: {
    Navbar,
    
  },
  data(){
    return{
      carousel: {
        arrows: false,
        infinite: false,
        focusOnSelect: true,
        variableWidth: true,
        speed: 500,
        slidesToShow: 1,
        swipe: false,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrow: false,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              arrow: false,
              swipe: true,
              swipeToSlide: true,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              swipe: true,
              swipeToSlide: true,
              arrow: false,
              slidesToShow: 1,
            },
          },
        ],
      },
      imageList: [
        "https://imgur.com/0mqEBoV.png", 
        "https://imgur.com/0mqEBoV.png", 
        "https://imgur.com/0mqEBoV.png", 
            ],
      maxTiket: 15,
      informasiTitle: "Rinjani Waterpark",
      informasi:"Rinjani Waterpark Lombok merupakan tempat hiburan keluarga yang terletak di Lombok Timur. Water park ini mengusung konsep resort dengan membangun lebih banyak taman hijau. Dengan begitu pengunjung bisa menikmati pemandangan hijau ketika berenang. Wisata liburan keluarga ini merupakan tempat wisata terbesar di Nusa Tenggara Barat. Dibangun di atas lahan seluas 1,8 hektare juga bisa menjadi lokasi resepsi kecil-kecilan atau acara ulang tahun. Taman yang luas bisa digunakan untuk acara yang mendatangkan banyak orang.",
      alamat:"Selong JI. Pajanggik. Majidi. Selang Lombok Timur - Nusa Tenggara Barat",
      harga:17500,
      tiket:{
        nama: {
          dewasa: "Dewasa",
          anak: "Anak"
        },
        jumlah: 1,
        aktif: 1,
        harga: {
          dewasa: 22500,
          anak: 17500,
        },
      },
    }
  }
};
</script>

<style scoped>
#DetailWisata {
  margin-top: 20%;
}

.ulasan{
  background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 10px;
}

.list-image {
    overflow: hidden;
    width: calc(100% / 3);
    position: relative;
    transition: 0.3s all ease;
}
.list-image::after {
    content: "";
    position: absolute;
    font-size: 14px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: transparent;
    transition: 0.2s all ease;
}
.list-image:hover::after {
    background-color: rgba(229, 229, 229, 0.8);
    transition: 0.2s all ease;
}
.list-image:nth-child(3)::after {
    content: "Lihat Galeri";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 14px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: 0.2s all ease;
    background-color: rgba(229, 229, 229, 0.8);
}
</style>
