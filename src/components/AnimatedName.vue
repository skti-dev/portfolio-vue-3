<template>
  <span class="animated-name">
    <span class="typing-text" ref="typingText">{{ displayText }}</span>
    <span class="cursor" :class="{ 'finished': isTypingComplete }">|</span>
  </span>
</template>

<script>
export default {
  data() {
    return {
      displayText: '',
      isTypingComplete: false,
      typingSpeed: 100,
      pauseBeforeStart: 500
    }
  },
  computed: {
    targetText() {
      return this.$t('name')
    }
  },
  mounted() {
    this.startTypingAnimation()
  },
  watch: {
    '$i18n.locale'() {
      this.resetAnimation()
      setTimeout(() => {
        this.startTypingAnimation()
      }, 100)
    }
  },
  methods: {
    resetAnimation() {
      this.displayText = ''
      this.isTypingComplete = false
    },
    
    async startTypingAnimation() {
      await this.sleep(this.pauseBeforeStart)
      
      for (let i = 0; i <= this.targetText.length; i++) {
        this.displayText = this.targetText.substring(0, i)
        await this.sleep(this.typingSpeed)
      }
      
      this.isTypingComplete = true
    },
    
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
}
</script>

<style scoped>
.animated-name {
  display: inline-block;
}

.typing-text {
  font-weight: inherit;
  color: inherit;
}

.cursor {
  color: currentColor;
  animation: blink 1s infinite;
  font-weight: normal;
}

.cursor.finished {
  animation: none;
  opacity: 0;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .cursor {
    font-size: 0.9em;
  }
}
</style>
