<template>
    <b-container fluid class="p=0">
        <div class="mini-navigation">
                <b-row>
                    <b-col cols="3" class="mini-nav my-auto active">
                        <p class="font-weight-bold m-0">
                            Tiket
                        </p>
                    </b-col>
                    <b-col cols="3" class="mini-nav my-auto">
                        <p class="font-weight-bold m-0">
                            Informasi
                        </p>
                    </b-col>
                    <b-col cols="3" class="mini-nav my-auto">
                        <p class="font-weight-bold m-0">
                            Lokasi
                        </p>
                    </b-col>
                    <b-col cols="3" class="mini-nav my-auto">
                        <p class="font-weight-bold m-0">
                            Ulasan
                        </p>
                    </b-col>
                </b-row>
            </div>
    </b-container>
</template>

<script>
export default {
    name: "tablayout",
}
</script>

<style scoped>
    .mini-nav{
    color: #C4C4C4;
    font-weight: bold;
    padding: 16px 30px;
}

.active{
    border-bottom: 2px solid #4E2E8A;
    color: #4E2E8A;
}

.mini-navigation{
    margin-top: 40px;
}
</style>