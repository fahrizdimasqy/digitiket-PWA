<template>
    <div class="wrap-container">
        <div class="tempat-wisata">
            <Navbar title="Rinjani Waterpark" class="navbar-atas"/>
            <Tablayout />
            <Header />
            <div class="divider mb-4"></div>
            <div id="informasi">
                <b-row>
                    <b-col cols="12">
                        <h2 class="font-weight-bolder px-4 text-left">
                            Informasi Tentang Rinjani Waterpark
                        </h2>
                        <p class="desc px-4 text-left">
                            Rinjani Waterpark Lombok merupakan tempat hiburan keluarga yang terletak di Lombok Timur. Water park ini mengusung konsep resort dengan membangun lebih banyak taman hijau. Dengan begitu pengunjung bisa menikmati pemandangan hijau ketika berenang.
                            <br>
                            <br>
                            Wisata liburan keluarga ini merupakan tempat wisata terbesar di Nusa Tenggara Barat. Dibangun di atas lahan seluas 1,8 hektare juga bisa menjadi lokasi resepsi kecil-kecilan atau acara ulang tahun. Taman yang luas bisa digunakan untuk acara yang mendatangkan banyak orang.
                        </p>
                    </b-col>
                </b-row>
            </div>
            <div class="divider mb-4 mt-4"></div>

            <LokasiWisata />

            <div class="divider mb-4 mt-4"></div>

            <div v-for="item in Ulasan" v-bind:key="item.id" >
                <CardReview
                 :nama="item.Nama"
                 :komentar="item.Komentar"
                 style="margin-bottom:90px"/>
            </div>

            <router-link to="/pilih-tanggal">
                <OrderBottomBar 
                keterangan="Mulai dari" 
                btnName="Beli Sekarang" 
                :total="17500"
                class="mt-4 order-bar fixed-bottom shadow-lg border-0"
                />
            </router-link>



        </div>

    </div>
</template>
    
<script>
import Header from '@/components/tempat-wisata/Header.vue'
import LokasiWisata from '@/components/tempat-wisata/LokasiWisata.vue'
import CardReview from '@/components/tempat-wisata/CardReview.vue'
import OrderBottomBar from '@/components/OrderBottomBar.vue'
import Navbar from '@/components/Navbar.vue'
import Tablayout from '@/components/Tablayout.vue'
import Vue from 'vue';
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios,axios)


export default {
    name:'TempatWisata',
    components:{
        Header,
        LokasiWisata,
        CardReview,
        OrderBottomBar,
        Navbar,
        Tablayout
    },
    data() {
        return {
            Ulasan:undefined,
        };
    },
    async mounted(){
        await Vue.axios.get('https://605ed476e96e5c0017407cba.mockapi.io/digi/Ulasan')
        .then((resp)=>{
            this.Ulasan = resp.data;
            console.warn(resp.data)
        })
    },

}
</script>

<style scoped>
.wrap-container{
    overflow: hidden;
}

.divider{
    height: 6px;
    width: 100%;
    background-color: #E5E5E5;
}

.navbar-atas{
    position: fixed;
    z-index: 3;
}

</style>