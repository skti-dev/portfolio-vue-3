<template>
  <section id="sobre" class="section about-section" data-section="about">
    <div class="container">
      <h2 class="section-title">{{ $t('sections.about') }}</h2>
      <div class="about">
        <article class="about-item">
          <h3>{{ $t('about.education') }}</h3>
          <p>{{ $t('about.educationText') }}</p>
          <div class="education-download">
            <button 
              @click="$emit('download-diploma')"
              class="download-link"
              :aria-label="$t('about.downloadDiplomaLabel')"
            >
              <i class="fas fa-download" aria-hidden="true"></i>
              {{ $t('about.downloadDiploma') }}
            </button>
          </div>
        </article>
        
        <article class="about-item">
          <h3>{{ $t('about.mainProjects') }}</h3>
          <p>{{ $t('about.mainProjectsText') }}</p>
        </article>
        
        <article class="about-item">
          <h3>{{ $t('about.interests') }}</h3>
          <p>{{ $t('about.interestsText') }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['download-diploma'])
</script>

<style scoped>
.about-section {
  background-color: var(--background-secondary);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 3rem;
  font-weight: 700;
}

.about {
  max-width: 800px;
  margin: 0 auto;
}

.about-item {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.about-item:hover {
  transform: translateY(-5px);
}

.about-item h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.about-item p {
  line-height: 1.8;
  color: var(--text-color);
  font-size: 1.1rem;
  margin-bottom: 0;
}

.education-download {
  margin-top: 1.5rem;
}

.download-link {
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
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.download-link:hover {
  background: color-mix(in srgb, var(--primary-color) 85%, black);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.download-link:focus {
  outline: 3px solid rgba(var(--purple-rgb), 0.3);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .about-item {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .about-item h3 {
    font-size: 1.3rem;
  }
  
  .about-item p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .about-item {
    padding: 1rem;
  }
}
</style>
