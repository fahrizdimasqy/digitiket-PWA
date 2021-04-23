<template>
  <div>
    <Navbar title="Ubah Profil" class="sticky-top" />
    <b-container>
      <section class="d-flex flex-column align-items-start mb-3 py-4">
        <h2 class="font-weight-bold mb-3">Foto Profil</h2>
        <div class="d-flex justify-content-start align-items-center">
          <b-img-lazy
            alt="foto-profil"
            src="https://imgur.com/w1239.jpg"
            width="60px"
            height="60px"
            class="rounded-circle"
            id="fotoProfil"
          ></b-img-lazy>
          <input type="file" @change="ubahFotoProfil" ref="pilihFile" hidden />
          <h4 class="ml-3" @click="$refs.pilihFile.click()">
            Ubah foto profil
          </h4>
        </div>
      </section>
      <section class="d-flex flex-column align-items-start mb-3 py-4">
        <h2 class="font-weight-bold mb-3">Data Diri</h2>
        <div class="form-group text-left w-100">
          <p class="text-primary font-weight-bold mb-1">
            <small>Nama Depan</small>
          </p>
          <input
            type="text"
            v-model="user.firstName"
            class="border-bottom border-left-0 border-right-0 border-top-0 w-100 py-2"
          />
        </div>
        <div class="form-group text-left w-100">
          <p class="text-primary font-weight-bold mb-1">
            <small>Nama Belakang</small>
          </p>
          <input
            type="text"
            v-model="user.lastName"
            class="border-bottom border-left-0 border-right-0 border-top-0 w-100 py-2"
          />
        </div>
        <div class="form-group text-left w-100">
          <p class="text-primary font-weight-bold mb-1">
            <small>TanggalLahir</small>
          </p>
          <b-row no-gutters align-h="between" align-v="center">
            <p class="m-0">{{ convertDate(user.birthDate) }}</p>
            <div class="d-d-inline-block position-relative mt-n2">
              <img
                src="../assets/icons/kalender.svg"
                width="20px"
                height="20px"
                @click="isOpenCalendar = !isOpenCalendar"
              />
              <transition name="expand">
                <!-- <p class="display-1" v-if="!isOpenCalendar ? false : true">test</p> -->
                <b-calendar
                  tabindex="0"
                  @blur="isOpenCalendar = !isOpenCalendar"
                  hide-header
                  v-if="!isOpenCalendar ? false : true"
                  class="position-absolute calendar"
                  v-model="user.birthDate"
                  locale="ID"
                  :date-format-options="{
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }"
                  :initial-date="user.birthDate"
                ></b-calendar>
              </transition>
            </div>
          </b-row>
        </div>
        <div class="form-group text-left">
          <p class="text-primary font-weight-bold mb-1">
            <small>Jenis Kelamin</small>
          </p>
          <p class="m-0 text-secondary">
            {{ user.gender }}
          </p>
        </div>
      </section>
      <section class="d-flex flex-column align-items-start mb-3 py-4">
        <h2 class="font-weight-bold">Kontak</h2>
        <div class="form-group text-left w-100">
          <b-row no-gutters align-h="between">
            <p class="text-primary font-weight-bold mb-1">
              <small>Email</small>
            </p>
            <a class="text-primary font-weight-bold mb-1" @click="ubahEmail()">
              <small>Ubah Email</small>
            </a>
          </b-row>
          <b-row no-gutters align-h="between" align-v="end" class="w-100">
            <input
              id="ubahEmail"
              class="text-secondary font-weight-bold mb-1 border-top-0 border-left-0 border-right-0 border-bottom-0 w-75"
              disabled="disabled"
              v-model="user.email"
            />
            <b-form-checkbox
              name="checkbox-emailVerified"
              class="p-0"
              button
              :button-variant="user.emailVerified ? 'success' : 'danger'"
            >
              <b-icon-check class="font-weight-bold"></b-icon-check>
            </b-form-checkbox>
          </b-row>
        </div>
        <div class="form-group text-left w-100">
          <p class="text-primary font-weight-bold mb-1">
            <small>Nomor Handphone</small>
          </p>
          <b-row no-gutters align-h="between" align-v="end">
            <p class="font-weight-bold mb-1">
              {{ user.phoneNumber }}
            </p>
            <b-form-checkbox
              name="checkbox-phoneVerified"
              class="p-0"
              button
              :button-variant="user.phoneVerified ? 'success' : 'danger'"
            >
              <b-icon-check class="font-weight-bold"></b-icon-check>
            </b-form-checkbox>
          </b-row>
        </div>
      </section>
      <section>
        <b-row no-gutters align-v="start" align-h="between" class="w-100">
          <b-link to="/profil/ubah-kata-sandi">
            <h3>Ubah Kata Sandi</h3>
          </b-link>
          <b-link to="/profil/ubah-kata-sandi">
            <b-icon-chevron-right
              class="text-secondary chevron"
            ></b-icon-chevron-right>
          </b-link>
        </b-row>
      </section>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "UbahProfil",
  components: {
    Navbar,
  },

  data() {
    return {
      isOpenCalendar: false,
      isEditEmail: false,
      user: {
        email: "natasyajoan@gmail.com",
        emailVerified: true,
        phoneNumber: "0812345678990",
        phoneVerified: false,
        firstName: "Natasya",
        lastName: "Joan",
        fullname: `${this.firstName} ${this.lastName}`,
        birthDate: "2000-02-02",
        gender: "Perempuan",
      },
    };
  },
  methods: {
    convertDate(date) {
      return new Date(date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },
    ubahEmail() {
      const email = document.getElementById("ubahEmail");
      email.removeAttribute("disabled");
      email.classList.remove("border-bottom-0");
      email.classList.add("border-bottom");
    },
    ubahFotoProfil(evt) {
      const preview = document.querySelector("#fotoProfil");
      const file = evt.target.files[0];
      const reader = new FileReader();
      if (/\.(jpe?g|png|svg)$/i.test(file.name)) {
        reader.addEventListener(
          "load",
          function() {
            // convert image file to base64 string
            preview.src = reader.result;
            preview.width = 60;
            preview.height = 60;
            preview.classList.add("rounded-circle");
          },
          false
        );

        if (file) {
          reader.readAsDataURL(file);
        }
      } else {
        alert("Gagal mengunggah foto profil");
      }
    },
  },
};
</script>
<style>
.calendar {
  right: -10%;
  top: 2.5rem;
}
.chevron {
  font-size: 20px;
}
.expand-enter-active {
  animation: expand 0.3s;
}
.expand-leave-active {
  animation: expand 0.2s reverse;
}
@keyframes expand {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
