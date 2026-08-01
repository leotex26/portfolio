<!-- components/ContactSection.vue -->
<template>
  <section id="contact" class="contact-section">
    <h2>Contact</h2>
    <form class="contact-form" @submit.prevent="$emit('submit', form)">
      <input v-model="form.name" type="text" placeholder="Nom" required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <textarea v-model="form.message" placeholder="Message" rows="5" required></textarea>
      <button type="submit">Envoyer</button>
    </form>
  </section>
</template>


<script>
import { reactive } from 'vue'
export default {
  emits: ['submit'],
  setup() {
    const form = reactive({ name: '', email: '', message: '' })
    return { form }
  }
}
</script>

<style scoped>
.contact-section {
  padding: 120px 10%;
  text-align: center;
}
.contact-form {
  max-width: 480px;
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.contact-form input,
.contact-form textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 12px;
  color: inherit;
  font-family: 'Poppins', sans-serif;
}
.contact-form button {
  padding: 12px;
  background: #f4efe4;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 1px;
}
</style>