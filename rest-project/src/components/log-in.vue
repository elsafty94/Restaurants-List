<!-- eslint-disable vue/multi-word-component-names -->
<template>

    
    <div class="login">
        <h1>login</h1>

        <input v-model="email" type="text" placeholder="E-mail">
        <input v-model="password" type="password" placeholder="Password">
<button v-on:click="login">login</button>
<p>
    <router-link to="/sign-up" > Sign Up</router-link>
</p>
</div>
</template>



<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name:'login',

    data() {
        return {
            email: '' ,
            password: ''
        }
    },
    methods: {
        
    async login(){
// eslint-disable-next-line no-unused-vars
let result = await axios.get (
    `http://localhost:3000/user?email=${this.email}&password=${this.password}`
)
if(result.status ===200 && result.data.length>0){
    
    localStorage.setItem("user-info",JSON.stringify(result.data[0]))
    this.$router.push({name:'home'})

}
            console.log(result);
        }
    },
}

</script>



<style>




</style>