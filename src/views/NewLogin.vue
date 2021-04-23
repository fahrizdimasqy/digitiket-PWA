<template>
    <div id="login">
        <b-container fluid class="p-0">
            <b-row>
                <b-col cols="12" class="mx-auto">
                    <img src="../assets/hello-ilus.svg" alt="hello illustration" style="margin-top: 48px;">
                </b-col>
                <b-col cols="12" class="text-center">
                    <h2 class="greeting">
                        Selamat Datang <br>
                        Kembali !
                    </h2>
                </b-col>
            </b-row>

            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-row class="box">
                    <b-col cols="1" class="my-auto px-0">
                        <img src="../assets/icons/user-icon.svg">
                    </b-col>
                    <b-col cols="11" class="pl-0">
                        <b-form-input
                            class="p-0 form-input"
                            id="email"
                            v-model="form.email"
                            type="text"
                            placeholder="Email atau nomor handphone"
                            required
                        ></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="box-1">
                    <b-col cols="1" class="my-auto px-0">
                        <img src="../assets/icons/login-view/lock-icon.svg">
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
                        <b-icon icon="eye-slash-fill" v-on:click="togglepass" id="icon1"
                        ></b-icon>
                        <b-icon icon="eye-fill" v-on:click="togglepass" id="icon2"
                        ></b-icon>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12" class="text-right" style="margin-top: 8px;">
                        <a href="#" class="font-weight-bold" >Lupa kata sandi?</a>
                    </b-col>
                </b-row>
            </b-form>

            <b-row>
                <b-col cols="12" style="margin-top:48px;">

                    <b-button v-on:click="masuk" class="btn-masuk" v-b-modal.modal-2>
                        Masuk  
                    </b-button>

                    <div id="alert">
                        <b-row>
                            <b-col cols="12" class="text-center">
                                <b-modal id="modal-2" hide-footer hide-header hide-header-close modal-class="my-third-class" >
                                    <b-col cols="12" class="text-center">
                                        <p id="kata" class="my-4">{{text.kalimat}}</p>
                                    </b-col>
                                </b-modal>
                            </b-col>
                        </b-row>
                    </div>


                    <b-col cols="12"
                    style="margin-top: 24px; margin-bottom: 34px;">
                        <p class="atau"><span>Atau daftar dengan</span></p>
                    </b-col>

                    <b-col cols="12" class="p-0">
                        <b-button class="btn-sosmed" v-b-modal.modal-1>
                            Akun sosial media  
                        </b-button>   

                        <b-modal id="modal-1" hide-footer hide-header hide-header-close modal-class="my-second-class" >
                            <b-col cols="12">
                                <b-button class="btn-sosmed-2">
                                    <img src="../assets/icons/login-view/facebook.svg" class="my-auto" style="margin-right: 14px"> Facebook
                                </b-button>
                            </b-col>
                            <b-col cols="12">
                                <b-button class="btn-sosmed-2 mt-0">
                                    <img src="../assets/icons/login-view/google.svg" class="my-auto" style="margin-right: 14px"> Google
                                </b-button>
                            </b-col>
                        </b-modal>
                    </b-col>
                </b-col>

                <b-col cols="12">
                    <p class="mt-2 question font-weight-bold">
                        Belum punya akun?
                        <router-link to="/daftar" style="color:#4E2E8A;">
                        Daftar
                        </router-link>
                    </p>
                </b-col>


               

            </b-row>

        </b-container>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios,axios)
export default {
    name: "login",
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
            show: true,
            Account:undefined,
            text: {
                kalimat:"Login Berhasil"
            }
        };
    },
    mounted(){
        Vue.axios.get('https://605ed476e96e5c0017407cba.mockapi.io/digi/Account')
        .then((resp)=>{
            this.Account = resp.data;
            console.warn(resp.data)
        })

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
        
        var icon1 = document.getElementById("icon1");
        var icon2 = document.getElementById("icon2");

        if(password.getAttribute("type") === "password"){
            password.setAttribute("type", "text");
            icon1.style.display = "none";
            icon2.style.display = "inline";
        }
        else{
            password.setAttribute("type", "password");
            icon1.style.display = "inline";
            icon2.style.display = "none";
        }
    },
    masuk: function(){
        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
        var akun = this.Account[0];
        
        if(email == akun.email && pass == akun.password){
            this.$router.push({ path: '/home' })
        }
        else if(email == "" && pass == ""){
           this.text.isi1 = "Mohon diisi terlebih dahulu email dan password";

        }
        else{
           this.text.isi1 = "Email atau password yang anda masukkan salah";
        }
    }
    
    },
}
</script>

<style scoped>
#login{
    margin-left:20px;
    margin-right: 20px;
    overflow: hidden;
}
.greeting{
    font-weight: bold;
    color: #4E2E8A;
    margin-top: 24px;
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
.box-1{
    border-bottom: 1px solid black;
    margin: 0px;
    
}

.box-1:focus-within{
    border-bottom: 1px solid #4E2E8A;
}

.box:focus-within{
    border-bottom: 1px solid #4E2E8A;
}

.btn-masuk{
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

::v-deep .my-second-class > .modal-dialog > .modal-content > .modal-body  {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: white;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
}

::v-deep .my-third-class > .modal-dialog > .modal-content > .modal-body  {
  position: fixed;
  width: 90%;
  top: 40%;
  background-color: white;
  border-radius: 16px;
  margin: 0px 10px;
}

#kata{
    font-size: 16px;
    font-weight: bold;

}

#icon1{
    display: inline;
}

#icon2{
    display: none;
}

</style>