<template>
  <div class="certificate-slider">
    <div class="slider-header">
      <h3>{{ $t('certificates.title') }}</h3>
      <div class="slider-controls">
        <button 
          class="slider-btn prev" 
          @click="previousSlide" 
          :disabled="currentIndex === 0"
          :aria-label="$t('certificates.previous')"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <span class="slider-counter">
          {{ currentIndex + 1 }} / {{ totalSlides }}
        </span>
        <button 
          class="slider-btn next" 
          @click="nextSlide" 
          :disabled="currentIndex >= totalSlides - 1"
          :aria-label="$t('certificates.next')"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
    
    <div class="slider-container">
      <div class="slider-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div 
          v-for="(slide, index) in slides" 
          :key="index" 
          class="slide"
        >
          <div class="certificates-grid">
            <div 
              v-for="certificate in slide" 
              :key="certificate.id" 
              class="certificate-card"
            >
              <div class="certificate-header">
                <div class="certificate-icon">
                  <i class="fas fa-certificate"></i>
                </div>
                <div class="certificate-type" :class="{ trilha: certificate.type === 'Trilha' }">{{ certificate.type }}</div>
              </div>
              
              <div class="certificate-body">
                <h4 class="certificate-title">{{ certificate.title }}</h4>
                <p class="certificate-institution" :class="getInstitutionClass(certificate.institution)">{{ certificate.institution }}</p>
                <div class="certificate-details">
                  <span class="certificate-hours">{{ certificate.hours }}h</span>
                  <span class="certificate-date">{{ certificate.date }}</span>
                </div>
              </div>
              
              <div class="certificate-footer">
                <a 
                  :href="certificate.url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="certificate-link"
                >
                  {{ $t('certificates.verify') }}
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="slider-dots">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        class="dot"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
        :aria-label="`${$t('certificates.goToSlide')} ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CertificateSlider',
  data() {
    return {
      currentIndex: 0,
      certificates: [
        {
          id: '0049aa12-2d4f-492e-9957-86254c66bb3c',
          title: 'Aplicações IA: Criação de Agents com LangChain',
          type: 'Trilha',
          institution: 'Asimov Academy',
          hours: 70,
          date: '29/05/2025',
          url: 'https://hub.asimov.academy/validar-certificado/0049aa12-2d4f-492e-9957-86254c66bb3c/'
        },
        {
          id: '0a724ce3-f374-45de-9a84-829a2f3961d6',
          title: 'Engenharia de Prompts',
          type: 'Curso',
          institution: 'Asimov Academy',
          hours: 5,
          date: '20/05/2025',
          url: 'https://hub.asimov.academy/validar-certificado/0a724ce3-f374-45de-9a84-829a2f3961d6/'
        },
        {
          id: '42ba4c8d-209a-4c04-956d-e9b621733abb',
          title: 'Criando Multi Agent Systems com CrewAI',
          type: 'Curso',
          institution: 'Asimov Academy',
          hours: 7,
          date: '09/07/2025',
          url: 'https://hub.asimov.academy/validar-certificado/42ba4c8d-209a-4c04-956d-e9b621733abb/'
        },
        {
          id: 'd55c88f4-5393-4c0d-9075-bac6cceb524a',
          title: 'Aplicações de IA com LangChain',
          type: 'Curso',
          institution: 'Asimov Academy',
          hours: 16,
          date: '22/05/2025',
          url: 'https://hub.asimov.academy/validar-certificado/d55c88f4-5393-4c0d-9075-bac6cceb524a/'
        },
        {
          id: '052debca-7fa6-4837-bcab-074f786364b1',
          title: 'Agents de IA com Python e LangChain',
          type: 'Curso',
          institution: 'Asimov Academy',
          hours: 13,
          date: '29/05/2025',
          url: 'https://hub.asimov.academy/validar-certificado/052debca-7fa6-4837-bcab-074f786364b1/'
        },
        {
          id: '31941565-cfc0-44b0-8dbb-0a9f545471da',
          title: 'React: Abstraindo seu CSS com Styled Components',
          type: 'Curso',
          institution: 'Alura',
          hours: 6,
          date: '17/11/2022',
          url: 'https://cursos.alura.com.br/certificate/31941565-cfc0-44b0-8dbb-0a9f545471da'
        },
        {
          id: 'UC-W7TP88QP',
          title: 'Desenvolvimento Web Completo',
          type: 'Curso',
          institution: 'Udemy',
          hours: 40,
          date: '2023',
          url: 'https://www.udemy.com/certificate/UC-W7TP88QP/'
        },
        {
          id: 'UC-7d96b532-259e-4002-ba9e-51b217734e53',
          title: 'JavaScript Moderno e Avançado',
          type: 'Curso',
          institution: 'Udemy',
          hours: 25,
          date: '2023',
          url: 'https://www.udemy.com/certificate/UC-7d96b532-259e-4002-ba9e-51b217734e53/'
        }
      ]
    }
  },
  computed: {
    slides() {
      const slides = []
      const cardsPerSlide = this.getCardsPerSlide()
      
      for (let i = 0; i < this.certificates.length; i += cardsPerSlide) {
        slides.push(this.certificates.slice(i, i + cardsPerSlide))
      }
      
      return slides
    },
    totalSlides() {
      return this.slides.length
    }
  },
  methods: {
    getCardsPerSlide() {
      // Mobile: 1 card, Tablet: 2 cards, Desktop: 3 cards
      if (window.innerWidth < 768) return 1
      if (window.innerWidth < 1024) return 2
      return 3
    },
    nextSlide() {
      if (this.currentIndex < this.totalSlides - 1) {
        this.currentIndex++
      }
    },
    previousSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    goToSlide(index) {
      this.currentIndex = index
    },
    getInstitutionClass(institution) {
      if (institution.includes('Asimov')) return 'asimov'
      if (institution.includes('Alura')) return 'alura'
      if (institution.includes('Udemy')) return 'udemy'
      return ''
    },
    handleResize() {
      // Reset to first slide when screen size changes
      this.currentIndex = 0
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>
.certificate-slider {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.slider-header h3 {
  margin: 0;
  color: var(--primary-color);
  font-size: 1.8rem;
}

.slider-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.slider-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid var(--primary-color);
  background: transparent;
  color: var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.slider-btn:hover:not(:disabled) {
  background: var(--primary-color);
  color: white;
  transform: scale(1.1);
}

.slider-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-counter {
  font-weight: 600;
  color: var(--text-color);
  min-width: 60px;
  text-align: center;
}

.slider-container {
  overflow: hidden;
  border-radius: 12px;
  position: relative;
}

.slider-track {
  display: flex;
  transition: transform 0.4s ease;
}

.slide {
  min-width: 100%;
  flex-shrink: 0;
}

.certificates-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.certificate-institution {
  color: var(--primary-color);
  font-weight: 600;
  margin: 0 0 1rem 0;
  font-size: 0.95rem;
}

.certificate-institution.alura {
  color: #0070f3;
}

.certificate-institution.udemy {
  color: #a435f0;
}

.certificate-institution.asimov {
  color: var(--primary-color);
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

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #d1d5db;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: var(--primary-color);
  transform: scale(1.2);
}

.dot:hover {
  background: var(--primary-color);
  opacity: 0.7;
}

/* Responsive Design */
@media (max-width: 767px) {
  .slider-header {
    flex-direction: column;
    text-align: center;
  }
  
  .slider-header h3 {
    font-size: 1.5rem;
  }
  
  .certificates-grid {
    grid-template-columns: 1fr;
  }
  
  .certificate-card {
    min-height: 250px;
  }
  
  .slider-controls {
    order: -1;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .certificates-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .certificates-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
