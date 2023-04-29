<template>
<router-view/>

</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  padding: 0px;
  margin: 0px;
}
.logo{
  width: 100px;
}
.register input, .login input , .add input {
  display: block;
  width: 300px;
  height: 30px;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid orange;

}.register button:hover , .login button:hover , .add button:hover{
  background-color: black;
}
.register button, .login button , .add button{
  width: 320px;
  height: 30px;
  border: 1px solid orange;
  background-color: orange;
  cursor: pointer;
  color: white;
  font-weight: bolder;
}
table{
  border: solid 2px ;
  background-color: black;
  color:aliceblue;
}
.headtable{
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  color: black;
  background-color: aliceblue;
}
</style>
