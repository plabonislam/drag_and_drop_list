<script setup>
import { ref } from 'vue'

const users = ref([])
const loading = ref(false)

const fetchUsers = async () => {
  loading.value = true
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) throw new Error('Failed to fetch')
    const data = await response.json()
    users.value = data.map((user) => ({
      ...user,
      age: user.age ?? 20 // Default age to 20 if missing
    }))
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <button @click="fetchUsers">Fetch Users</button>
    <p v-if="loading">Loading...</p>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.name }} - {{ user.age }} years old
      </li>
    </ul>
  </div>
</template>
