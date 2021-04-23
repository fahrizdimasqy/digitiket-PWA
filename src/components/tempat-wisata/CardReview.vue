<template>
    <b-card class="mx-3 card-radius shadow w-75">
        <b-row class="text-left">
            <b-col class="d-flex align-items-center mb-3">
                <img src="https://imgur.com/32sa2.jpg" width="40px" height="40px" class="mr-3 rounded-circle" alt="profile-pict">
                <h5 class="m-0 text-primary font-weight-bold">{{ nama }}</h5>
                <b-form-rating
                    variant="warning"
                    class="mb-1"
                    :value="review.rating"
                    inline
                    no-border
                    size="sm"
                    readonly
                ></b-form-rating>
            </b-col>
        </b-row>
        <p class="text-left mb-0">{{ komentar }}</p>
    </b-card>
</template>

<script>
export default {
    props:[
    'nama', 'komentar'
    ],
    data() {
        return {
            review: {
                // nama: "Nur Ali",
                rating: 4,
                // komentar: "Tempatnya bagus, luas dan bersih",
            },
        };
    },
};
</script>

<style scoped>
.card-radius{
    border-radius: 18px;
}
</style>