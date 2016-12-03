<template>
    <div>
        <div class="panel-body">

            <ul>
                <li v-for="item in list">
                    {{ item.value }}
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import expenses from '../api/expenses';

    export default {
        data() {
            return {
                list: [{value: 1}, {value: 2}]
            }
        },
        mounted() {
            expenses
                .get()
                .then(response => {
                    this.list = response.data.expenses;
                })
        }
    }
</script>