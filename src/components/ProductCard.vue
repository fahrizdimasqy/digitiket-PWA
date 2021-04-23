<template>
    <b-card
        :title="judul"
        :sub-title="lokasi"
        :img-src="url_gambar"
        :img-alt="judul"
        align="left"
        img-top
        style="max-width: 20rem"
        class="card-shadow card-radius"
    >
        <b-card-footer
            class="border-0 bg-transparent d-flex justify-content-between p-0 m-0 align-items-baseline"
        >
            <b-card-text class="m-0 text-primary">IDR {{ converter(harga) }} </b-card-text>
            <b-form-rating v-model="score" variant="warning" inline no-border readonly></b-form-rating>
        </b-card-footer>
    </b-card>
</template>

<script>
export default {
    name: "ProductCard",
    data() {
        return {
            judul: 'Virtual Tour Candi Prambanan',
            lokasi: 'Sleman, Yogyakarta',
            url_gambar: 'https://digitiket.id/public/img/1104.jpg',
            harga: 35000,
            score: 3.9
        };
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
};
</script>
<style scoped>
.card-radius{
    border-radius: 18px;
}
.card-title{
    overflow: hidden;
    text-overflow: ellipsis !important;
    white-space: nowrap;
}
.card-img, .card-img-top{
    border-top-left-radius: 18px !important;
    border-top-right-radius: 18px !important;
    object-fit: cover;
}
.card-shadow{
    box-shadow: 0px 4px 2px rgba(0,0,0,.1);
}
.form-control:focus{
    box-shadow: none;
}
</style>