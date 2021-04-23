<template>
    <div>
        <h2 class="text-left text-primary ml-4 mb-3 font-weight-bolder">Rincian Pembayaran</h2>
        <ul class="text-left px-4">
            <li>
                <b-row class="justify-content-between">
                    <b-col cols="8" class="ellipsis">{{ tiket.dewasa.nama }}</b-col>
                    <b-col cols="4" class="text-left text-primary font-weight-bold">IDR {{ converter(tiket.dewasa.harga) }}</b-col>
                </b-row>
            </li>
            <li>
                <b-row class="justify-content-between">
                    <b-col cols="8" class="ellipsis">{{ tiket.anak.nama }}</b-col>
                    <b-col cols="4" class="text-left text-primary font-weight-bold">IDR {{ converter(tiket.anak.harga) }}</b-col>
                </b-row>
            </li>
            <li>
                <b-row class="justify-content-between">
                    <b-col cols="8" class="ellipsis">Diskon</b-col>
                    <b-col cols="4" class="text-left text-primary font-weight-bold">IDR {{ converter(tiket.diskon) }}</b-col>
                </b-row>
            </li>
            <li>
                <b-row class="justify-content-between">
                    <b-col cols="8" class="ellipsis">Biaya Layanan</b-col>
                    <b-col cols="4" class="text-left text-primary font-weight-bold">IDR {{ converter(tiket.beaLayanan) }}</b-col>
                </b-row>
            </li>
            <li>
                <b-row class="justify-content-between">
                    <b-col cols="8" class="ellipsis">Penggunaan Kredit</b-col>
                    <b-col cols="4" class="text-left text-primary font-weight-bold">IDR {{ converter(tiket.kredit) }}</b-col>
                </b-row>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tiket: {
                dewasa: {
                    nama: "Tiket Masuk Dewasa Rinjani Waterpark",
                    harga: 22500,
                    jumlah: 1
                },
                anak :{
                    nama: "Tiket Masuk Anak Rinjani Waterpark",
                    harga: 17500,
                    jumlah: 1
                },
                diskon: 2000,
                beaLayanan: 0,
                kredit: 0
            }
        }
    },
    methods: {
        converter(nominal){
            const currency = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
            })
            return currency.format(nominal).slice(3);
        }
    }
}
</script>

<style scoped>
ul li{
    list-style: none;
    font-size: 14px;
}
h2{
    font-size: 1rem;
}
.ellipsis{
    overflow: hidden;
    text-overflow: ellipsis !important;
    white-space: nowrap;
}
</style>