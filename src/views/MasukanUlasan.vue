<template>
  <div>
    <NavbarNotification title="Ulasan Pengunjung" />
    <div class="mt-5">
      <b-container>
        <h5 class="mt-5">Virtual Tour Candi Prambanan</h5>
        <b-form-rating
          v-model="score"
          variant="warning"
          inline
          no-border
          readonly
        ></b-form-rating>
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <div class="d-flex justify-content-end mt-3">
          <router-link to="/ulasan">
            <b-button type="submit" variant="primary">kirim</b-button>
          </router-link>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import NavbarNotification from "@/components/NavbarNotification";

export default {
  name: "MasukanUlasan",
  data() {
    return {
      text: "",
      score: 3.9,
    };
  },
  components: {
    NavbarNotification,
  },
};
</script>

<style scoped>
.container h5 {
  margin-top: 25% !important;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #000000;
  text-align: left;
}
.b-rating {
  margin-top: 24px !important;
  margin-bottom: 24px !important;
}
</style>
