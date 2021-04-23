<template>
    <div class="detail-promo">
        <Navbar title="Promo Ekstra" class="navbar-atas"/>
        <!-- header dan discount label -->
        <b-container fluid class="p-0" style="margin-top:35px">
            <img src="../assets/promo-2.png" width="100%">
            <p class="disc-label mx-auto">
                Diskon 10.000 untuk pembelian produk apa saja
            </p>
        </b-container>
        <!-- description -->
        <b-container >
            <b-row class="m-0">
                <b-col cols="12" class="p-0">
                    <h5 class="font-weight-bold float-left">
                    Kode promo
                    </h5>
                </b-col>
            </b-row>
        
            <b-row class="mb-4">
                <b-col cols="12">
                    <input id="code-cupon" class="cupon float-left font-weight-bold" value="MOBILE10" readonly>
                    <button v-on:click="copyclipboard" class="btn-copy float-right border-0">
                        <img src="../assets/copy.png">
                    </button> 
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12">
                    <h5 class="font-weight-bold float-left">
                        Syarat dan Ketentuan
                    </h5>
                </b-col>
                <b-col cols="12">
                    <p class="text-left" style="font-size: 14px; line-height:2em">
                        Potongan dapat langsung diperoleh senilai 10.000 <br>
                        Minimal total pembelian 90.000 <br>
                        Hanya dapat digunakan 1 kali <br>
                        <b>Promo dapat berubah sewaktu-waktu tanpa pemberitahuan,
                        segera lakukan transaksi. </b>
                    </p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name:'DetailPromo',
    components:{
        Navbar
    },
    methods: {
        // Function untuk copy kode promo ke clipboard
        copyclipboard: function () {
            var copyText = document.getElementById("code-cupon");
            /* Select the text field */
            copyText.select();
            /* Copy the text inside the text field */
            document.execCommand("copy");
            
        }
    }
}
</script>

<style scoped>

.disc-label{
    background-color: #4E2E8A;
    color: white;
    font-size: 12px;
    padding: 5px 0px;
}

.desc{
    text-align: start;
}

.cupon{
    color: #F05E86;
    border: none;
}

.cupon:focus{
    outline: none;
}

.btn-copy{
    background-color: transparent;
    padding: 5px 15px;
    border-radius: 5px;
}

.btn-copy:hover{
    background-color: rgb(233, 233, 233);
}
.navbar-atas{
    position: fixed;
    z-index: 3;
}
</style>
