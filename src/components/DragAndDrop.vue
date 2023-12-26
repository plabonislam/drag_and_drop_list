<script setup>
import { ref } from 'vue'

const dragItem = ref(null)
const dragOverItem = ref(null)

const items = ref([
  { fullname: 'first', age: 20, age: 20, age: 20, age: 20, age: 20 },
  { fullname: 'second', age: 20, age: 20, age: 20, age: 20, age: 20 },
  { fullname: 'third', age: 20, age: 20, age: 20, age: 20, age: 20 },
  {
    fullname: 'fourth',
    age: 2000000000000000,
    age: 2000000000000000,
    age: 20,
    age: 20,
    age: 2000000000000000
  }
])

const onDragStart = (e) => {
  dragItem.value = e.target.id
}

const onDragEnter = (e) => {
  dragOverItem.value = e.currentTarget.id
}

const onDragend = (e) => {
  const copyItems = [...items.value]
  const dragItemContent = copyItems[dragItem.value]
  copyItems.splice(dragItem.value, 1)
  copyItems.splice(dragOverItem.value, 0, dragItemContent)
  items.value = [...copyItems]
}

const header = ['TO DO', 'IN PROGRESS', 'QA READY', 'QA', 'RELEASE READY', 'DONE']
</script>
<template>
  <p>Drag and drop list view</p>
  <button disabled="true" class="bar" draggable=true>btn</button>
  <table style="width: 100%">
    <tr>
      <th v-for="(title, index) in header" :key="index">{{ title }}</th>
    </tr>
    <tr
      v-for="(item, index) in items"
      :key="index"
      :id="index"
      draggable="true"
      disabled="true"
      @dragstart="onDragStart"
      @dragenter="onDragEnter"
      @dragend="onDragend"
    >
      <td>{{ item.fullname }}</td>
      <td>{{ item.age }}</td>
      <td>{{ item.age }}</td>
      <td>{{ item.age }}</td>
      <td>{{ item.age }}</td>
      <td>{{ item.age }}</td>
    </tr>
  </table>
</template>

<style scoped>
th,
td {
  border: 1px solid black;
  text-align: center;
  padding: 10px 10px;
  width: 400px;
}

td:draggable {
  opacity: 0.5;
  background: red;
}
</style>