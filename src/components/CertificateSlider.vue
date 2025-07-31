<template>
  <div class="certificate-slider">
    <SliderHeader 
      :current-index="currentIndex"
      :total-slides="totalSlides"
      @previous="previousSlide"
      @next="nextSlide"
    />
    
    <div class="slider-container">
      <div 
        ref="sliderTrack"
        class="slider-track" 
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="(slide, index) in slides" 
          :key="index" 
          class="slide"
        >
          <div class="certificates-grid">
            <CertificateCard
              v-for="certificate in slide" 
              :key="certificate.id"
              :certificate="certificate"
            />
          </div>
        </div>
      </div>
    </div>
    
    <SliderDots
      :total-slides="totalSlides"
      :current-index="currentIndex"
      @go-to-slide="goToSlide"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import SliderHeader from './SliderHeader.vue'
import CertificateCard from './CertificateCard.vue'
import SliderDots from './SliderDots.vue'
import { useCertificateData } from '@/composables/useCertificateData'
import { useSlider } from '@/composables/useSlider'
import { useWindowSize } from '@/composables/useWindowSize'

const { certificates } = useCertificateData()
const { width: windowWidth } = useWindowSize()

const sliderTrack = ref(null)

const cardsPerSlide = computed(() => {
  if (windowWidth.value < 768) return 1
  if (windowWidth.value < 1024) return 2
  return 3
})

const slides = computed(() => {
  const slides = []
  const cardsPerSlideValue = cardsPerSlide.value
  
  for (let i = 0; i < certificates.value.length; i += cardsPerSlideValue) {
    const slide = certificates.value.slice(i, i + cardsPerSlideValue)
    slides.push(slide)
  }
  
  return slides
})

const totalSlides = computed(() => slides.value.length)

const {
  currentIndex,
  nextSlide,
  previousSlide,
  goToSlide
} = useSlider(totalSlides)

// Gerenciar transições suaves durante redimensionamento
watch(windowWidth, () => {
  const slider = sliderTrack.value
  if (slider) {
    slider.style.transition = 'transform 0.3s ease'
    setTimeout(() => {
      slider.style.transition = 'transform 0.4s ease'
    }, 300)
  }
})
</script>

<style scoped>
.certificate-slider {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.slider-container {
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  padding: 5px 0;
}

.slider-track {
  display: flex;
  transition: transform 0.4s ease;
}

.slide {
  width: 100%;
  max-width: 100%;
  flex-shrink: 0;
}

.certificates-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  transition: all 0.3s ease;
}

@media (max-width: 767px) {
  .certificates-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .certificates-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .certificates-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}
</style>
