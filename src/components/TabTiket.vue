<template>
    <b-container fluid class="p-0">
        <div class="mini-navigation">
                <b-row>
                    <b-col cols="6" class="mini-nav my-auto active">
                        <router-link to="/tiket-datang">
                            <p class="font-weight-bold m-0">
                                Akan datang
                            </p>
                        </router-link>
                    </b-col>
                    <b-col cols="6" class="mini-nav my-auto">
                        <router-link to="/tiket-selesai">
                            <p class="font-weight-bold m-0">
                                Selesai
                            </p>
                        </router-link>
                    </b-col>
                </b-row>
            </div>
    </b-container>

</template>

<script>
export default {
    name: "TabTiket",
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
    margin-top: 60px;
    background-color: white;
}
</style>