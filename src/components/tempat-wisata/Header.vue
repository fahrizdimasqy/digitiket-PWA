<template>
    <div class="overflow-hidden bg-white">
        <div class="mb-3">
            <img src="https://imgur.com/wa421s.jpg" width="100%" />
            <b-row class="mx-0">
                <div
                    v-for="(imgUrl, idx) in imageList"
                    :key="idx"
                    class="list-image"
                >
                    <b-img-lazy
                        v-if="idx < 3"
                        :src="imgUrl"
                        :alt="'image-' + idx"
                        fluid-grow
                    ></b-img-lazy>
                </div>
            </b-row>
        </div>
        <div class="my-3">
            <PilihTiket kategori="dewasa"/>
            <PilihTiket kategori="anak"/>
        </div>
        <div class="my-3">
            <h2 class="text-left ml-4">Ketentuan</h2>
            <b-row class="px-3">
                <ul class="text-left">
                    <li>
                        <span class="mr-3"><img src="../../assets/icons/park-tickets.svg"/></span>
                        Maksimal Jumlah Tiket per transaksi {{ maxTiket }}
                    </li>
                    <li v-if="isRefundable" class="text-success">
                        <span class="mr-3"><img src="../../assets/icons/refund-success.svg"/></span>
                        Pembelian bisa di-refund
                    </li>
                    <li v-else-if="!isRefundable" class="text-danger">
                        <span class="mr-3"><img src="../../assets/icons/refund-danger.svg"/></span>
                        Pembelian tidak dapat di-refund
                    </li>
                    <li>
                        <span class="mr-3"><img src="../../assets/icons/print.svg"/></span>
                        Anda tidak perlu mencetak kartu
                    </li>
                    <li>
                        <span class="mr-3"><img src="../../assets/icons/break-ticket.svg"/></span>
                        Anda harus menukar tiket ke kasir
                    </li>
                </ul>
            </b-row>
        </div>
    </div>
</template>

<script>
import PilihTiket from "../PilihTiket.vue"
export default {
    components:{
        PilihTiket
    },
    data() {
        return {
            imageList: [
                "https://imgur.com/wa421s.jpg",
                "https://imgur.com/wa421s.jpg",
                "https://imgur.com/wa421s.jpg",
                "https://imgur.com/wa421s.jpg",
            ],
            isRefundable: false,
            maxTiket: 15,
        };
    },
};
</script>

<style scoped>
ul li {
    list-style-type: none;
}
.list-image {
    overflow: hidden;
    width: calc(100% / 3);
    position: relative;
    transition: 0.3s all ease;
}
.list-image::after {
    content: "";
    position: absolute;
    font-size: 14px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: transparent;
    transition: 0.2s all ease;
}
.list-image:hover::after {
    background-color: rgba(229, 229, 229, 0.8);
    transition: 0.2s all ease;
}
.list-image:nth-child(3)::after {
    content: "Lihat Galeri";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 14px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: 0.2s all ease;
    background-color: rgba(229, 229, 229, 0.8);
}
</style>