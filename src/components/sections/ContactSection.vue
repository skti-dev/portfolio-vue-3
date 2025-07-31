<template>
  <section id="contato" class="section contact-section" data-section="contact">
    <div class="container">
      <h2 class="section-title">{{ $t('sections.contact') }}</h2>
      <div class="contact-grid">
        <ContactCard
          type="email"
          :href="`mailto:${contact.email}`"
          :title="$t('contact.email')"
          :link-text="$t('contact.sendEmail')"
          :aria-label="`${$t('contact.sendEmail')} - ${contact.email}`"
          @track-click="$emit('track-contact-click', $event)"
        />
        
        <ContactCard
          type="whatsapp"
          :href="`https://wa.me/${contact.whatsapp}`"
          :title="$t('contact.whatsapp')"
          :link-text="$t('contact.sendMessage')"
          :aria-label="`${$t('contact.sendMessage')} - WhatsApp`"
          @track-click="$emit('track-contact-click', $event)"
        />
        
        <ContactCard
          type="linkedin"
          :href="contact.linkedin"
          :title="$t('contact.linkedin')"
          :link-text="$t('contact.viewProfile')"
          :aria-label="`${$t('contact.viewProfile')} - LinkedIn`"
          @track-click="$emit('track-contact-click', $event)"
        />
        
        <ContactCard
          type="github"
          :href="contact.github"
          :title="$t('contact.github')"
          :link-text="$t('contact.viewRepositories')"
          :aria-label="`${$t('contact.viewRepositories')} - GitHub`"
          @track-click="$emit('track-contact-click', $event)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactCard from '@/components/ContactCard.vue'

defineProps({
  contact: {
    type: Object,
    required: true,
    validator: (contact) => {
      return contact.email && contact.whatsapp && contact.linkedin && contact.github
    }
  }
})

defineEmits(['track-contact-click'])
</script>

<style scoped>
.contact-section {
  background-color: var(--background-secondary);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 3rem;
  font-weight: 700;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
