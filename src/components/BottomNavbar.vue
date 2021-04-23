<template>
  <div class="w-100 bv-example-row">
    <b-container>
      <b-row class="bottom-bar">
        <b-col>
          <b-link to="/home" class="link">
            <b-img
              v-if="this.$router.currentRoute.path === '/'"
              src="https://files.catbox.moe/2cbpqs.png"
              fluid
              alt="Beranda-active"
            ></b-img>
            <b-img
              v-else
              src="https://files.catbox.moe/rxic9y.png"
              fluid
              alt="Beranda"
            ></b-img>
            <b-card-text
              class="text-navbar"
              :class="this.$router.currentRoute.path === '/' ? 'selected' : ''"
              >Beranda</b-card-text
            >
          </b-link>
        </b-col>
        <b-col>
          <b-link to="/lokasi" class="link">
            <b-img
              v-if="this.$router.currentRoute.path === '/'"
              src="https://files.catbox.moe/l8ece6.png"
              fluid
              alt="Beranda-active"
            ></b-img>
            <b-img
              v-else
              src="https://files.catbox.moe/bx3f59.png"
              fluid
              alt="Beranda"
            ></b-img>
            <b-card-text
              class="text-navbar"
              :class="this.$router.currentRoute.path === '/' ? 'selected' : ''"
              >Lokasi</b-card-text
            >
          </b-link>
        </b-col>
        <b-col>
          <router-link to="/tiket-datang">
            <b-link href="/tiket-datang" class="link">
              <b-img
                v-if="this.$router.currentRoute.path === '#'"
                src="https://files.catbox.moe/ufk6xc.png"
                fluid
                alt="Tiket-active"
              ></b-img>
              <b-img
                v-else
                src="https://files.catbox.moe/pc5y3b.png"
                fluid
                alt="Tiket"
              ></b-img>
              <b-card-text
                class="text-navbar"
                :class="this.$router.currentRoute.path === '#' ? 'selected' : ''"
                >Tiket</b-card-text
              >
            </b-link>
          </router-link>
        </b-col>
        <b-col>
          <b-link to="/akun" class="link">
            <b-img
              v-if="this.$router.currentRoute.path === '#'"
              src="https://files.catbox.moe/rfklzi.png"
              fluid
              alt="Akun-active"
            ></b-img>
            <b-img
              v-else
              src="https://files.catbox.moe/h3vk0p.png"
              fluid
              alt="Akun"
            ></b-img>
            <b-card-text
              class="text-navbar"
              :class="this.$router.currentRoute.path === '#' ? 'selected' : ''"
              >Akun</b-card-text
            >
          </b-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "BottomNavbar",
};
</script>

<style scoped>
.link {
  text-decoration: none;
}

.text-navbar {
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.5);
}

.selected {
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #4e2e8a;
}

.bv-example-row {
  padding-top: 12px;
  height: 60px;
  box-shadow: 2px -5px 18px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  background-color: white;
}
</style>
