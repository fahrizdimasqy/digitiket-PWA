<template>
  <div class="overflow-hidden">
    <b-navbar fixed="top" variant="primary" class="py-3">
      <b-row no-gutters class="w-100 py-2" align-h="between" align-v="center">
        <b-navbar-brand>
          <b-img alt="logo" src="../assets/icons/logo-white.svg" width="120%">
          </b-img>
        </b-navbar-brand>
        <b-nav>
          <b-nav-item to="/search/"
            ><b-img
              alt="logo"
              sizes="sm"
              src="../assets/icons/search-white.svg"
            >
            </b-img
          ></b-nav-item>
          <b-nav-item to="/notifications/"
            ><b-img
              alt="logo"
              sizes="sm"
              :src="isNotif ? notification.dotted : notification.none"
            ></b-img
          ></b-nav-item>
        </b-nav>
      </b-row>
    </b-navbar>
    <section class="py-3 header">
      <b-container>
        <b-row no-gutters align-v="center">
          <b-img-lazy
            :src="user.profil_img"
            rounded="circle"
            width="32px"
          ></b-img-lazy>
          <h3 class="mb-0 ml-3 font-weight-bold text-white">
            Hi, {{ user.nama }}!
          </h3>
          <div></div>
        </b-row>
        <b-row no-gutters class="my-3 font-weight-bold">
          <b-card align="center px-2 bg-white card-rounded" body-class="py-2">
            <b-row>
              <b-img src="../assets/icons/money.svg"></b-img>
              <b-card-text class="ml-2">{{ user.poin }} poin</b-card-text>
            </b-row>
          </b-card>
          <b-card
            align="center ml-3 px-2 bg-white card-rounded"
            body-class="py-2"
          >
            <b-row>
              <b-img src="../assets/icons/credit-card-payment.svg"></b-img>
              <b-card-text class="ml-2"
                >{{ converter(user.kredit) }} kredit</b-card-text
              >
            </b-row>
          </b-card>
        </b-row>
        <h2 class="text-left text-white mb-3 my-4 font-weight-bold">
          Kategori
        </h2>
        <Kategori class="w-100 px-4" />
      </b-container>
    </section>

    <section class="pb-5 mt-2 bg-white">
      <b-container>
        <b-row no-gutters align-v="baseline" align-h="between" class="mb-3">
          <h2 class="font-weight-bold">Promo Terkini</h2>
          <b-link to="/promo/">Lihat Semua</b-link>
        </b-row>
        <VueSlickCarousel v-bind="carousel">
          <div v-for="i in 5" :key="i">
            <router-link to="/detailpromo">
              <img src="../assets/banner.png" class="card-rounded mr-2 banner" />
            </router-link>
          </div>
        </VueSlickCarousel>
      </b-container>
    </section>

    <section
      v-for="wisata in tourType"
      :key="wisata.type"
      class="pb-5 mt-2 bg-white"
    >
      <b-container>
        <b-row no-gutters align-v="baseline" align-h="between" class="mb-3">
          <h2 class="font-weight-bold">{{ wisata.type }}</h2>
          <router-link :to="wisata.path">Lihat Semua</router-link>
        </b-row>
        <VueSlickCarousel v-bind="carousel" class="w-100">
          <ProductCard v-for="i in 20" :key="i" class="mr-5" />
        </VueSlickCarousel>
      </b-container>
    </section>
    <BottomNavbar />
  </div>
</template>

<script>
import Kategori from "../components/Kategori.vue";
import ProductCard from "../components/ProductCard.vue";
import NotifOn from "../assets/icons/notification-dotted.svg";
import NotifOff from "../assets/icons/notification.svg";
import BottomNavbar from "../components/BottomNavbar";
export default {
  components: { Kategori, ProductCard, BottomNavbar },
  name: "Home",
  data() {
    return {
      isNotif: true,
      notification: {
        dotted: NotifOn,
        none: NotifOff,
      },
      //Settings untuk binding carousel property
      carousel: {
        arrows: false,
        infinite: false,
        focusOnSelect: true,
        variableWidth: true,
        speed: 500,
        slidesToShow: 1,
        swipe: false,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrow: false,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              arrow: false,
              swipe: true,
              swipeToSlide: true,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              swipe: true,
              swipeToSlide: true,
              arrow: false,
              slidesToShow: 1,
            },
          },
        ],
      },
      //
      user: {
        nama: "Natasya Joan",
        profil_img: "https://imgur.com/sf932s.jpg",
        kredit: 15000,
        poin: 20,
      },
      tourType: [
        {
          type: "Disarankan untuk anda",
          path: "/tour/recommend",
        },
        {
          type: "Wisata Populer",
          path: "/tour/popular",
        },
        {
          type: "Wisata Terbaru",
          path: "/tour/new",
        },
      ],
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
.header {
  position: relative;
  background-color: white;
  margin-top: 74px;
}
.header * {
  position: relative;
}
.header::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 20px;
  left: 0;
  right: 0;
  z-index: 0;
  background: linear-gradient(165.23deg, #4e2e8a 30.28%, #f05e86 121.66%);
  border-radius: 0px 0px 25% 25%;
}
.slick-slide {
  margin-right: 5rem !important;
}
@media (max-width:360px) {
  .banner {
    width:290px;
  }
}
@media (max-width:280px) {
  .banner {
    width:210px;
  }
}
</style>
