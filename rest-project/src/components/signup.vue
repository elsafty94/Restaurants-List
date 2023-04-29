<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<template>
    <div>
        <img class="logo" src="../assets/unnamed.png" alt="">
        <h1> Sign Up</h1>
        <div class="register">
            <input v-model="name" type="text" placeholder="User Name">
            <input v-model="email" type="text" placeholder="E-mail">
            <input v-model="password" type="password" placeholder="Password">
<button v-on:click="SignUp">Sign Up</button>
       
<p>
    <router-link to="/login" > login</router-link>
</p>
</div>
    </div>
</template>

<script>
import axios from 'axios';



export default{
    name: 'SignUp',

    data(){ 
        return {
            name:'',
            email: '',
            password:''
        }
    },
methods:{
   async SignUp() { let response = await axios.post("http://localhost:3000/user",{
        name: this.name,    
        email: this.email,
        password: this.password

    });
    console.log(response);
if(response.status ===201){
    
    localStorage.setItem("user-info",JSON.stringify(response.data))
    this.$router.push({name:'home'})

}
    
    
    

}

}

}
</script>


<style>

</style>