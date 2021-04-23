<template>
    <div class="px-4">
        <b-row class="text-left">
            <b-col class="d-flex align-items-center mb-3">
                <img
                    src="https://imgur.com/32sa2.jpg"
                    width="40px"
                    height="40px"
                    class="mr-3 rounded-circle"
                    alt="profile-pict"
                />
                <h5 class="m-0 text-primary font-weight-bold">
                    {{ review.nama }}
                </h5>
            </b-col>
            <b-col class="text-right">
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
        <small><p class="text-left text-secondary">{{ printTime(review.waktu) }}</p></small>
        <p class="text-left mb-0">{{ review.komentar }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            review: {
                nama: 'Nur Ali',
                rating: 3,
                komentar: "Bagus banget, adem banget tempatnya dan bersih juga",
                waktu: 1611813006000
            }
        }
    },
    methods:{
        printTime(time){
            const options = {day:'numeric', month:'long', year: 'numeric', hour:'2-digit', minute:'numeric'};
            return new Date(time).toLocaleString('ID-id', options).split('.').join(':')
        }
    }
};
</script>

<style>
</style>