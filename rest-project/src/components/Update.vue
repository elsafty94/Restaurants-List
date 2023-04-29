<template>

    <Header />
        <h1>
            hello to Update page
            </h1>
            <form action="" class="add">
                <input type="text" name="name" placeholder="Enter name" v-model="restaurant.name">
                <input type="text" name="adress" placeholder="Enter adress" v-model="restaurant.adress">
                <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact">
                <button type="button" v-on:click="Updaterestaurant">Update  Restaurant</button>
                
                </form>
            
    
    
    
    
    </template>
    
    <script>
    // eslint-disable-next-line no-unused-vars
    import Header from './Header.vue'
    import axios from 'axios';
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Update",
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
    methods:{
        async Updaterestaurant(){
            console.log(this.restaurant);
        const result =await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
            name: this.restaurant.name,
            adress:this.restaurant.adress,
            contact:this.restaurant.contact,
        })
 console.log("result", result);
 if(result.status==200){
    this.$router.push({name:'home'})

 }
    }
  
    },
    async mounted(){
        let user=  localStorage.getItem('user-info');
        if(!user)
        {
    this.$router.push({name:'SignUp'})
        }
        const result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id)
    
    console.log(result);
this.restaurant=result.data
    }  
       
    }
    
    </script>