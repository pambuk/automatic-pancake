import Vue from 'vue';

export default {
    add(expense) {
        return Vue.http.post('/api/expenses', expense);
    },

    get() {
        return Vue.http.get('/api/expenses');
    }
}