import App from './App.vue';
import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import PageSchedule from "@/components/pages/PageSchedule";
import PageNews from "@/components/pages/PageNews";
import PageAbout from "@/components/pages/PageAbout";
import PageGallery from "@/components/pages/PageGallery";
import PageContact from "@/components/pages/PageContact";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/schedule', component: PageSchedule},
        {path: '/news', component: PageNews},
        {path: '/gallery', component: PageGallery},
        {path: '/about', component: PageAbout},
        {path: '/contact', component: PageContact}
    ],
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);
app.mount('#app');

