<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="8" class="ml-0 align-self-center"
          ><div class="search">
            <b-container>
              <b-row>
                <b-col cols="2" class="align-self-center">
                  <b-img class="" src="../assets/icons/search.svg"></b-img>
                </b-col>

                <b-col>
                  <b-form-input
                    class="searchform"
                    :placeholder="[[Type]]"
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-container></div
        ></b-col>
        <b-col cols="2" class="mr-0">
          <b-container>
            <b-row>
              <b-col>
                <b-dropdown
                  class="w-100"
                  right
                  text="Right align"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template slot="button-content">
                    <b-img src="../assets/sort.svg"></b-img>
                  </template>

                  <b-dropdown-item>Nama</b-dropdown-item>
                  <b-dropdown-item>Harga Tertinggi</b-dropdown-item>
                  <b-dropdown-item>Harga Terendah</b-dropdown-item>
                  <b-dropdown-item>Terbaru</b-dropdown-item>
                </b-dropdown>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SearchSort",

  //masukan Type pada menu view untuk mengubah placeholder pada search bar
  props: {
    Type: String,
  },
};
</script>

<style scoped>
.search {
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
}
.searchform {
  border: none;
  box-shadow: none;
}
</style>
