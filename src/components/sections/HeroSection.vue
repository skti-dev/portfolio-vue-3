<template>
  <section id="inicio" class="hero" data-section="hero">
    <div class="container">
      <div class="hero-content">
        <ProfileImage 
          :src="profilePicture"
          :alt="$t('hero.profileAlt')"
        />
        <h1 class="hero-title">
          {{ $t('hero.greeting') }}
          <AnimatedName />
        </h1>
        <p class="hero-description">{{ $t('hero.description') }}</p>
        <div class="hero-actions">
          <button 
            class="btn btn-primary"
            @click="$emit('scroll-to', 'projetos')"
            :aria-label="$t('hero.viewProjectsLabel')"
          >
            {{ $t('hero.viewProjects') }}
          </button>
          <button 
            class="btn btn-secondary"
            @click="$emit('scroll-to', 'contato')"
            :aria-label="$t('hero.contactLabel')"
          >
            {{ $t('hero.contactMe') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedName from '@/components/AnimatedName.vue'
import ProfileImage from '@/components/ProfileImage.vue'

defineProps({
  profilePicture: {
    type: String,
    required: true
  }
})

defineEmits(['scroll-to'])
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-gradient);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 2rem 0 1rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: white;
  color: var(--primary-color);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: var(--primary-color);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 200px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
}
</style>
