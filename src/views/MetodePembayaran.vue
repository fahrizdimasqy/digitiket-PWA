<template>
  <div id="metodePembayaran">
    <header>Metode Pembayaran</header>
    <b-container class="about">
      <b-row>
        <b-col xl="12">
          <h5>ATM / Bank Transfer</h5>
          <div>
            <Payment v-bind:provider="providers[0]" />
            <Payment v-bind:provider="providers[0]" />
            <Payment v-bind:provider="providers[0]" />
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col xl="12">
          <h5>Direct Payment</h5>
          <div>
            <Payment v-bind:provider="providers[1]" />
            <Payment v-bind:provider="providers[1]" />
          </div>
        </b-col>
      </b-row>
      <div class="position-absolute fixed-bottom">
        <OrderBottomBar/>
      </div>
    </b-container>
  </div>
</template>

<script>
import Payment from "../components/PaymentMethod";
import LogoMandiri from "../assets/img/mandiri.svg";
import LogoGopay from "../assets/img/gopay.svg";
import OrderBottomBar from "../components/OrderBottomBar"

export default {
  name: "MetodePembaran",
  components: {
    Payment,
    OrderBottomBar
  },
  data() {
    return {
      providers: [
        {
          id: 1,
          namaProvider: "Mandiri Bill",
          logo: LogoMandiri,
        },
        {
          id: 2,
          namaProvider: "Gopay",
          logo: LogoGopay,
        },
      ],
      lokasi: "bandung",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap");

#metodePembayaran {
  font-family: "Lato", sans-serif;
}

h5 {
  text-align: left;
  font-weight: 700;
  margin-bottom: 1.2em;
  font-size: 17px;
}

header {
  background-color: #4e2e8a;
  color: white;
  padding: 1.2rem 0;
  margin-bottom: 1.2rem;
}
</style>