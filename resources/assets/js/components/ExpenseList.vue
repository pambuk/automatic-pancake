<template>
    <div>
        <div class="panel-body">

            <ul>
                <li v-for="item in expensesList">
                    {{ item.value }}
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
//    import expenses from '../api/expenses';

    export default {
        data() {
            return {
                list: [{value: 1}, {value: 2}]
            }
        },
        computed: {
            ...mapGetters(['expensesList'])
        },
        methods: {
            ...mapActions(['fetchExpenses'])
        },
        mounted() {
            this.fetchExpenses();
//            expenses
//                .get()
//                .then(response => {
//                    this.list = response.data.expenses;
//                })
        }
    }
</script>