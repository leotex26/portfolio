<template>
  <section id="contact" class="contact-section">
    <h2>Contact</h2>

    <form class="contact-form" @submit.prevent="sendEmail">
      <input v-model="form.name" type="text" placeholder="Nom" required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <textarea v-model="form.message" placeholder="Message" rows="5" required></textarea>

      <button type="submit" :disabled="status === 'sending'">
        {{ status === 'sending' ? 'Envoi...' : 'Envoyer' }}
      </button>

      <p v-if="status === 'success'" class="feedback success">
        Message envoyé ! Je vous répondrai rapidement.
      </p>
      <p v-if="status === 'error'" class="feedback error">
        Une erreur est survenue. Réessayez ou contactez-moi directement par email.
      </p>
    </form>
  </section>
</template>

<script>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_o4q5wm4'
const TEMPLATE_ID = 'template_e7mgddj'
const PUBLIC_KEY = 'GNIDK9rhmGzKTTkQC'

export default {
  setup() {
    const form = reactive({ name: '', email: '', message: '' })
    const status = ref('idle') // idle | sending | success | error

    async function sendEmail() {
      status.value = 'sending'
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            name: form.name,
            email: form.email,
            message: form.message,
            title: 'Nouveau message', 
            time: new Date().toLocaleString('fr-FR')
          },
          PUBLIC_KEY
        )
        status.value = 'success'
        form.name = ''
        form.email = ''
        form.message = ''
      } catch (err) {
        console.error('Erreur EmailJS :', err)
        status.value = 'error'
      }
    }

    return { form, status, sendEmail }
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
  transition: opacity 0.2s ease;
}
.contact-form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.feedback {
  font-size: 0.9rem;
  margin-top: 8px;
}
.feedback.success { color: #8fd19e; }
.feedback.error { color: #e08a8a; }
</style>