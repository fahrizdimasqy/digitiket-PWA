<template>
    <div class="wisatapopuler">
        <b-container fluid class="p-0">
            <Navbar title="Wisata Populer" />
            <Search Type="Cari wisata .." style="margin-top:20px" />
            <Cardpopuler class="mx-auto" style="margin-top:24px" />
        </b-container>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/SearchSort.vue'
import Cardpopuler from '@/components/ListViewCard.vue'

export default {
    name: "WisataPopuler",
    components:{
        Navbar,
        Search,
        Cardpopuler
    }

}
</script>

<style scoped>

</style>