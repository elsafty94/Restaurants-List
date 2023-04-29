<template>

<Header />
    <h1>
        hello {{ name }},welcome 
        </h1>


        <table border="1">

<tr class="headtable">
    <td>id</td>
    <td>name</td>
    <td>contact</td>
    <td>adress</td>
    <td>Actions</td>
</tr>

<tr v-for="item in restaurant" :key="item.id">
    <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    <td>{{item.contact}}</td>
    <td>{{item.adress}}</td>
    <td><router-link :to="'/Update'+item.id" >Update</router-link> 
    <button v-on:click="deleteRest(item.id)">Delete</button>
    </td>

</tr>

</table>        




</template>

<script>
// eslint-disable-next-line no-unused-vars
import Header from './Header.vue'
import axios from 'axios';
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: "home",
    data(){
        return{
            name:'',
            restaurant:[],
        }
    },
components:{
   Header
},
methods:{
   async deleteRest(id){
        let result =  await axios.delete("http://localhost:3000/restaurant/"+id);
    if(result.status==200){
this.loadData();
    }
    },
    async loadData(){
        let user= localStorage.getItem('user-info');
    this.name= JSON.parse(user).name;
    if(!user)
    {
this.$router.push({name:'SignUp'})
    }
    let result = await axios.get("http://localhost:3000/restaurant");
this.restaurant= result.data;
    }
},
async mounted(){
   this.loadData();
}  
   
}

</script>
<style>
td{
    width: 150px;
}

</style>