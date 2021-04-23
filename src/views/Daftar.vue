<template>
    <div id="daftar">
        <b-container fluid class="p-0">
            <b-row>
                <b-col cols="12" class="text-center">
                    <img
                        src="../assets/logo-digitiket.png"
                        alt="Digitiket logo"
                        style="margin-top: 24px; height: 50%;"
                    />
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="text-center header">
                    <h2 class="font-weight-bold">
                        Daftar Akun
                    </h2>
                </b-col>
            </b-row>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-row class="box" >
                    <b-col cols="1" class="my-auto px-0">
                        <img src="../assets/icons/daftar-view/user-icon.svg">
                    </b-col>
                    <b-col cols="11" class="pl-0">
                        <b-form-input
                            class="p-0 form-input"
                            id="username"
                            v-model="form.username"
                            type="text"
                            placeholder="Username"
                            required
                        ></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="box">
                    <b-col cols="1" class="my-auto px-0">
                        <img src="../assets/icons/daftar-view/email-icon.svg">
                    </b-col>
                    <b-col cols="11" class="pl-0">
                        <b-form-input
                            class="p-0 form-input"
                            id="email"
                            v-model="form.email"
                            type="email"
                            placeholder="Email"
                            required
                        ></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="box">
                    <b-col cols="1" class="my-auto px-0">
                        <img src="../assets/icons/daftar-view/phone-icon.svg">
                    </b-col>
                    <b-col cols="11" class="pl-0">
                        <b-form-input
                            class="p-0 form-input"
                            id="nomorhp"
                            v-model="form.nomor"
                            type="number"
                            placeholder="Nomor Handphone"
                            required
                        ></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="box">
                    <b-col cols="1" class="my-auto px-0">
                        <img src="../assets/icons/daftar-view/lock-icon.svg">
                    </b-col>
                    <b-col cols="10" class="pl-0">
                        <b-form-input
                            class="p-0 form-input"
                            id="password"
                            v-model="form.password"
                            type="password"
                            placeholder="Kata Sandi"
                            required
                        ></b-form-input>
                    </b-col>
                    <b-col cols="1" class="my-auto px-0">
                        <img src="../assets/icons/daftar-view/eye-grey-slash.svg" v-on:click="togglepass"
                        id="togglePassword">
                    </b-col>
                </b-row>

                <b-row class="box">
                    <b-col cols="1" class="my-auto px-0">
                        <img src="../assets/icons/daftar-view/lock-icon.svg">
                    </b-col>
                    <b-col cols="10" class="pl-0">
                        <b-form-input
                            class="p-0 form-input"
                            id="confirmpass"
                            type="password"
                            v-model="form.confirmpassword"
                            placeholder="Konfirmasi Kata Sandi"
                            required
                        ></b-form-input>
                    </b-col>
                    <b-col cols="1" class="my-auto px-0">
                        <img src="../assets/icons/daftar-view/eye-grey-slash.svg" v-on:click="togglepassconfirm"
                        id="togglePassword">
                    </b-col>
                </b-row>
            </b-form>

            <b-row>
                <b-col cols="12" style="margin-top:36px;">
                    <router-link to="/">
                        <b-button class="btn-daftar">
                            Daftar  
                        </b-button>
                    </router-link>
                </b-col>

                <b-col cols="12"
                style="margin: 24px 0px;">
                    <p class="atau"><span>Atau daftar dengan</span></p>
                </b-col>

                <b-col cols="12">
                    <b-button class="btn-sosmed" v-b-modal.modal-1>
                        Akun sosial media  
                    </b-button>   

                    <b-modal id="modal-1" hide-footer hide-header hide-header-close modal-class="my-second-class" >
                        <b-col cols="12">
                            <b-button class="btn-sosmed-2">
                                <img src="../assets/icons/daftar-view/facebook.svg" class="my-auto" style="margin-right: 14px"> Facebook
                            </b-button>
                        </b-col>
                        <b-col cols="12">
                            <b-button class="btn-sosmed-2 mt-0">
                                <img src="../assets/icons/daftar-view/google.svg" class="my-auto" style="margin-right: 14px"> Google
                            </b-button>
                        </b-col>
                    </b-modal>
 
                </b-col>

                <b-col cols="12">
                    <p class="mt-2 question font-weight-bold">
                        Sudah punya akun?
                        <router-link to="/login" style="color:#4E2E8A;">
                        Masuk
                        </router-link>
                    </p>
                </b-col>
            </b-row>
            
        </b-container>
        
    </div>
</template>

<script>
export default {
    name: "daftar",
    data() {
        return {
            form: {
                username: "",
                email: "",
                nomor: "",
                password: "",
                confirmpassword: "",
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
        this.form.name = "";
        this.form.food = null;
        this.form.checked = [];
        // Trick to reset/clear native browser form validation state
        this.show = false;
        this.$nextTick(() => {
            this.show = true;
        });
    },
    togglepass: function() {
        const password = document.querySelector("#password");

        // toggle the type attribute
        const type =
            password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);

    },
    togglepassconfirm: function() {
        // var togglePassword = document.getElementById('togglePassword');
        const password = document.querySelector("#confirmpass");

        // toggle the type attribute
        const type =
            password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
        },
    },
}
</script>

<style scoped>
#daftar{
    margin-left:20px;
    margin-right: 20px;
    overflow: hidden;
}
.form-input {
  border: 0px;
  background: transparent;
}

.form-input:focus {
  outline: none;
  box-shadow: none;
  
}

.box{
    border-bottom: 1px solid black;
    margin: 0px;
    margin-bottom: 24px;
    
}

.box:focus-within{
    border-bottom: 1px solid #4E2E8A;
}
.header{
    margin-top: 48px;
    color:#4E2E8A;
}

.btn-daftar{
    background: #4E2E8A;
    color: white;
    font-weight: bold;
    width: 100%;
    border-radius: 10px;
}

.btn-sosmed{
    background: white;
    color: #4E2E8A;
    font-weight: bold;
    border-color:#4E2E8A ;
    width: 100%;
    border-radius: 10px;

}

.btn-sosmed:focus{
    box-shadow: none; 
}

.btn-sosmed-2{
    background: white;
    color: #000000;
    font-weight: bold;
    border-color:#4E2E8A ;
    width: 100%;
    border-radius: 36px;
    padding: 10px 0px;
    margin: 24px 0px;
}

.atau {
  width: 100%; 
   text-align: center; 
   border-bottom: 1px solid rgba(0, 0, 0, 0.2);; 
   line-height: 0.1em;
   margin: 10px 0 20px;
}

.atau span{
    background:#fff; 
    padding:0 10px; 
}

::v-deep .my-second-class > .modal-dialog > .modal-content > .modal-body {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: white;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
}


</style>