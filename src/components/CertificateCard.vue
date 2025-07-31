<template>
  <article class="certificate-card">
    <header class="certificate-header">
      <div class="certificate-icon" :aria-label="$t('certificates.icon')">
        <i class="fas fa-certificate" aria-hidden="true"></i>
      </div>
      <span class="certificate-type" :class="{ trilha: certificate.type === 'Trilha' }">
        {{ certificate.type }}
      </span>
    </header>
    
    <div class="certificate-body">
      <h4 class="certificate-title">{{ certificate.title }}</h4>
      <p class="certificate-institution" :class="institutionClass">
        {{ certificate.institution }}
      </p>
      <div class="certificate-details">
        <span class="certificate-hours">{{ certificate.hours }}h</span>
        <time class="certificate-date" :datetime="formatDatetime(certificate.date)">
          {{ certificate.date }}
        </time>
      </div>
    </div>
    
    <footer class="certificate-footer">
      <a 
        :href="certificate.url" 
        target="_blank" 
        rel="noopener noreferrer"
        class="certificate-link"
        :aria-label="`${$t('certificates.verify')} ${certificate.title}`"
      >
        {{ $t('certificates.verify') }}
        <i class="fas fa-external-link-alt" aria-hidden="true"></i>
      </a>
    </footer>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  certificate: {
    type: Object,
    required: true,
    validator: (cert) => {
      return cert.id && cert.title && cert.institution && cert.url
    }
  }
})

const institutionClass = computed(() => {
  const institution = props.certificate.institution.toLowerCase()
  if (institution.includes('asimov')) return 'asimov'
  if (institution.includes('alura')) return 'alura'
  if (institution.includes('udemy')) return 'udemy'
  return ''
})

const formatDatetime = (dateString) => {
  try {
    const [day, month, year] = dateString.split('/')
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  } catch {
    return dateString
  }
}
</script>

<style scoped>
.certificate-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
  height: 280px;
  display: flex;
  flex-direction: column;
  min-height: 250px;
}

@media (max-width: 480px) {
  .certificate-card {
    padding: 1rem;
    height: auto;
    min-height: 220px;
  }
}

@media (min-width: 768px) {
  .certificate-card {
    height: 300px;
    padding: 1.75rem;
  }
}

@media (min-width: 1024px) {
  .certificate-card {
    height: 320px;
    padding: 2rem;
  }
}

.certificate-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

.certificate-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.certificate-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary-color) 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
}

.certificate-type {
  background: #f0f9ff;
  color: #0369a1;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.certificate-type.trilha {
  background: #fef3c7;
  color: #d97706;
}

.certificate-body {
  flex: 1;
  margin-bottom: 1rem;
}

.certificate-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.certificate-institution {
  color: var(--primary-color);
  font-weight: 600;
  margin: 0 0 1rem 0;
  font-size: 0.95rem;
}

.certificate-institution.alura {
  color: #ffba05;
}

.certificate-institution.udemy {
  color: #892de1;
}

.certificate-institution.asimov {
  color: var(--primary-color);
}

.certificate-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
}

.certificate-hours {
  background: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 600;
}

.certificate-date {
  color: #6b7280;
  font-size: 0.85rem;
  font-weight: 500;
}

.certificate-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
}

.certificate-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.certificate-link:hover {
  color: #4c1d95;
  transform: translateX(2px);
}

.certificate-link i {
  font-size: 0.8rem;
}
</style>
