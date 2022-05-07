<template>
  <Header />
  <h2>Hello {{ name }}, Welcome to Update page</h2>
<form>
    <input
      type="text"
      v-model="restaurant.name"
      placeholder="Restaurant Name"
    />
    <input type="text" v-model="restaurant.address" placeholder="Address" />
    <input type="text" v-model="restaurant.contact" placeholder="Contact" />
    <button v-on:click="addRestaurant">Add Restaurant</button>
  </form>
</template>
<script>

import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "UpdateUp",
  data() {
    return {
      name: "",
      restaurant: {
        name: "",
        contact: "",
        address: "",
      },
    };
},
  components: {
    Header,
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/restaurant"+this.$route.params.id)
    console.warn(result.data)
    this.restaurant = result.data
    //console.warn(this.$router.params.id)
  },
};
</script>