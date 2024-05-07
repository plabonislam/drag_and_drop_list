<script setup>
import DragAndDrop from './components/DragAndDrop.vue'
import 'vidstack/bundle';
import { defineCustomElement,MediaCaptionsElement, MediaVideoLayoutElement } from "vidstack/elements";
import { onMounted ,ref} from 'vue';

defineCustomElement(MediaVideoLayoutElement);
const media = ref(null)

const source = ref("https://www.youtube.com/watch?v=3XqpjLp16zA")
onMounted(()=>{
  console.log(MediaVideoLayoutElement)
})
</script>

<template>
  <div class="main">
  <div>
    <input type="text" class="input-box" v-model="source">
  </div>

 <media-player title="Sprite Fight" :src="source" autoplay>
  <media-provider>
    <media-poster
      src="https://files.vidstack.io/sprite-fight/poster.webp"
      alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
    ></media-poster>
  </media-provider>
  <media-gesture event="pointerup" action="toggle:paused"></media-gesture>
  <media-gesture event="dblpointerup" action="toggle:fullscreen"></media-gesture>
  <media-gesture event="pointerup" action="toggle:controls"></media-gesture>
  <media-gesture event="dblpointerup" action="seek:-15"></media-gesture>
  <media-gesture event="dblpointerup" action="seek:15"></media-gesture>
  <media-video-layout></media-video-layout>
  
</media-player>
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
