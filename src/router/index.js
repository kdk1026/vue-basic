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
import Focus from "../pages/Focus.vue";
import TextArea from "../pages/TextArea.vue";
import CheckBox from "../pages/CheckBox.vue";
import Radio from "../pages/Radio.vue";
import Select from "../pages/Select.vue";
import InputFile from "../pages/InputFile.vue";
import VueSelect from "../pages/VueSelect.vue";
import VueCookies from "../pages/VueCookies.vue";
import RouterHistory from "../pages/RouterHistory.vue";
import RouterHistoryMove from "../pages/RouterHistoryMove.vue";
import FileDownload from "../pages/FileDownload.vue";
import FileUpload from "../pages/FileUpload.vue";
import Parent from "../pages/Parent.vue";
import Parent2 from "../pages/Parent.vue";

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
    },
    { path: '/focus', component: Focus },
    { path: '/textarea', component: TextArea },
    { path: '/checkbox', component: CheckBox },
    { path: '/radio', component: Radio },
    { path: '/select', component: Select },
    { path: '/inputFile', component: InputFile },
    { path: '/vue-multiselect', component: VueSelect },
    { path: '/vue-cookies', component: VueCookies },
    { path: '/routerHistory', component: RouterHistory },
    { path: '/routerHistoryMove', component: RouterHistoryMove },
    { path: '/fileDownload', component: FileDownload },
    { path: '/fileUpload', component: FileUpload },
    { path: '/parent', component: Parent },
    { path: '/parent2', component: Parent2 },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router }