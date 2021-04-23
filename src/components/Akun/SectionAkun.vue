<template>
  <div id="section-akun">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h3 class="font-weight-bold text-left">
            Akun
          </h3>
        </b-col>
      </b-row>

      <router-link class="link" to="/profil/ubah-profil">
        <div class="wrapped">
          <b-row class="my-auto py-1">
            <b-col cols="1" class="py-2">
              <img src="../../assets/icons/user.svg" />
            </b-col>
            <b-col cols="10" class="text-left p-0 pl-3 my-auto">
              <h3 class="m-0 font-weight-bold">
                Ubah Profil
              </h3>
            </b-col>
            <b-col cols="1" class="p-0 py-2">
              <img src="../../assets/icons/right-arrow.svg" />
            </b-col>
          </b-row>
        </div>
      </router-link>

      <router-link class="link" to="/">
        <div class="wrapped">
          <b-row class="my-auto py-1">
            <b-col cols="1" class="py-2">
              <img src="../../assets/icons/undang-teman.svg" />
            </b-col>
            <b-col cols="10" class="text-left p-0 pl-3 my-auto">
              <h3 class=" m-0 font-weight-bold">
                Undang teman
              </h3>
            </b-col>
            <b-col cols="1" class="p-0 py-2">
              <img src="../../assets/icons/right-arrow.svg" />
            </b-col>
          </b-row>
        </div>
      </router-link>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SectionAkun",
};
</script>

<style scoped>
#section-akun {
  color: black;
}
.wrapped {
  border-bottom: 0.5px solid rgba(65, 65, 65, 0.164);
}

.link {
  color: black;
  text-decoration: none;
}
</style>
