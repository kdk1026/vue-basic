import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Counter from "../pages/Counter.vue";
import Input from "../pages/Input.vue";
import Input2 from "../pages/Input2.vue";
import UserList from "../pages/UserList.vue";
import Movies from "../pages/Movies.vue";
import Param1 from "../pages/Param1.vue";
import Param2 from "../pages/Param2.vue";
import Param3 from "../pages/Param3.vue";
import LinkSendData from "../pages/LinkSendData";
import LinkReceiveData from "../pages/LinkReceiveData.vue";
import Main from "../pages/Main.vue";
import Articles from "../pages/article/Articles.vue";
import Article from "../pages/article/Article.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/counter', component: Counter },
    { path: '/input', component: Input },
    { path: '/input2', component: Input2 },
    { path: '/userList', component: UserList },
    { path: '/movies', component: Movies },
    { path: '/param/:id', component: Param1 },
    { path: '/param', component: Param2 },
    { path: '/param2', component: Param3 },
    { path: '/param2', component: Param3 },
    { path: '/linkSendData', component: LinkSendData },
    { path: '/linkReceiveData', component: LinkReceiveData },
    {
        path: '/main', component: Main,
        children: [
            {
                path: 'article', component: Articles
            },
            {
                path: 'article/:id', component: Article
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router }