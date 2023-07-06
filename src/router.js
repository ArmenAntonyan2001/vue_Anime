import { createRouter, createWebHashHistory } from "vue-router";
import Manga from './components/Manga.vue';
import AnimeLife from './components/AnimeLife.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/Anime', component: AnimeLife},
        {path: '/Manga', component: Manga},

    ]
})