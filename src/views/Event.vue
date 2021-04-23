<template>
    <div class="event">
        <b-container fluid class="p-0">
            <Navbar title="Event" />
            <Search Type="Cari event .." style="margin-top:20px" />
            <Cardevent class="mx-auto" style="margin-top:24px" />
        </b-container>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/SearchSort.vue'
import Cardevent from '@/components/ListViewCard.vue'

export default {
    name: "Event",
    components:{
        Navbar,
        Search,
        Cardevent
    }

}
</script>

<style scoped>

</style>