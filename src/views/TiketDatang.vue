<template>
    <div class="TiketDatang">
        <Navbar title="Tiket" class="navbar-atas" />
        <TabTiket class="navbar-atas"/>
        <div class="divider">
        </div>
        <Search Type="Cari tiket .." style="margin-top:20px" />
        <Cardevent class="mx-auto" style="margin-top:24px" />
        <Cardevent class="mx-auto" style="margin-top:24px" />
        <BottomNavbar style="margin-top:30px" />
    </div>
</template>

<script>
import Navbar from '@/components/NavbarNotification.vue'
import Search from '@/components/SearchSort.vue'
import Cardevent from '@/components/ListViewCard.vue'
import BottomNavbar from '@/components/BottomNavbar.vue'
import TabTiket from '@/components/TabTiket.vue'

export default {
    name: "TiketDatang",
    components:{
        Navbar,
        Search,
        Cardevent,
        BottomNavbar,
        TabTiket
    }

}
</script>

<style scoped>
.TiketDatang{
    overflow: hidden;
}
.navbar-atas{
    z-index: 3;
    position: fixed;
}
.divider{
    width: 100%;
    height: 100px;
}

</style>