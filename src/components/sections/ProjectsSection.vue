<template>
  <section id="projetos" class="section projects-section" data-section="projects">
    <div class="container">
      <h2 class="section-title">{{ $t('sections.projects') }}</h2>
      <div class="cards-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @track-click="$emit('track-project-click', $event)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'

defineProps({
  projects: {
    type: Array,
    required: true
  }
})

defineEmits(['track-project-click'])
</script>

<style scoped>
.projects-section {
  background-color: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 3rem;
  font-weight: 700;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .cards-grid {
    gap: 1rem;
  }
}
</style>
