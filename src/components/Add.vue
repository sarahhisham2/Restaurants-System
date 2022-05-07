<template>
  <Header />
  <h2>Hello {{ name }}, Welcome to Add a Restaurant page</h2>
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
import axios from'axios'
export default {
  name: "AddUp",
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
  methods: {
    async addRestaurant() {
      let result = await axios.post("http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        contact: this.restaurant.contact,
        address: this.restaurant.address,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("restaurant-info", JSON.stringify(result.data));
      }
    },
  },
  components: {
    Header,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
