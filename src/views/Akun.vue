<template>
  <div>
    <NavbarNotification title="Akun" class="navbaratas" />
    <div class="wrap-container" id="akun">
      <div class="pt-3 header">
        <b-container>
          <b-row no-gutters align-v="center">
            <b-col cols="2">
              <b-img-lazy
                :src="user.profil_img"
                rounded="circle"
                width="60px"
              ></b-img-lazy>
            </b-col>
            <b-col cols="10" class="pl-4 text-left h-auto">
              <h3 class="font-weight-bold">
                {{ user.nama }}
              </h3>
              <p class="m-0" style="color:grey ;">
                {{ user.email }} <br />
                {{ user.nomorhp }}
              </p>
            </b-col>
          </b-row>
          <b-row no-gutters class="my-3 font-weight-bold">
            <b-card align="center px-2 bg-white card-rounded" body-class="py-2">
              <b-row class="px-2">
                <b-img src="../assets/icons/money.svg"></b-img>
                <b-card-text class="ml-2 font-weight-bold"
                  >{{ user.poin }} poin</b-card-text
                >
              </b-row>
            </b-card>
            <b-card
              align="center ml-3 px-2 bg-white card-rounded"
              body-class="py-2"
            >
              <b-row class="px-1">
                <b-img src="../assets/icons/credit-card-payment.svg"></b-img>
                <b-card-text class="ml-2 font-weight-bold"
                  >{{ converter(user.kredit) }} kredit</b-card-text
                >
              </b-row>
            </b-card>
          </b-row>
        </b-container>
      </div>
      <div class="divider mb-4 mt-4"></div>
      <SectionAkun />
      <div class="divider mb-4 mt-4"></div>
      <SectionUmum />
      <div class="divider mb-4 mt-4"></div>

      <b-container>
        <router-link class="link" to="/">
          <div>
            <b-row class="my-auto py-1">
              <b-col cols="1" class="py-2">
                <img src="../assets/icons/keluar.svg" />
              </b-col>
              <b-col cols="10" class="text-left p-0 pl-3 my-auto">
                <h3 class=" m-0 font-weight-bold">
                  Keluar
                </h3>
              </b-col>
            </b-row>
          </div>
        </router-link>
      </b-container>

      <div style="height: 40px;"></div>
      <BottomNavbar />
    </div>
  </div>
</template>

<script>
import SectionAkun from "@/components/Akun/SectionAkun.vue";
import SectionUmum from "@/components/Akun/SectionUmum.vue";
import NavbarNotification from "@/components/NavbarNotification.vue";
import BottomNavbar from "@/components/BottomNavbar.vue";

export default {
  name: "Akun",
  components: {
    SectionAkun,
    SectionUmum,
    NavbarNotification,
    BottomNavbar,
  },
  data() {
    return {
      user: {
        nama: "Natasya Joan",
        email: "natasyajoan@gmail.com",
        nomorhp: "0812 8362 9283",
        profil_img: "https://imgur.com/sf932s.jpg",
        kredit: 15000,
        poin: 20,
      },
    };
  },
  methods: {
    converter(nominal) {
      const currency = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      });
      return currency.format(nominal).slice(3);
    },
  },
};
</script>

<style scoped>
.wrap-container {
  margin-top: 15%;
}
.link {
  color: black;
  text-decoration: none;
}

.divider {
  height: 6px;
  width: 100%;
  background-color: #e5e5e5;
}

.header {
  position: relative;
  margin-top: 40px;
}

.navbar {
  z-index: 3;
  margin: auto;
}</style
>>
