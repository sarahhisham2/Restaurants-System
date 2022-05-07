import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import Login from './components/Login.vue'
import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },{
        name: 'Update',
        component: Update,
        path: '/Update/:id'
    },{
        name: 'Add',
        component: Add,
        path: '/Add'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/Login'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;