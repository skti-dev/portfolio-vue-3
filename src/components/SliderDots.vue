<template>
  <div class="slider-dots">
    <button
      v-for="(_, index) in totalSlides"
      :key="index"
      class="dot"
      :class="{ active: index === currentIndex }"
      @click="$emit('go-to-slide', index)"
      :aria-label="`${$t('certificates.goToSlide')} ${index + 1}`"
    ></button>
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

defineEmits(['go-to-slide'])
</script>

<style scoped>
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
</style>
