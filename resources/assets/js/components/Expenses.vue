<template>
    <div class="panel panel-default">
        <div class="panel-heading">Expenses</div>
        <expense-add></expense-add>
        <expense-list></expense-list>
    </div>
</template>

<script>
    import ExpenseList from './ExpenseList.vue';
    import ExpenseAdd from './ExpenseAdd.vue';

    export default {
        components: {
            'expense-list': ExpenseList,
            'expense-add': ExpenseAdd
        }
    }
</script>