<template>
  <div class="profile-image-container">
    <img 
      :src="src"
      :alt="alt"
      class="profile-photo"
      loading="lazy"
      @error="handleImageError"
      @load="handleImageLoad"
    />
    <div v-if="isLoading" class="image-placeholder" aria-hidden="true">
      <i class="fas fa-user"></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})

const isLoading = ref(true)

const handleImageError = () => {
  console.warn('Failed to load profile image')
  isLoading.value = false
}

const handleImageLoad = () => {
  isLoading.value = false
}
</script>

<style scoped>
.profile-image-container {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.profile-photo {
  min-width: 200px;
  min-height: 200px;
  max-width: 200px;
  max-height: 200px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.profile-photo:hover {
  transform: scale(1.05);
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.7);
  border: 4px solid rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .profile-photo,
  .image-placeholder {
    width: 150px;
    height: 150px;
  }
  
  .image-placeholder {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .profile-photo,
  .image-placeholder {
    width: 120px;
    height: 120px;
  }
  
  .image-placeholder {
    font-size: 2rem;
  }
}
</style>
