require('./bootstrap');

import App from './components/App.vue';

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    mounted() {
        this.$http.get('/api/user').then(response => {
            console.log(response);
        });
    }
});