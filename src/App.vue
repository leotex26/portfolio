<template>
  <Navbar :active="activeSection" @scroll-to="scrollToSection" />

  <div class="container">
    <div class="left">
      <h1>PORTFOLIO</h1>
      <InteractivePlant />
    </div>

    <div class="right">
      <div class="clock-container">
        <div class="pulse-circle"></div>
        <div class="clock">{{ time }}</div>
      </div>

      <div class="intro">
        <h2 class="glow">LÉO TEXIER</h2>
        <p class="subtitle">Développeur web et web mobile</p>
        <p class="tagline">informatique responsable</p>
      </div>

      <div class="fireflies">
        <div class="firefly" v-for="n in 9" :key="n"></div>
      </div>
    </div>
  </div>

  <div class="separator"></div>
  <div class="separator"></div>

  <div ref="portfolioRef" id="projets" class="portfolio-section hidden">
    <PortfolioSection />
  </div>

  <div ref="aproposRef">
    <AboutSection />
  </div>

  <div ref="contactRef">
    <ContactSection />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import PortfolioSection from './components/PortfolioSection.vue'
import InteractivePlant from './components/InteractivePlant.vue'
import Navbar from './components/Navbar.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import './style.css'

export default {
  components: {
    PortfolioSection,
    InteractivePlant,
    Navbar,
    AboutSection,
    ContactSection
  },
  setup() {
    const time = ref(new Date().toLocaleTimeString())
    const portfolioRef = ref(null)
    const aproposRef = ref(null)
    const contactRef = ref(null)
    const activeSection = ref('projets')
    let timer = null

    const sectionRefs = { projets: portfolioRef, apropos: aproposRef, contact: contactRef }

    function scrollToSection(id) {
      sectionRefs[id]?.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      activeSection.value = id
    }

    function handleContactSubmit(form) {
      console.log('Formulaire de contact :', form)
      // à connecter plus tard à un service d'envoi (mailto, API, etc.)
    }

    onMounted(() => {
      timer = setInterval(() => {
        time.value = new Date().toLocaleTimeString()
      }, 1000)

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
      if (portfolioRef.value) observer.observe(portfolioRef.value)
    })

    onUnmounted(() => {
      if (timer) clearInterval(timer)
    })

    return { time, portfolioRef, aproposRef, contactRef, activeSection, scrollToSection, handleContactSubmit }
  }
}
</script>