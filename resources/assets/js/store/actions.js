import * as types from './mutation-types';
import ExpensesService from '../api/expenses';

export const add = ({commit}, payload) => {
    ExpensesService
        .add(payload)
        .then(response => {
            commit(types.ADD_EXPENSE, response.data.expense);
        })
        .catch(response => {
            console.log('catch', response);
        });
};

export const fetchExpenses = ({commit}) => {
    ExpensesService
        .get()
        .then(response => {
            commit(types.GET_EXPENSES_LIST, response.data.expenses);
        });
};