<template>
  <header class="header">
    <!-- Mobile menu overlay -->
    <div class="mobile-overlay" :class="{ active: isMobileMenuOpen }" @click="closeMobileMenu"></div>
    
    <nav class="nav container">
      <div class="logo">{{ $t('portfolio') }}</div>
      
      <!-- Mobile menu button -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <!-- Navigation links -->
      <ul class="nav-links" :class="{ active: isMobileMenuOpen }">
        <li><a href="#inicio" @click="scrollTo('inicio')">{{ $t('nav.home') }}</a></li>
        <li><a href="#certificados" @click="scrollTo('certificados')">{{ $t('nav.certificates') }}</a></li>
        <li><a href="#sobre" @click="scrollTo('sobre')">{{ $t('nav.about') }}</a></li>
        <li><a href="#projetos" @click="scrollTo('projetos')">{{ $t('nav.projects') }}</a></li>
        <li><a href="#contato" @click="scrollTo('contato')">{{ $t('nav.contact') }}</a></li>
        
        <!-- Language toggle inside mobile menu -->
        <li class="mobile-language-toggle">
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
        </li>
      </ul>
      
      <!-- Desktop language toggle -->
      <div class="language-toggle desktop-only">
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
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    scrollTo(elementId) {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        // Close mobile menu after navigation
        this.closeMobileMenu()
      }
    },
    changeLanguage(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('preferredLanguage', locale)
      // Close mobile menu after language change
      this.closeMobileMenu()
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      this.updateBodyScroll()
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
      this.updateBodyScroll()
    },
    updateBodyScroll() {
      // Prevent body scroll when mobile menu is open
      if (this.isMobileMenuOpen) {
        document.body.classList.add('mobile-menu-open')
      } else {
        document.body.classList.remove('mobile-menu-open')
      }
    }
  },
  mounted() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.closeMobileMenu()
      }
    })
    
    // Close mobile menu on window resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        this.closeMobileMenu()
      }
    })
  },
  beforeUnmount() {
    // Clean up body class when component is destroyed
    document.body.classList.remove('mobile-menu-open')
  }
}
</script>
