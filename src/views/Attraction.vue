<template>
    <div class="attraction">
        <b-container fluid class="p-0">
            <Navbar title="Attraction" />
            <Search Type="Cari attraction .." style="margin-top:20px"/>
            <div v-for="item in Atraksi" v-bind:key="item.id">
                <router-link to="/tempat-wisata">
                    <Cardattraction 
                    :judul="item.Nama" 
                    :lokasi="item.Lokasi" 
                    :harga="item.Harga"
                    :ulasan="item.Ulasan"
                    class="mx-auto" style="margin-top:24px" />
                </router-link>    
            </div>
            
        </b-container>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/SearchSort.vue'
import Cardattraction from '@/components/ListViewCard.vue'
import Vue from 'vue';
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios,axios)
export default {
    name: "Attraction",
    data() {
        return {
            Atraksi:undefined,
        };
    },
    components:{
        Navbar,
        Search,
        Cardattraction
    },
    async mounted(){
        await Vue.axios.get('https://605ed476e96e5c0017407cba.mockapi.io/digi/Attraction')
        .then((resp)=>{
            this.Atraksi = resp.data;
        })
    },
}
</script>

<style scoped>

</style>