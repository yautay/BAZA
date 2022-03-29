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
import TheFooter from "@/components/base/TheFooter";
import TheAdminHeader from "@/components/base/TheAdminHeader";
import TheAdminFooter from "@/components/base/TheAdminFooter";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            components: {router_header: TheHeader, router_content: PageStart, router_footer: TheFooter}
        },
        {
            name: 'admin',
            path: '/admin',
            components: {router_header: TheAdminHeader, router_content: PageAdmin, router_footer: TheAdminFooter}
        },
        {
            name: 'schedule',
            path: '/schedule',
            components: {router_header: TheHeader, router_content: PageSchedule, router_footer: TheFooter}
        },
        {
            name: 'news',
            path: '/news',
            components: {router_header: TheHeader, router_content: PageNews, router_footer: TheFooter}
        },
        {
            name: 'gallery',
            path: '/gallery',
            components: {router_header: TheHeader, router_content: PageGallery, router_footer: TheFooter}
        },
        {
            name: 'about',
            path: '/about',
            components: {router_header: TheHeader, router_content: PageAbout, router_footer: TheFooter}
        },
        {
            name: 'contact',
            path: '/contact',
            components: {router_header: TheHeader, router_content: PageContact, router_footer: TheFooter}
        },
        {path: '/:notFound(.*)', redirect: '/'},
    ],
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);
app.mount('#app');

