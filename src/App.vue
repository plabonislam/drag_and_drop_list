<script setup>
import DragAndDrop from './components/DragAndDrop.vue'
import User from './components/UserList.vue'
</script>

<template>
  <div class="main">
 
<User />
<DragAndDrop />
</div>
</template>

<style scoped>
media-player {
  width: 600px;
  height: 338px;
}

.input-box{
  border: 5px dotted black;
  padding: 10px 5px;
  min-width: 600px;
  margin-bottom: 20px;
}
.main{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
