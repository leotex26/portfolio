<template>
  <nav class="navbar">
    <ul>
      <li>
        <a href="#projets" :class="{ active: active === 'projets' }"
           @click.prevent="$emit('scroll-to', 'projets')">Projets</a>
      </li>
      <li>
        <a href="#apropos" :class="{ active: active === 'apropos' }"
           @click.prevent="$emit('scroll-to', 'apropos')">À propos</a>
      </li>
      <li>
        <a href="#contact" :class="{ active: active === 'contact' }"
           @click.prevent="$emit('scroll-to', 'contact')">Contact</a>
      </li>
      <!-- <li><a href="#" class="disabled">Blog</a></li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  props: { active: { type: String, default: 'projets' } },
  emits: ['scroll-to']
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  padding: 24px 0;
  background: transparent;
}

.navbar ul {
  display: flex;
  justify-content: center;
  gap: 48px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar a {
  color: #f4efe4;
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  padding-bottom: 4px;
  opacity: 0.85;
  transition: opacity 0.3s ease;
}

.navbar a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #f4efe4;
  transition: width 0.3s ease;
}

.navbar a:hover,
.navbar a.active {
  opacity: 1;
}

.navbar a:hover::after,
.navbar a.active::after {
  width: 100%;
}

.navbar a.disabled {
  opacity: 0.4;
  cursor: default;
}
</style>