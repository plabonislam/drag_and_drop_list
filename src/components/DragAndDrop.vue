<script setup>
import { ref } from 'vue'

const dragItem = ref(null)
const dragOverItem = ref(null)

const items = ref([
  { fullname: 'first', age: 20 },
  { fullname: 'second', age: 40 },
  { fullname: 'third', age: 60 },
  { fullname: 'fourth', age: 10 }
])

const onDragStart = (e) => {
  console.log('start', e.target.id)
  dragItem.value = e.target.id
}

const onDragEnter = (e) => {
  console.log('enter', e.currentTarget.id)
  dragOverItem.value = e.currentTarget.id
}

const onDragend = (e) => {
  const copyItems = [...items.value]
  const dragItemContent = copyItems[dragItem.value]
  copyItems.splice(dragItem.value, 1)
  copyItems.splice(dragOverItem.value, 0, dragItemContent)
  items.value = [...copyItems]
}
</script>
<template>
  <table style="width: 100%">
    <tr>
      <th>Company</th>
      <th>Contact</th>
    </tr>
    <tr
      v-for="(item, index) in items"
      :key="index"
      :id="index"
      draggable="true"
      @dragstart="onDragStart"
      @dragenter="onDragEnter"
      @dragend="onDragend"
    >
      <td>{{ item.fullname }}</td>
      <td>{{ item.age }}</td>
    </tr>
  </table>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  text-align: center;
}
</style>
