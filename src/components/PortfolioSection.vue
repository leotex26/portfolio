<template>
  <div class="portfolio">
    <h2 class="title">Mon Portfolio</h2>

<section class="fullwidth">
  <div class="project_big" v-for="p in bigProjects" :key="p.id">
    <img :src="p.image" :alt="p.title" />

    <div class="project-text">
      <h3>{{ p.title }}</h3>

      <!-- Conteneur pour les logos -->
      <div class="logos">
        <img v-for="(logo, index) in p.logos" :key="index" :src="logo" :alt="p.title + ' logo'" />
      </div>

      <p>{{ p.text }}</p>
    </div>
  </div>
</section>


    <hr>

    <section class="grid">
      <div class="project_small d-flex flex-column align-items-center justify-content-center" v-for="p in smallProjects" :key="p.id">
        <img :src="p.image" :alt="p.title">
        <p>{{ p.title }}</p>
              <div class="logos">
              <img style="width: 100px; height: 100px;" v-for="(logo, index) in p.logos" :key="index" :src="logo" :alt="p.title + ' logo'" />
              </div>
      </div>
    </section>
  </div>
</template>

<script>
import { bigProjects, smallProjects } from '../data/projects.js'

export default {
  name: 'PortfolioSection',
  data() {
    return {
      bigProjects,
      smallProjects
    }
  }
}
</script>
