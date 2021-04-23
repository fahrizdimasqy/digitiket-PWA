<template>
    <div class="promo">
        <Navbar title="Promo Terkini" class="navbar-atas"/>
        <div style="margin-top: 80px;"></div>
        <div class=" mt-3" >
            <router-link to="/detailpromo"><img src="../assets/promo-1.png" width="90%" class="promotion-frame"></router-link>
        </div>
        <!-- Gambar yang diexport dari figma 2x -->
        <div class="mt-3">
            <router-link to="/detailpromo"><img src="../assets/promo-2.png" width="90%" class="promotion-frame"></router-link>
        </div>

    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'Promo',
    components:{
        Navbar
    },
}
</script>

<style scoped>

.promotion-frame{
    border-radius: 10px;
}

.navbar-atas{
    position: fixed;
    z-index: 3;
}
</style>
