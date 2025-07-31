<template>
  <article class="project-card">
    <header class="card-header">
      <h3 class="card-title">{{ $t(`projects.${project.id}.title`) }}</h3>
      <div class="tech-stack" v-if="project.tech">
        <span 
          v-for="tech in project.tech" 
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>
    </header>
    
    <div class="card-body">
      <p class="card-description">{{ $t(`projects.${project.id}.description`) }}</p>
    </div>
    
    <footer class="card-footer">
      <a 
        :href="project.link" 
        target="_blank" 
        rel="noopener noreferrer"
        class="card-link"
        :aria-label="`${$t('buttons.viewProject')} ${$t(`projects.${project.id}.title`)}`"
        @click="$emit('track-click', project.id)"
      >
        <i class="fas fa-external-link-alt" aria-hidden="true"></i>
        {{ $t('buttons.viewProject') }}
      </a>
    </footer>
  </article>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
    validator: (project) => {
      return typeof project.id !== 'undefined' && project.link
    }
  }
})

defineEmits(['track-click'])
</script>

<style scoped>
.project-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-header {
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0 0 1rem 0;
  line-height: 1.4;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: var(--background-secondary);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.card-body {
  flex: 1;
  margin-bottom: 1.5rem;
}

.card-description {
  color: var(--text-color);
  line-height: 1.6;
  margin: 0;
}

.card-footer {
  margin-top: auto;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.card-link:hover {
  background: color-mix(in srgb, var(--primary-color) 85%, black);
  transform: translateY(-2px);
}

.card-link:focus {
  outline: 3px solid rgba(var(--purple-rgb), 0.3);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .project-card {
    padding: 1.5rem;
  }
  
  .card-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .project-card {
    padding: 1rem;
  }
  
  .card-title {
    font-size: 1.1rem;
  }
  
  .card-link {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
