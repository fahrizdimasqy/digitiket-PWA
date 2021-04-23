<template>
  <div>
    <div v-bind:key="notif.id" v-for="notif in notifs">
      <NotifCard v-bind:notif="notif"/>
    </div>
  </div>
</template>

<script>
import NotifCard from './NotifCard.vue';
export default {
  name: "NotifCardList",
  components: {
    NotifCard
  },
  props: ["notifs"]
}
</script>

<style scoped>
</style>