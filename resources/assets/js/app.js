require('./bootstrap');

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Dashboard from './components/Dashboard.vue';
import Expenses from './components/Expenses.vue';
import store from './store';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
    request.headers.set('Authorization', 'Bearer ' + Laravel.apiToken);
    next();
});

const routes = [
    {path: '/', component: Dashboard},
    {path: '/expenses', component: Expenses}
];

const router = new VueRouter({routes});

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    store, router
});