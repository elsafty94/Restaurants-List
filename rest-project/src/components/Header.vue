<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/Add">Add Restaurant</router-link>
        <router-link to="/login">Login</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name:'Header',
methods:{
    logout(){
localStorage.clear();
this.$router.push({name:'login'})
    }
}
}



</script>

<style>
.nav{
    background-color: black;
    color: azure;
    overflow: hidden;
}
.nav a{
    float: left;
    color: aliceblue;
    padding: 14px 16px;
    text-align: center;
    font-size: large;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background-color: goldenrod;
    color: black;
}
</style>
