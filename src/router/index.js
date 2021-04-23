import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/NewLogin.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Onboarding",
    component: () =>
      import(/* webpackChunkName: "start" */ "../views/Onboarding.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/promo",
    name: "Promo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "promoterkini" */ "../views/PromoTerkini.vue"
      ),
  },
  {
    path: "/detailpromo",
    name: "DetailPromo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetailPromo.vue"),
  },
  {
    path: "/metode-pembayaran",
    name: "MetodePembayaran",
    component: () => import("../views/MetodePembayaran.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Notifs.vue"),
  },
  {
    path: "/search",
    name: "SearchForm",
    component: () =>
      import(/* webpackChunkName: "search-form" */ "../views/SearchForm.vue"),
  },
  {
    path: "/masukan-ulasan",
    name: "MasukanUlasan",
    component: () =>
      import(
        /* webpackChunkName: "masukan-ulasan" */ "../views/MasukanUlasan.vue"
      ),
  },
  {
    path: "/profil/ubah-kata-sandi",
    name: "UbahKataSandi",
    component: () =>
      import(
        /* webpackChunkName: "masukan-ulasan" */ "../views/UbahKataSandi.vue"
      ),
  },
  {
    path: "/Akun",
    name: "Akun",
    component: () =>
      import(/* webpackChunkName: "masukan-ulasan" */ "../views/Akun.vue"),
  },
  {
    path: "/ulasan",
    name: "Ulasan",
    component: () =>
      import(/* webpackChunkName: "ulasan" */ "../views/Ulasan.vue"),
  },
  {
    path: "/konfirmasi-pembelian",
    name: "KonfirmasiPembelian",
    component: () =>
      import(
        /* webpackChunkName: "ulasan" */ "../views/KonfirmasiPembelian.vue"
      ),
  },
  {
    path: "/pilih-tiket",
    name: "HalamanPilihTiket",
    component: () =>
      import(/* webpackChunkName: "ulasan" */ "../views/HalamanPilihTiket.vue"),
  },
  {
    path: "/daftar",
    name: "Daftar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Daftar.vue"),
  },
  {
    path: "/tempat-wisata",
    name: "TempatWisata",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TempatWisata.vue"),
  },
  {
    path: "/lokasi",
    name: "Lokasi",
    component: () =>
      import(/* webpackChunkName: "lokasi" */ "../views/Lokasi.vue"),
  },
  {
    path: "/profil/ubah-profil",
    name: "UbahProfil",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UbahProfil.vue"),
  },
  {
    path: "/pilih-tanggal",
    name: "PilihTanggal",
    component: () =>
      import(/* webpackChunkName: "ulasan" */ "../views/PilihTanggal.vue"),
  },
  {
    path: "/attraction",
    name: "Attraction",
    component: () =>
      import(
        /* webpackChunkName: "masukan-ulasan" */ "../views/Attraction.vue"
      ),
  },
  {
    path: "/event",
    name: "event",
    component: () =>
      import(/* webpackChunkName: "ulasan" */ "../views/Event.vue"),
  },
  {
    path: "/virtual-tour",
    name: "VirtualTour",
    component: () =>
      import(/* webpackChunkName: "ulasan" */ "../views/VirtualTour.vue"),
  },
  {
    path: "/tiket-datang",
    name: "TiketAkanDatang",
    component: () =>
      import(/* webpackChunkName: "ulasan" */ "../views/TiketDatang.vue"),
  },
  {
    path: "/tiket-selesai",
    name: "TiketSelesai",
    component: () =>
      import(/* webpackChunkName: "ulasan" */ "../views/TiketSelesai.vue"),
  },
  {
    path: "/tour/recommend",
    name: "DisarankanUntukAnda",
    component: () =>
      import(/* webpackChunkName: "ulasan" */ "../views/Disarankan.vue"),
  },
  {
    path: "/tour/popular",
    name: "WisataPopuler",
    component: () =>
      import(/* webpackChunkName: "ulasan" */ "../views/WisataPopuler.vue"),
  },
  {
    path: "/tour/new",
    name: "WisataTerbaru",
    component: () =>
      import(/* webpackChunkName: "ulasan" */ "../views/WisataTerbaru.vue"),
  },
  {
    path: "/tour",
    name: "Tour",
    component: () =>
      import(/* webpackChunkName: "ulasan" */ "../views/Tour.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
