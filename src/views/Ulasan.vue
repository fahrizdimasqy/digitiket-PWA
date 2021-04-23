<template>
  <div>
    <Navbar title="Ulasan Pengunjung" />
    <div class="ulasan">
      <b-container>
        <b-row no-gutters class>
          <b-col cols>
            <p class="text-header mt-2">Dari total 2 ulasan</p>
            <p class="text-muted"><span>4.0</span> / 5.0</p>
          </b-col>
          <b-col cols>
            <div class="rating">
              <b-form-rating
                v-model="score"
                variant="warning"
                inline
                no-border
                readonly
              ></b-form-rating>
              <b-form-rating
                v-model="score"
                variant="warning"
                inline
                no-border
                readonly
              ></b-form-rating>
              <b-form-rating
                v-model="score"
                variant="warning"
                inline
                no-border
                readonly
              ></b-form-rating>
              <b-form-rating
                v-model="score"
                variant="warning"
                inline
                no-border
                readonly
              ></b-form-rating>
            </div>
          </b-col>
          <b-col cols>
            <div class="bar">
              <b-progress :max="max" class="mb-3">
                <b-progress-bar
                  variant="primary"
                  :value="values[0]"
                ></b-progress-bar>
              </b-progress>
              <b-progress :max="max" class="mb-3">
                <b-progress-bar
                  variant="primary"
                  :value="values[0]"
                ></b-progress-bar>
              </b-progress>
              <b-progress :max="max" class="mb-3">
                <b-progress-bar
                  variant="primary"
                  :value="values[0]"
                ></b-progress-bar>
              </b-progress>
              <b-progress :max="max" class="mb-3">
                <b-progress-bar
                  variant="primary"
                  :value="values[0]"
                ></b-progress-bar>
              </b-progress>
            </div>
          </b-col>
          <b-col cols>
            <div class="nilai-ulasan">
              <p class="mt-2">1</p>
            </div>
          </b-col>
        </b-row>
        <div class="d-flex">
          <b-img
            src="../assets/icons/eye-solid.svg"
            alt="logo google"
            class="eye"
          ></b-img>
          <p class="mt-3 ml-2">1.827 kali oleh (267 pengguna)</p>
          <hr />
        </div>
        <div class="ulasan-pengguna">
          <b-row no-gutters>
            <b-col cols>
              <div class="user d-flex">
                <b-img src="../assets/Ellipse.png" alt="logo google"></b-img>
                <h5 class="name ml-3 mt-2">Nur Ali</h5>
              </div>
              <p class="date text-muted mt-3">19 Juni 2019 10:06</p>
              <h5 class="komentar">Tempatnya bagus, luas dan bersih</h5>
            </b-col>
            <b-col cols>
              <b-form-rating
                v-model="score"
                variant="warning"
                inline
                no-border
                readonly
              ></b-form-rating>
            </b-col>
          </b-row>
          <hr />
          <b-row no-gutters>
            <b-col cols>
              <div class="user d-flex">
                <b-img src="../assets/Ellipse.png" alt="logo google"></b-img>
                <h5 class="name ml-3 mt-2">Nur Ali</h5>
              </div>
              <p class="date text-muted mt-3">19 Juni 2019 10:06</p>
              <h5 class="komentar">Tempatnya bagus, luas dan bersih</h5>
            </b-col>
            <b-col cols>
              <b-form-rating
                v-model="score"
                variant="warning"
                inline
                no-border
                readonly
              ></b-form-rating>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Ulasan",
  data() {
    return {
      text: "",
      score: 1.0,
      values: [15, 30, 20],
      max: 100,
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped>
img {
  object-fit: none !important;
}
.ulasan {
  margin-top: 5%;
}
.text-header {
  white-space: nowrap;
}
span {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  text-align: center;
  /* purple */
  color: #4e2e8a;
}
.progress {
  margin-bottom: 19px !important;
}
.bar {
  margin-top: 0.8rem;
}
.name {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #000000;
}
.date {
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  float: left;
  /* left: -2rem; */
}
.komentar {
  float: left;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
}
</style>
