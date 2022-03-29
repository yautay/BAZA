import App from './App.vue';
import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';


import PageStart from "@/components/pages/PageStart";
import PageAdmin from "@/components/pages/PageAdmin";
import PageSchedule from "@/components/pages/PageSchedule";
import PageNews from "@/components/pages/PageNews";
import PageAbout from "@/components/pages/PageAbout";
import PageGallery from "@/components/pages/PageGallery";
import PageContact from "@/components/pages/PageContact";
import TheHeader from "@/components/base/TheHeader";
import TheAdminHeader from "@/components/base/TheAdminHeader";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            components: {router_header: TheHeader, router_content: PageStart}
        },
        {
            name: 'admin',
            path: '/admin',
            components: {router_header: TheAdminHeader, router_content: PageAdmin}
        },
        {
            name: 'schedule',
            path: '/schedule',
            components: {router_header: TheHeader, router_content: PageSchedule}
        },
        {
            name: 'news',
            path: '/news',
            components: {router_header: TheHeader, router_content: PageNews}
        },
        {
            name: 'gallery',
            path: '/gallery',
            components: {router_header: TheHeader, router_content: PageGallery}
        },
        {
            name: 'about',
            path: '/about',
            components: {router_header: TheHeader, router_content: PageAbout}
        },
        {
            name: 'contact',
            path: '/contact',
            components: {router_header: TheHeader, router_content: PageContact}
        },
        {path: '/:notFound(.*)', redirect: '/'},
    ],
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);
app.mount('#app');

