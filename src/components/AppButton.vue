<template>
  <button :class="{ loading: isLoading }" @click="handleClick" :disabled="isLoading">
    <span v-if="isLoading">Loading...</span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Click me',
    required: true
  }
})

const emit = defineEmits(['loaded'])
const isLoading = ref(false)

const handleClick = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    emit('loaded')
  }, 2000)
}
</script>

<style scoped>
.loading {
  background-color: gray;
}
</style>
