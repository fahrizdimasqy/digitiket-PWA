<template>
  <div class="bv-example-row">
    <b-row class="kategori">
      <b-col class="kategori-item">
        <router-link to="/attraction">
          <b-link href="/attraction" class="link">
            <b-container fluid class="logo-container">
              <b-img
                class="logo"
                src="https://files.catbox.moe/996tu9.svg"
                fluid
                alt="Lokasi"
              ></b-img>
            </b-container>
            <div class="logo-title">
              <b-card-text class="text-dark font-weight-bold"
                >Attraction</b-card-text
              >
            </div>
          </b-link>
        </router-link>
      </b-col>
      <b-col class="kategori-item">
        <router-link to="/event">
          <b-link href="/event" class="link">
            <b-container fluid class="logo-container">
              <b-img
                class="logo"
                src="https://files.catbox.moe/e2gs1m.svg"
                fluid
                alt="Lokasi"
              ></b-img>
            </b-container>
            <div class="logo-title">
              <b-card-text class="text-dark font-weight-bold">Event</b-card-text>
            </div>
          </b-link>
        </router-link>
      </b-col>
      <b-col class="kategori-item">
        <router-link to="/tour">
          <b-link href="/tour" class="link">
            <b-container fluid class="logo-container">
              <b-img
                src="https://files.catbox.moe/2s2kxx.svg"
                fluid
                alt="Lokasi"
              ></b-img>
            </b-container>
            <div class="logo-title">
              <b-card-text class="text-dark font-weight-bold">Tour</b-card-text>
            </div>
          </b-link>
        </router-link>
      </b-col>
      <b-col class="kategori-item">
        <router-link to="/virtual-tour">
          <b-link href="/virtual-tour" class="link">
            <b-container fluid class="logo-container">
              <b-img
                src="https://files.catbox.moe/ouini8.svg"
                fluid
                alt="Lokasi"
              ></b-img>
            </b-container>
            <div class="logo-title">
              <b-card-text class="text-dark font-weight-bold"
                >Virtual Tour</b-card-text
              >
            </div>
          </b-link>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Kategori",
};
</script>

<style scoped>
.link {
  text-decoration: none;
}

.kategori-item {
  padding: 0;
}

.logo {
  height: 24px;
  width: 24px;
  margin: auto;
  text-align: center;
}

.bv-example-row {
  padding-top: 10px;
  height: 90px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 90%;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #4e2e8a;
  border-radius: 10px;
  padding: 0;
  text-align: center;
}

.logo-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}
</style>
