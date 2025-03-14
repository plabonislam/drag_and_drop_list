<script setup>
import { ref } from 'vue'
import HeaderList from './HeaderList.vue'

const dragItem = ref(null)
const dragOverItem = ref(null)

const items = ref([
  { fullname: 'first', age: 20 },
  { fullname: 'second', age: 20 },
  { fullname: 'third', age: 20 },
  {
    fullname: 'fourth',
    age: 20
  }
])

const props = defineProps({
  title: {
    type: String,
    default: 'Drag and Drop List'
  }
})

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

</script>
<template>
  <p class="title">{{ props.title }}</p>
  <button disabled="true" class="bar" draggable="true">btn</button>
  <table style="width: 100%">
    <HeaderList />
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
