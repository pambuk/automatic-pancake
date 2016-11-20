import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import expenses from './modules/expenses';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        expenses
    }
});
