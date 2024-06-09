import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IFormattedLog } from '@/model/common.model';

export const useLogStore = defineStore('log', () => {
  /* States */
  const log = ref([] as IFormattedLog[]);

  /* Getters */
  const doubleCount = computed(() => console.log('Help'));

  /* Actions */
  function addToLog(newLog: IFormattedLog) {
    log.value.push(newLog);
  }

  return { log, doubleCount, addToLog };
});
