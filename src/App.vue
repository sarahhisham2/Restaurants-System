<template>
  <router-view />
</template>

<script>

export default {
  name: "App",
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;

}
table{
margin-left: 50px;}
td{
width:160px;
height: 80px;
margin-left:30px ;}
.logo {
  width: 100px;
}
.nav a {
  color: antiquewhite;
  margin: 14px 16px;
  float: left;
  text-align: center;
  font-size: 17px;
  margin-right: 5px;
  text-decoration: none;
}
.nav a:hover {
  background: rgb(185, 135, 7);
}
form input,.register input,
.login input {
  width: 300px;
  height: 40px;
  padding-left: 30px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid goldenrod;
  border-radius: 3px;
}
form button,.register button,
.login button {
  width: 300px;
  height: 40px;
  border: 1px solid goldenrod;
  background: goldenrod;
  color: aliceblue;
  cursor: pointer;
  border-radius: 3px;
}
dev{
background-image: url('./assets/images.jpg');
}
img{
margin-top: 45px;
}
h2{

font-size: 30px;

}
h1{
color:goldenrod;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 50px;
}
router-link{
color:goldenrod;
font-family: monospace;
margin-top: 20px;
font-size: 20px;
}
</style>
