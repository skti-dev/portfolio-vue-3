<template>
  <div class="main-content">
    <!-- Seção de Apresentação Inicial -->
    <section id="inicio" class="hero">
      <div class="container">
        <div class="hero-content">
          <img src="/placeholder-photo.jpg" alt="Minha foto" class="profile-photo">
          <h1>
            {{ $t('hero.greeting') }}
            <AnimatedName />
          </h1>
          <p>{{ $t('hero.description') }}</p>
        </div>
      </div>
    </section>

    <!-- Seção de Certificados -->
    <section id="certificados" class="section">
      <div class="container">
        <h2 class="section-title">{{ $t('sections.certificates') }}</h2>
        <div class="cards-grid">
          <div class="card" v-for="(certificado, index) in certificados" :key="index">
            <h3>{{ $t(`certificates.${index}.title`) }}</h3>
            <p>{{ $t(`certificates.${index}.description`) }}</p>
            <a :href="certificado.link" target="_blank" class="card-link">
              <i class="fas fa-external-link-alt"></i>
              {{ $t('buttons.viewCertificate') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Sobre Mim -->
    <section id="sobre" class="section">
      <div class="container">
        <h2 class="section-title">{{ $t('sections.about') }}</h2>
        <div class="about">
          <h3>{{ $t('about.education') }}</h3>
          <p>{{ $t('about.educationText') }}</p>
          
          <h3>{{ $t('about.mainProjects') }}</h3>
          <p>{{ $t('about.mainProjectsText') }}</p>
          
          <h3>{{ $t('about.interests') }}</h3>
          <p>{{ $t('about.interestsText') }}</p>
        </div>
      </div>
    </section>

    <!-- Seção de Projetos -->
    <section id="projetos" class="section">
      <div class="container">
        <h2 class="section-title">{{ $t('sections.projects') }}</h2>
        <div class="cards-grid">
          <div class="card" v-for="(projeto, index) in projetos" :key="index">
            <h3>{{ $t(`projects.${index}.title`) }}</h3>
            <p>{{ $t(`projects.${index}.description`) }}</p>
            <a :href="projeto.link" target="_blank" class="card-link">
              <i class="fas fa-external-link-alt"></i>
              {{ $t('buttons.viewProject') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Contato -->
    <section id="contato" class="section">
      <div class="container">
        <h2 class="section-title">{{ $t('sections.contact') }}</h2>
        <div class="contact-grid">
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <h3>{{ $t('contact.email') }}</h3>
            <a :href="'mailto:' + contato.email" class="contact-link">
              {{ $t('contact.sendEmail') }}
            </a>
          </div>
          
          <div class="contact-item">
            <i class="fab fa-whatsapp"></i>
            <h3>{{ $t('contact.whatsapp') }}</h3>
            <a :href="'https://wa.me/' + contato.whatsapp" target="_blank" class="contact-link">
              {{ $t('contact.sendMessage') }}
            </a>
          </div>
          
          <div class="contact-item">
            <i class="fab fa-linkedin"></i>
            <h3>{{ $t('contact.linkedin') }}</h3>
            <a :href="contato.linkedin" target="_blank" class="contact-link">
              {{ $t('contact.viewProfile') }}
            </a>
          </div>
          
          <div class="contact-item">
            <i class="fab fa-github"></i>
            <h3>{{ $t('contact.github') }}</h3>
            <a :href="contato.github" target="_blank" class="contact-link">
              {{ $t('contact.viewRepositories') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AnimatedName from '../components/AnimatedName.vue'

export default {
  components: {
    AnimatedName
  },
  data() {
    return {
      certificados: [
        {
          link: 'https://exemplo.com/certificado1'
        },
        {
          link: 'https://exemplo.com/certificado2'
        },
        {
          link: 'https://exemplo.com/certificado3'
        }
      ],
      projetos: [
        {
          link: 'https://github.com/seuusuario/ecommerce-vue'
        },
        {
          link: 'https://github.com/seuusuario/api-nodejs'
        },
        {
          link: 'https://github.com/seuusuario/dashboard-analytics'
        },
        {
          link: 'https://github.com/seuusuario/app-mobile'
        }
      ],
      contato: {
        email: 'seuemail@exemplo.com',
        whatsapp: '5511999999999', // Formato: código do país + DDD + número
        linkedin: 'https://linkedin.com/in/seuusuario',
        github: 'https://github.com/seuusuario'
      }
    }
  }
}
</script>
