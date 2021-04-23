<template>
  <div class="pilih-tanggal">
    <Navbar title="Tanggal Kedatangan" />
    <b-container>
      <h5 class="text-left mt-4 mb-4">
        Silahkan pilih tanggal kedatangan anda
      </h5>
    </b-container>
    <vc-date-picker is-expanded v-model="date" />
    <b-container> </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "PilihTanggal",
  data() {
    return {
      date: new Date(),
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    },
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped>
h5 {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 128.91%;
}
* {
  border: none;
}
vc-title[data-v-69d96152] {
  font-size: var(--text-lg);
  color: var(--gray-800);
  font-weight: var(--font-semibold);
  line-height: 28px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
}
</style>
