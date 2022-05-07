<template>
  <Header />
  <h2>Hello {{ name }}, Welcome to Home page</h2>
  <table border="0.5">
<tr><td>Restaurant Name</td><td>Address</td><td>Contact</td><td>Action</td></tr>
    <tr v-for="item in restaurant" :key="item.id">
    <td>{{ item.name }}</td>
    <td>{{ item.address }}</td>
    <td>{{ item.contact }}</td>
<td><router-link :to="'/update/'+item.id">Update</router-link></td>
    </tr>
  </table>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "HomeUp",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  components: {
    Header,
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "Login" });
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    console.warn(result);
    this.restaurant = result.data;
  },
};
</script>
