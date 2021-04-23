<template>
  <div class="card">
      <b-row class="shadow-lg p-3 overflow-hidden m-0 align-items-center">
          <b-col class="font-sm text-left">
                <div>{{ keterangan }}</div>
                <div class="text-primary font-weight-bold"
                style="color: #4E2E8A !important ;">
                    IDR {{ converter(total) }}
                </div>
          </b-col>
          <b-col class="text-right">
                <b-button variant="primary" class="button">
                  {{ btnName }}
                </b-button>
          </b-col>
      </b-row>
  </div>
</template>

<script>
export default {
    props: {
        btnName: {
            type: String,
            required: true,
            default: "Konfirmasi"
        },
        keterangan: {
            type: String,
            required: true,
            default: "Total Harga"
        },
        total: {
            type: Number,
            required: true,
            default: 0
        },
    },
    methods:{
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
.font-sm *{
    font-size: 14px !important;
}

.card{
    background-color: white !important;
}

.button{
    background-color: #4E2E8A  !important;
    color: white;
    border: none;
}

</style>