<template>
  <div class="main-content">
    <HeroSection 
      :profile-picture="assets.profilePicture"
      @scroll-to="scrollToSection"
    />
    
    <section id="certificados" class="section" data-section="certificates">
      <div class="container">
        <CertificateSlider />
      </div>
    </section>
    
    <AboutSection 
      @download-diploma="handleDownloadDiploma"
    />
    
    <ProjectsSection 
      :projects="projects"
      @track-project-click="handleProjectClick"
    />
    
    <ContactSection 
      :contact="contact"
      @track-contact-click="handleContactClick"
    />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import CertificateSlider from '@/components/CertificateSlider.vue'
import { usePortfolioData } from '@/composables/usePortfolioData'
import { usePortfolio } from '@/composables/usePortfolio'

const { t } = useI18n()
const { projects, contact, assets } = usePortfolioData()
const { scrollToSection, downloadFile } = usePortfolio()

const handleDownloadDiploma = () => {
  downloadFile(
    assets.diplomaPdf,
    'RepresentacaoVisualDiplomaDigital-FIAP.pdf',
    'diploma_download'
  )
}

const handleProjectClick = (projectId) => {
  console.log('Project clicked:', projectId)
  // Analytics tracking handled in usePortfolio
}

const handleContactClick = (contactType) => {
  console.log('Contact clicked:', contactType)
  // Analytics tracking handled in usePortfolio
}
</script>
