<template>
    <b-container fluid class="navbar">
        <b-link @click="$router.go(-1)" class="back">
            <b-img src="https://files.catbox.moe/pk9f1b.png" fluid alt="Back"></b-img>
        </b-link>
        <p>
            {{title}}
        </p>
        <b-button id="btn-simpan">
            Simpan
        </b-button>
    </b-container>
</template>

<script>
export default {
  name: "NavbarSimpan",
  props: {
    title: String,
  },
};
</script>

<style scoped>

.navbar{
    height: 60px;
    background-color:  #4E2E8A;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
    position: fixed;
    top: 0;
}

.navbar p{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    color: #FFFFFF;
    margin: auto;
    padding-left: 35px;
}

#btn-simpan{
    color: #4E2E8A;
    background: #FFFFFF;
    padding: 10px;
    border-radius: 5px;
    font-weight: 600;
}

</style>