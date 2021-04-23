<template>
<div class="g-map">
  <gmap-map :center="center" :zoom="16" style="width:100%; height:800px;">
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :title="m.title"
      :clickable="true"
      :draggable="true"
      @click="center = m.position"
    ></gmap-marker>
  </gmap-map>
  </div>
</template>
<style scoped>

</style>
<script>
export default {
  name: "GoogleMaps",
  data() {
    return {
      center: { lat: this.latitude, lng: this.longitude },
      markers: [
        {
          position: { lat: this.latitude, lng: this.longitude },
          title: this.title,
        },
      ],
    };
  },

  props: {
    latitude: Number,
    longitude: Number,
    title: String,
  },
};
</script>
