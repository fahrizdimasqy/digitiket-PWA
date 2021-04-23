<template>
    <div class="tour">
        <b-container fluid class="p-0">
            <Navbar title="Tour" />
            <Search Type="Cari tour .." style="margin-top:20px"/>
            <Cardatour class="mx-auto" style="margin-top:24px" />
        </b-container>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/SearchSort.vue'
import Cardatour from '@/components/ListViewCard.vue'

export default {
    name: "Tour",
    components:{
        Navbar,
        Search,
        Cardatour
    }

}
</script>

<style scoped>

</style>