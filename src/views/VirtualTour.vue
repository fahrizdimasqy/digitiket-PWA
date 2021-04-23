<template>
    <div class="virtualtour">
        <b-container fluid class="p-0">
            <Navbar title="Virtual Tour" />
            <Search Type="Cari virtual tour .." style="margin-top:20px" />
            <Cardvt class="mx-auto" style="margin-top:24px" />
        </b-container>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/SearchSort.vue'
import Cardvt from '@/components/ListViewCard.vue'

export default {
    name: "VirtualTour",
    components:{
        Navbar,
        Search,
        Cardvt
    }

}
</script>

<style scoped>

</style>