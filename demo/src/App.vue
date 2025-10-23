<template>
  <div class="container">
    <!-- Section gauche -->
    <div class="left">
      <h1>Bienvenue</h1>
    </div>

    <!-- Section droite -->
    <div class="right">
      <div class="clock-container">
        <div class="pulse-circle"></div>
        <div class="clock">{{ time }}</div>
      </div>
      <h2>AQUARIUM</h2>
      <p>Un voyage entre terre et mer</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import './style.css'  // <-- On importe le CSS ici

export default {
  setup() {
    const time = ref(new Date().toLocaleTimeString())

    onMounted(() => {
      setInterval(() => {
        time.value = new Date().toLocaleTimeString()
      }, 1000)
    })

    return { time }
  }
}
</script>

<style>
/* Vide, tout le CSS est dans style.css */
</style>
