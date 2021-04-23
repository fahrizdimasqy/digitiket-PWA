<template>
    <div id="section-umum">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <h3 class="font-weight-bold text-left">
                        Umum
                    </h3>
                </b-col>
            </b-row>

            <router-link class="link" to="/">
                <div class="wrapped">
                    <b-row class="my-auto py-1">
                        <b-col cols="1" class="py-2">
                            <img src="../../assets/icons/syarat-ketentuan.svg">
                        </b-col>
                        <b-col cols="10" class="text-left p-0 pl-3 my-auto">
                            <h3 class="m-0 font-weight-bold">
                                Syarat dan ketentuan
                            </h3>
                        </b-col>
                        <b-col cols="1" class="p-0 py-2">
                            <img src="../../assets/icons/right-arrow.svg">
                        </b-col>
                    </b-row>
                </div>
            </router-link>

            <router-link class="link" to="/">
                <div class="wrapped">
                    <b-row class="my-auto py-1">
                        <b-col cols="1" class="py-2">
                            <img src="../../assets/icons/kebijakan-privasi.svg">
                        </b-col>
                        <b-col cols="10" class="text-left p-0 pl-3 my-auto">
                            <h3 class=" m-0 font-weight-bold">
                                Kebijakan Privasi
                            </h3>
                        </b-col>
                        <b-col cols="1" class="p-0 py-2">
                            <img src="../../assets/icons/right-arrow.svg">
                        </b-col>
                    </b-row>
                </div>
            </router-link>

            <router-link class="link" to="/">
                <div class="wrapped">
                    <b-row class="my-auto py-1">
                        <b-col cols="1" class="py-2">
                            <img src="../../assets/icons/pusat-bantuan.svg">
                        </b-col>
                        <b-col cols="10" class="text-left p-0 pl-3 my-auto">
                            <h3 class=" m-0 font-weight-bold">
                                Pusat Bantuan
                            </h3>
                        </b-col>
                        <b-col cols="1" class="p-0 py-2">
                            <img src="../../assets/icons/right-arrow.svg">
                        </b-col>
                    </b-row>
                </div>
            </router-link>

            <router-link class="link" to="/">
                <div class="wrapped">
                    <b-row class="my-auto py-1">
                        <b-col cols="1" class="py-2">
                            <img src="../../assets/icons/rating-aplikasi.svg">
                        </b-col>
                        <b-col cols="10" class="text-left p-0 pl-3 my-auto">
                            <h3 class=" m-0 font-weight-bold">
                                Beri Rating Aplikasi
                            </h3>
                        </b-col>
                        <b-col cols="1" class="p-0 py-2">
                            <img src="../../assets/icons/right-arrow.svg">
                        </b-col>
                    </b-row>
                </div>
            </router-link>
        </b-container>
    </div>
</template>

<script>
export default {
    name:'SectionUmum',

}
</script>

<style scoped>
#section-umum{
    color: black;
}
.wrapped{
    border-bottom: 0.5px solid rgba(65, 65, 65, 0.164);
}

.link{
    color: black;
    text-decoration: none;
}
</style>
