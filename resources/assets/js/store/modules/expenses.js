import * as types from '../mutation-types';

const state = {
    expenses: []
};

const getters = {

};

const mutations = {
    [types.ADD_EXPENSE](state, payload) {
        state.expenses.push(payload);
    }
};

export default {
    state,
    getters,
    mutations
}