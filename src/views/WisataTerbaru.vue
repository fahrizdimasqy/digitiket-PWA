<template>
    <div class="wisataterbaru">
        <b-container fluid class="p-0">
            <Navbar title="Wisata Terbaru" />
            <Search Type="Cari wisata .." style="margin-top:20px" />
            <Cardnew class="mx-auto" style="margin-top:24px" />
        </b-container>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/SearchSort.vue'
import Cardnew from '@/components/ListViewCard.vue'

export default {
    name: "WisataTerbaru",
    components:{
        Navbar,
        Search,
        Cardnew
    }

}
</script>

<style scoped>

</style>