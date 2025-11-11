<!-- App.vue -->
<template>
  <div class="container">
    <!-- ===================== -->
    <!-- SECTION GAUCHE        -->
    <!-- ===================== -->
    <div class="left">
      <h1>PORTFOLIO</h1>
    </div>

    <!-- ===================== -->
    <!-- SECTION DROITE        -->
    <!-- ===================== -->
<div class="right">
  <div class="clock-container">
    <div class="pulse-circle"></div>
    <div class="clock">{{ time }}</div>
  </div>

  <!-- bloc texte avec effet verre dépoli -->
  <div class="intro">
    <h2 class="glow">LÉO TEXIER</h2>
    <p class="subtitle">Développeur web et web mobile</p>
    <p class="tagline">informatique responsable</p>
  </div>

  <div class="fireflies">
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
</div>
</div>
</div>

      <!-- ===================== -->
    <!-- SECTION SEPARATOR        -->
    <!-- ===================== -->

      <div class="separator">
      </div>

            <div class="separator">
      </div>

  <!-- ===================== -->
  <!-- SECTION PORTFOLIO     -->
  <!-- ===================== -->
  <div ref="portfolioRef" class="portfolio-section hidden">
    <PortfolioSection />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import PortfolioSection from './components/PortfolioSection.vue'
import './style.css'

export default {
  components: { PortfolioSection },
  setup() {
    const time = ref(new Date().toLocaleTimeString())
    const portfolioRef = ref(null)

    // Mise à jour de l'heure chaque seconde
    onMounted(() => {
      setInterval(() => {
        time.value = new Date().toLocaleTimeString()
      }, 1000)

      // Animation d'apparition du portfolio au scroll
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 }
      )

      if (portfolioRef.value) {
        observer.observe(portfolioRef.value)
      }
    })

    return { time, portfolioRef }
  }
}
</script>

