<template>
  <article class="contact-card">
    <div class="contact-icon" :aria-hidden="true">
      <i :class="iconClass"></i>
    </div>
    
    <div class="contact-content">
      <h3 class="contact-title">{{ title }}</h3>
      <a 
        :href="href"
        :target="isExternal ? '_blank' : undefined"
        :rel="isExternal ? 'noopener noreferrer' : undefined"
        class="contact-link"
        :aria-label="ariaLabel"
        @click="$emit('track-click', type)"
      >
        {{ linkText }}
      </a>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['email', 'whatsapp', 'linkedin', 'github'].includes(value)
  },
  href: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    required: true
  },
  ariaLabel: {
    type: String,
    required: true
  }
})

defineEmits(['track-click'])

const iconClass = computed(() => {
  const icons = {
    email: 'fas fa-envelope',
    whatsapp: 'fab fa-whatsapp',
    linkedin: 'fab fa-linkedin',
    github: 'fab fa-github'
  }

  return icons[props.type] || 'fas fa-link'
})

const isExternal = computed(() => {
  return props.type !== 'email'
})
</script>

<style scoped>
.contact-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.contact-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: var(--primary-color);
}

.contact-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0 0 1rem 0;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.contact-link:hover {
  background: color-mix(in srgb, var(--primary-color) 85%, black);
  transform: translateY(-2px);
}

.contact-link:focus {
  outline: 3px solid rgba(var(--primary-color-rgb), 0.3);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .contact-card {
    padding: 1.5rem;
  }
  
  .contact-icon {
    width: 60px;
    height: 60px;
    font-size: 3.5rem;
  }
  
  .contact-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .contact-card {
    padding: 1rem;
  }
  
  .contact-icon {
    width: 50px;
    height: 50px;
    font-size: 3.5rem;
  }
  
  .contact-title {
    font-size: 1.1rem;
  }
  
  .contact-link {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
