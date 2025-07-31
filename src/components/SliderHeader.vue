<template>
  <div class="slider-header">
    <h3>{{ $t('certificates.title') }}</h3>
    <div class="slider-controls">
      <button 
        class="slider-btn prev" 
        @click="$emit('previous')" 
        :disabled="currentIndex === 0"
        :aria-label="$t('certificates.previous')"
      >
        <i class="fas fa-chevron-left" aria-hidden="true"></i>
      </button>
      <span class="slider-counter" aria-live="polite">
        {{ currentIndex + 1 }} / {{ totalSlides }}
      </span>
      <button 
        class="slider-btn next" 
        @click="$emit('next')" 
        :disabled="currentIndex >= totalSlides - 1"
        :aria-label="$t('certificates.next')"
      >
        <i class="fas fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentIndex: {
    type: Number,
    required: true
  },
  totalSlides: {
    type: Number,
    required: true
  }
})

defineEmits(['previous', 'next'])
</script>

<style scoped>
.slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  transition: all 0.3s ease;
}

.slider-header h3 {
  margin: 0;
  color: var(--primary-color);
  font-size: 1.8rem;
  transition: font-size 0.3s ease;
}

.slider-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
}

@media (max-width: 480px) {
  .slider-header {
    margin-bottom: 1.5rem;
    flex-direction: column;
    text-align: center;
  }
  
  .slider-header h3 {
    font-size: 1.4rem;
  }
  
  .slider-controls {
    gap: 0.75rem;
  }
}

@media (min-width: 768px) {
  .slider-header h3 {
    font-size: 2rem;
  }
}

@media (min-width: 1024px) {
  .slider-header h3 {
    font-size: 2.2rem;
  }
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
</style>
