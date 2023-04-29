import home from './components/home.vue'
import signup from './components/signup.vue'
import {createRouter , createWebHistory} from "vue-router";
import login from './components/log-in.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'

const routes =[
    {
        name: 'home',
        component:home,
        path: '/'
    },

    {
        name: 'signup',
        component:signup,
        path: '/sign-up'
    },
    
    {
        name: 'login',
        component:login,
        path: '/login'
    },

    {
        name: 'Add',
        component:Add,
        path: '/Add'
    },
    {
        name: 'Update',
        component:Update,
        path: '/Update:id'
    },
    
];

const router = createRouter({history:createWebHistory(),routes});

export default router;