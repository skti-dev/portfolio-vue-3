<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <Chatbot />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Chatbot from './components/Chatbot.vue'
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    Header,
    Footer,
    Chatbot
  },
  setup() {
    const { t, locale } = useI18n()

    // Keep <html lang>, title and description in sync with the selected language
    watch(locale, () => {
      document.documentElement.lang = locale.value === 'en' ? 'en' : 'pt-BR'
      document.title = t('meta.title')
      document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'))
    }, { immediate: true })
  }
}
</script>
