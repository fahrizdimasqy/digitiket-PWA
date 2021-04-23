<template>
  <div>
    <b-container>
      <b-img
        center
        src="../assets/logo-digitiket.png"
        alt="Center image"
        class="logo-digitiket"
      ></b-img>
      <div class="purple-circle"></div>
      <h5 class="text-login mt-5 mb-4 ml-3">Selamat datang kembali !</h5>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" class="l-label">
          <label for="email" class="ml-3">Email</label>
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" class="l-label">
          <label for="password" class="ml-3">Katasandi</label>
          <b-form-input
            type="password"
            id="password"
            v-model="form.password"
            placeholder="Katasandi"
            required
          ></b-form-input>
          <b-img
            src="../assets/icons/eye-solid.svg"
            alt="logo google"
            class="eye"
          ></b-img>
        </b-form-group>
        <a href="#" class="text-purple text-right">Lupa kata sandi?</a>
        <div class="text-center mt-4">
          <router-link to="/home">
            <b-button type="submit" variant="primary">Masuk</b-button>
          </router-link>
          <b-row no-gutters class="mt-2">
            <b-col cols><hr /> </b-col>
            <b-col cols> <p class="atau mt-2">Atau</p> </b-col>
            <b-col cols> <hr /></b-col>
          </b-row>

          <b-img
            src="../assets/google.png"
            alt="logo google"
            class="logo-google"
          ></b-img>
          <b-button type="reset" variant="primary" class="lw-google"
            >Masuk dengan Google</b-button
          >
          <div class="d-flex justify-content-center mt-2">
            <p class="bold mt-2">Belum punya akun?</p>
            <router-link to="/daftar">
              <a href="" class="text-purple daftar"> Daftar </a>
            </router-link>
          </div>
        </div>
      </b-form>
      <div class="pink-circle"></div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "LoginVuew",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
     
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.form.food = null;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.logo-digitiket {
  margin-top: 104px;
}
h5 {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #4e2e8a;
  text-align: left;
}
.l-label {
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: #4e2e8a;
  text-align: left;
}
.form-control {
  border: none;
  border-bottom: 1px solid #ced4da;
  width: 95%;
  margin: 0 0 0 2.5%;
}

.form-control:hover {
  border: none;
}
.text-purple {
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #4e2e8a;
}
.text-purple.daftar {
  display: block;
  position: relative;
  top: 7px;
  left: 2px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
}

.purple-circle {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 299px;
  top: 50px;
  /* purple */
  border-radius: 50%;
  background: #4e2e8a;
  transform: translateX(40px);
  /* transform: rotate(-90deg); */
}
.pink-circle {
  position: absolute;
  width: 100px;
  height: 100px;
  left: -25px;
  top: 663px;

  /* pink */

  background: #f05e86;
  transform: rotate(-90deg);
  border-radius: 50%;
}

.lw-google {
  width: 60%;
}
.logo-google {
  transform: translateX(25px);
}
.eye {
  cursor: pointer;
  position: absolute;
  top: 320px;
  right: 0;
  padding-top: 1rem;
  padding-right: 1rem;
}
.atau {
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  /* identical to box height */
  color: #000000;
}
.bold {
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
}
.ml-3 {
  margin-left: 1.4rem !important;
}
</style>
