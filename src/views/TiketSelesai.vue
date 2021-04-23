<template>
  <div class="tiket-selesai">
    <Navbar class="upper-navbar" title="Tiket"/>
    <TabTiket />
    <b-container class="container-tiket">
      <b-row>
        <b-col>
          <Search Type="Cari tiket ..." class="my-3"/>
          <Cardevent/>
        </b-col>
      </b-row>
    </b-container>
    <BottomNavbar />
  </div>
</template>

<script>
import Navbar from '@/components/NavbarNotification.vue'
import Search from '@/components/SearchSort.vue'
import Cardevent from '@/components/ListViewCard.vue'
import BottomNavbar from '@/components/BottomNavbar.vue'
import TabTiket from '@/components/TabTiket.vue'

export default {
  name: "TiketSelesai",
  components: {
    Navbar,
    Search,
    Cardevent,
    BottomNavbar,
    TabTiket
  }
}
</script>

<style scoped>
  .tiket-selesai {
    overflow: hidden;
  }

  .upper-navbar {
    z-index: 3;
    position: fixed;
  }

  .container-tiket {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
</style>