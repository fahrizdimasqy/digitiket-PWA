<template>
    <b-container>
        <div class="d-flex">
            <b-col cols="4" class="p-0 d-flex align-items-center flex-column">
                <p class="text-left">Dari total {{ totalUlasan }} ulasan</p>
                <div class="d-flex align-items-baseline">
                    <span class="font-weight-bolder text-primary"
                        ><h2>{{ totalRating.toFixed(1) }}</h2></span
                    >
                    <span class="text-secondary"><h4>/ 5.0</h4></span>
                </div>
            </b-col>
            <b-col cols="8" class="p-0 ml-2">
                <div class="d-flex align-items-center" v-for="i in 5" :key="i">
                    <b-col class="p-0">
                        <b-rating
                            :value="5 + 1 - i"
                            variant="warning"
                            inline
                            no-border
                            readonly
                            size="sm"
                            class="p-0 rating-sm mb-2"
                        ></b-rating>
                    </b-col>
                    <b-col cols="8" class="px-3 d-flex align-items-baseline">
                        <b-progress
                            variant="primary"
                            height="0.5rem"
                            :max="totalUlasan"
                            :value="rating.score[6 - i - 1]"
                            class="w-75"
                        ></b-progress>
                        <label class="ml-3">{{
                            rating.score[6 - i - 1]
                        }}</label>
                    </b-col>
                </div>
            </b-col>
        </div>
        <div class="d-flex justify-content-start align-items-baseline mt-4">
            <span><b-img src="@/assets/icons/eye-solid.svg"></b-img></span>
            <p class="ml-3 m-0 text-secondary">{{ dilihat }} kali oleh ({{ pengguna }} pengguna)</p>
        </div>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            totalUlasan: 2,
            totalRating: 4,
            rating: {
                score: [1, 0, 0, 0, 1],
            },
            dilihat: 1827,
            pengguna: 267
        };
    },
};
</script>

<style scoped>
.rating-sm {
    height: fit-content;
    width: fit-content;
}
</style>
//untuk mengubah padding icon rating
//<style lang="scss">
// @media (max-width: 580px) {
//     .b-rating .b-rating-star,
//     .b-rating .b-rating-value {
//         padding: 0.05rem !important;
//     }
// }
// </style>