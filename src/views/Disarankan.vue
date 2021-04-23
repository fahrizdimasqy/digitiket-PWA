<template>
    <div class="disarankan">
        <b-container fluid class="p-0">
            <Navbar title="Disarankan Untuk Anda" />
            <Search Type="Cari wisata .." style="margin-top:20px" />
            <Cardsaran class="mx-auto" style="margin-top:24px" />
        </b-container>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/SearchSort.vue'
import Cardsaran from '@/components/ListViewCard.vue'

export default {
    name: "DisarankanUntukAnda",
    components:{
        Navbar,
        Search,
        Cardsaran
    }

}
</script>

<style scoped>

</style>
