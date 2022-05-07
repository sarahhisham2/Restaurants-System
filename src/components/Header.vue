<template>
  <div class="nav">
    <router-link to="/">Home </router-link>
    <router-link to="/Add">Add Restaurant </router-link>
    
    <a v-on:click="logout" href="#">Logout </a>
  </div>
</template>
<script>
export default {
  name: "HeaderUp",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({name:'Login'});
    },
  },
};
</script>
<style>
.nav {
  background-color: goldenrod;
  overflow: hidden;
}
</style>
