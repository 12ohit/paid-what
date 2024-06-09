<script setup lang="ts">
import LogList from './LogList.vue';
import { useLogStore } from '@/stores/log';

const logStore = useLogStore();
</script>
<template>
  <span style="font-size: 2rem">All logs:</span>
  <div>
    <LogList :log-list="logStore.log" />
  </div>
</template>
