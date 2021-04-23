<template>
  <div id="payment">
    <ul>
      <li>
        <p>{{ provider.namaProvider }}</p>
        <img v-bind:src="provider.logo">
      </li>
    </ul>
  </div>
</template>

<script>
// import Logo from '../assets/img/mandiri.svg'

export default {
  name: "Payment",
  props: ["provider"]
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');

  #payment {
    font-family: 'Lato', sans-serif;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
  }

  li p {
    font-weight: 600;
  }
</style>