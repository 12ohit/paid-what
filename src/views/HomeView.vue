<script setup lang="ts">
import { ref } from 'vue';
import { useLogStore } from '@/stores/log';
import type { IFormattedLog, ILog } from '@/model/common.model';
import LogWrapper from '@/components/LogWrapper.vue';

const formData = ref<ILog>({
  amount: 0,
  whoBought: '',
  whoPaid: '',
  buyDate: '',
  itemName: ''
});

const logStore = useLogStore();

const addToLog = () => {
  const formattedLog = {
    ...formData.value
  } as unknown as IFormattedLog;

  formattedLog.buyDate = new Date(formData.value.buyDate);
  logStore.addToLog(formattedLog);

  formData.value = {
    amount: 0,
    whoBought: '',
    whoPaid: '',
    buyDate: '',
    itemName: ''
  };
};
</script>
<template>
  <form @submit.prevent="addToLog">
    <div>
      <label for="amount">Amount: </label>
      <input id="amount" v-model="formData.amount" type="number" />
    </div>
    <div>
      <label for="who-bought">Who bought: </label>
      <input id="who-bought" v-model="formData.whoBought" />
    </div>
    <div>
      <label for="who-paid">Who paid: </label>
      <input id="who-paid" v-model="formData.whoPaid" />
    </div>
    <div>
      <label for="buy-date">Buy date: </label>
      <input id="buy-date" type="datetime-local" v-model="formData.buyDate" />
    </div>
    <div>
      <label for="item-name">Item name: </label>
      <input id="item-name" v-model="formData.itemName" />
    </div>
    <div>
      <button type="submit">Add entry</button>
    </div>
  </form>
  <br />
  <LogWrapper v-if="logStore.log.length > 0" />
</template>

<style>
.p-float-label {
  margin: 1.5rem;
}
</style>
