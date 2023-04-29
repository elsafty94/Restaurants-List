<template>


        <h1>
            hello to Add page
            </h1>
            
            <form action="" class="add">
                <input type="text" name="name" placeholder="Enter name" v-model="restaurant.name">
                <input type="text" name="adress" placeholder="Enter adress" v-model="restaurant.adress">
                <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact">
                <button type="button" v-on:click="Addrestaurant">Add New Restaurant</button>
                
                </form>
    
    
    
    </template>
    
    <script>
    // eslint-disable-next-line no-unused-vars
    import Header from './Header.vue'
    import axios from 'axios';
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Add",
    components:{
       Header
    },
    data(){
return{
    restaurant:{
        name:'',
        adress:'',
        contact:''
    }
}
    },
    methods: {
      async Addrestaurant(){
            console.log(this.restaurant);
        const result =await axios.post("http://localhost:3000/restaurant",{
            name: this.restaurant.name,
            adress:this.restaurant.adress,
            contact:this.restaurant.contact
        })
 console.log("result", result);
 if(result.status==201){
    this.$router.push({name:'home'})

 }
    }
    },
    mounted(){
        let user= localStorage.getItem('user-info');
        if(!user)
        {
    this.$router.push({name:'SignUp'})
        }
    }  
       
    }
    
    </script>