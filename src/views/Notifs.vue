<template>
  <div class="home">
    <Navbar title="Notifikasi" />
     <NotifCardList v-bind:notifs="notifs" />
  </div>
</template>

<script>
// @ is an alias to /src
import NotifCardList from '@/components/NotifCardList.vue';
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Notifs',
  components: {
    NotifCardList,
    Navbar
  },
  data() {
        return {
            notifs: [
                {   id: '1',
                    title: 'Pembayaran Berhasil 1',
                    desc: 'Pembayaran pesanan #27383 untuk Virtual Tour RajaAmpat (Wisata Kelas Dunia Rumah Wisatawan) berhasil.',
                    time: '10/01/21 22:09'
                },
                 {
                    id: '2',
                    title: 'Pembayaran Berhasil 2',
                    desc: 'Pembayaran pesanan #27383 untuk Virtual Tour RajaAmpat (Wisata Kelas Dunia Rumah Wisatawan) berhasil.',
                    time: '10/01/21 22:09'
                },
            ]
           
        };
    }
}
</script>