<template>
    <div class="panel panel-default">
        <div class="panel-heading">Expenses</div>
        <div class="panel-body">

            <div @keyup.enter="add(expense); expense.value = ''" class="form-inline">
                <input v-model="expense.value" type="text" placeholder="Value" class="form-control col-md-3"/>
                <input v-model="expense.date" type="date" placeholder="Y-m-d" class="form-control col-md-2"/>
                <button @click="add(expense); expense.value = ''" class="btn btn-success">Add</button>
            </div>

        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import moment from 'moment';

    export default {
        data() {
            return {
                expense: {
                    value: '',
                    date: moment().format("YYYY-MM-DD")
                }
            };
        },
        methods: {
            ...mapActions(['add'])
        }
    }
</script>