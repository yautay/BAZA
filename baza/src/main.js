import App from './App.vue';
import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';


import PageStart from "@/components/pages/PageStart";
import PageSchedule from "@/components/pages/PageSchedule";
import PageNews from "@/components/pages/PageNews";
import PageAbout from "@/components/pages/PageAbout";
import PageGallery from "@/components/pages/PageGallery";
import PageContact from "@/components/pages/PageContact";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: PageStart
        },
        {
            name: 'schedule',
            path: '/schedule',
            component: PageSchedule
        },
        {
            name: 'news',
            path: '/news', component: PageNews
        },
        {
            name: 'gallery',
            path: '/gallery', component: PageGallery
        },
        {
            name: 'about',
            path: '/about', component: PageAbout
        },
        {
            name: 'contact',
            path: '/contact', component: PageContact
        },
        {path: '/:notFound(.*)', redirect: '/'},
    ],
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);
app.mount('#app');

