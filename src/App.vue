<script setup>
import DragAndDrop from './components/DragAndDrop.vue'
import 'vidstack/bundle';
import { defineCustomElement,MediaCaptionsElement, MediaVideoLayoutElement } from "vidstack/elements";
import { onMounted ,ref} from 'vue';

defineCustomElement(MediaVideoLayoutElement);
const media = ref(null)

onMounted(()=>{
  console.log(MediaVideoLayoutElement)
})
</script>

<template>
 <media-player title="Sprite Fight" src="https://www.youtube.com/watch?v=57C_-iMlUCU" autoplay>
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
  <media-play-button class="media-button">
  <!-- See "Icons" component page for setup before using the following: -->
  <media-icon type="play" class="play-icon"></media-icon>
  <media-icon type="pause" class="pause-icon"></media-icon>
</media-play-button>
</media-player>
</template>

<style scoped>
media-player {
  width: 600px;
  height: 338px;
}


</style>
