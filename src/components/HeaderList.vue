<script setup>
const headers = ['TO DO', 'IN PROGRESS', 'QA READY', 'QA', 'RELEASE READY', 'DONE']
</script>

<template>
  <tr>
    <th v-for="(title, index) in headers" :key="index">{{ title }}</th>
  </tr>
</template>
