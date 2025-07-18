<template>
  <header class="header">
    <nav class="nav container">
      <div class="logo">{{ $t('portfolio') }}</div>
      <ul class="nav-links">
        <li><a href="#inicio" @click="scrollTo('inicio')">{{ $t('nav.home') }}</a></li>
        <li><a href="#certificados" @click="scrollTo('certificados')">{{ $t('nav.certificates') }}</a></li>
        <li><a href="#sobre" @click="scrollTo('sobre')">{{ $t('nav.about') }}</a></li>
        <li><a href="#projetos" @click="scrollTo('projetos')">{{ $t('nav.projects') }}</a></li>
        <li><a href="#contato" @click="scrollTo('contato')">{{ $t('nav.contact') }}</a></li>
      </ul>
      <div class="language-toggle">
        <button 
          class="language-btn" 
          :class="{ active: $i18n.locale === 'pt' }"
          @click="changeLanguage('pt')"
        >
          PT
        </button>
        <button 
          class="language-btn" 
          :class="{ active: $i18n.locale === 'en' }"
          @click="changeLanguage('en')"
        >
          EN
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    scrollTo(elementId) {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    changeLanguage(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('preferredLanguage', locale)
    }
  }
}
</script>
