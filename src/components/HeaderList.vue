<script setup>
import {ref} from 'vue'
const headers = ['TO DO', 'IN PROGRESS']
const t1=ref('')
const t2=ref('')
</script>

<template>
  <div>
    <input type="text" name="t1" class="foo" v-model="t1" />
    <input type="text" name="t2" class="foo" v-model="t2" />
  </div>
  <tr>
    <th v-for="(title, index) in headers" :key="index">{{ title }}</th>
  </tr>
</template>
