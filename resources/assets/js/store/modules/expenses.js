import * as types from '../mutation-types';

const state = {
    expenses: []
};

const getters = {
    expensesList: state => {
        return state.expenses;
    }
};

const mutations = {
    [types.ADD_EXPENSE](state, payload) {
        state.expenses.push(payload);
    },

    [types.GET_EXPENSES_LIST](state, payload) {
        state.expenses = payload;
    }
};

export default {
    state,
    getters,
    mutations
}