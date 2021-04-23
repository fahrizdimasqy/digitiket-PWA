<template>
    <b-card 
        class="card-shadow ml-3 mr-3"
        style="max-width: 26rem">
        <b-row class="mb-4">
            <b-col>
                <b-img rounded :src="url_gambar" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col class="text-left">
                <strong><b-card-text>{{namaAcara}}</b-card-text></strong>
                <small><b-card-text class="text-grey">{{tanggalAcara}}</b-card-text></small>
                <strong><b-card-text>{{jumlahTiket}} Tiket</b-card-text></strong>
                <b-card-text class="pr-3 text-purple">IDR {{ formatPrice(Harga)}}
                    <b-badge 
                        variant="success"
                        v-if="status == 'Berhasil'">Berhasil</b-badge>
                    <b-badge 
                        variant="warning"
                        v-else-if="status == 'Menunggu'">Menunggu</b-badge>    
                </b-card-text> 
            </b-col>
        </b-row>
        <b-card-footer class="bg-transparent">
            <b-row>
                <b-col class="text-left">
                    <b-img src="https://i.postimg.cc/L5HP6zXJ/hamburger.png" fluid alt="Responsive image"></b-img>
                    <span class="ml-3">Lihat Rincian</span>
                </b-col>
                <b-col class="text-right">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg> 
                    </a>
                </b-col>
            </b-row> 
        </b-card-footer>
    </b-card>
</template>

<script>
export default {
    name: "CardOrder",
    data() {
        return {
            namaAcara : 'The Lodge Maribaya',
            tanggalAcara: 'Rabu, 30 Desember 2020',
            url_gambar: 'https://i.postimg.cc/3RfT509T/image-14.png',
            jumlahTiket: 1,
            Harga: 35000, 
            status: 'Berhasil'
        };
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }
};
</script>
<style scoped>
.card-shadow{
    box-shadow: 0px 4px 2px rgba(0,0,0,.1);
}
.text-purple{
    color: #4E2E8A;
}
.text-grey {
    color: #C0C0C0;
}
</style>