<script setup lang="ts">
import type { ILog } from '@/model/common.model';

const props = defineProps<{
  logList: ILog[];
}>();
</script>
<template>
  <table>
    <thead>
      <th>Amount</th>
      <th>Who Bought</th>
      <th>Who Paid</th>
      <th>Buy Date</th>
      <th>Item name</th>
    </thead>
    <tbody>
      <tr v-for="(item, index) in props.logList" :key="index">
        <td>{{ item.amount }}</td>
        <td>{{ item.whoBought }}</td>
        <td>{{ item.whoPaid }}</td>
        <td>{{ item.buyDate.toLocaleString() }}</td>
        <td>{{ item.itemName }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

th,
td {
  padding: 0.5rem;
}
</style>
