<template>
  <div>
    <NavbarSimpan title="Ubah Kata Sandi" />
    <div id="ubahkatasandi">
      <b-container fluid style="margin-top: 60px;">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-row class="px-3">
            <b-col cols="11" class="p-0">
              <b-form>
                <b-form-group
                  class="label"
                  id="sandilama"
                  label="Kata Sandi Lama"
                  label-for="katasandilama"
                >
                  <b-form-input
                    class="p-0 form-input"
                    id="katasandilama"
                    type="password"
                    v-model="form.oldpassword"
                    placeholder="Kata Sandi Lama"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-form>
            </b-col>
            <b-col cols="1" class="p-0 my-auto">
              <img
                src="../assets/icons/eye-solid.svg"
                v-on:click="togglepassold"
                id="togglePassword"
              />
            </b-col>

            <b-col cols="11" class="p-0">
              <b-form>
                <b-form-group
                  class="label"
                  id="sandibaru"
                  label="Kata Sandi Baru"
                  label-for="katasandibaru"
                >
                  <b-form-input
                    class="p-0 form-input"
                    id="katasandibaru"
                    type="password"
                    v-model="form.newpassword"
                    placeholder="Kata Sandi Baru"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-form>
            </b-col>
            <b-col cols="1" class="p-0 my-auto">
              <img
                src="../assets/icons/eye-solid.svg"
                v-on:click="togglepassnew"
                id="togglePassword"
              />
            </b-col>

            <b-col cols="11" class="p-0">
              <b-form>
                <b-form-group
                  class="label"
                  id="konfirmsandibaru"
                  label="Kata Sandi Baru"
                  label-for="konfirmasisandibaru"
                >
                  <b-form-input
                    class="p-0 form-input"
                    id="konfirmasisandibaru"
                    type="password"
                    v-model="form.confirmnewpassword"
                    placeholder="Kata Sandi Baru"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-form>
            </b-col>
            <b-col cols="1" class="p-0 my-auto">
              <img
                src="../assets/icons/eye-solid.svg"
                v-on:click="togglepassconfirmnew"
                id="togglePassword"
              />
            </b-col>
          </b-row>
        </b-form>
      </b-container>
    </div>
  </div>
</template>

<script>
import NavbarSimpan from "@/components/NavbarSimpan.vue";

export default {
  name: "UbahKataSandi",
  components: {
    NavbarSimpan,
  },
  data() {
    return {
      form: {
        password: "",
        newpassword: "",
        confirmnewpasswor: "",
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
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    togglepassold: function() {
      const password = document.querySelector("#katasandilama");

      // toggle the type attribute
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
    },
    togglepassnew: function() {
      const password = document.querySelector("#katasandibaru");

      // toggle the type attribute
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
    },
    togglepassconfirmnew: function() {
      const password = document.querySelector("#konfirmasisandibaru");

      // toggle the type attribute
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
    },
  },
};
</script>

<style scoped>
#ubahkatasandi {
  margin-top: 20%;
}
.label {
  color: #4e2e8a !important ;
  font-weight: bold;
  font-size: 10px;
  text-align: left;
}

.form-input {
  border: 0px;
  border-bottom: 1px solid grey;
  background: transparent;
}

.form-input:focus {
  outline: none;
  box-shadow: none;
}
</style>
