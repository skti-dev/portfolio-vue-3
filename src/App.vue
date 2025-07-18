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

export default {
  components: {
    Header,
    Footer,
    Chatbot
  }
}
</script>
