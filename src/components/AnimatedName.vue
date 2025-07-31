<template>
  <span 
    class="animated-name"
    :aria-label="$t('name')"
    aria-live="polite"
  >
    <span class="typing-text" ref="typingText" aria-hidden="true">
      {{ displayText }}
    </span>
    <span 
      class="cursor" 
      :class="{ 'finished': isTypingComplete }"
      aria-hidden="true"
    >
      |
    </span>
    <span class="sr-only">{{ $t('name') }}</span>
  </span>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  typingSpeed: {
    type: Number,
    default: 100
  },
  pauseBeforeStart: {
    type: Number,
    default: 500
  }
})

const emit = defineEmits(['typing-complete'])

const { t, locale } = useI18n()

const displayText = ref('')
const isTypingComplete = ref(false)
const typingText = ref(null)

const targetText = computed(() => t('name'))

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const isAnimating = ref(false)
let animationController = null

const startTypingAnimation = async () => {
  if (isAnimating.value) return
  
  isAnimating.value = true
  animationController = new AbortController()
  
  try {
    await sleep(props.pauseBeforeStart)
    
    for (let i = 0; i <= targetText.value.length; i++) {
      if (animationController.signal.aborted) return
      
      displayText.value = targetText.value.substring(0, i)
      await sleep(props.typingSpeed)
    }
    
    isTypingComplete.value = true
    emit('typing-complete')
  } catch (error) {
    if (!animationController.signal.aborted) {
      console.error('Typing animation error:', error)
    }
  } finally {
    isAnimating.value = false
  }
}

const resetAnimation = () => {
  if (animationController) {
    animationController.abort()
  }
  displayText.value = ''
  isTypingComplete.value = false
  isAnimating.value = false
}

watch(locale, async () => {
  resetAnimation()
  await nextTick()
  setTimeout(startTypingAnimation, 100)
})

onMounted(() => {
  startTypingAnimation()
})

onUnmounted(() => {
  if (animationController) {
    animationController.abort()
  }
})
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

@media (max-width: 767px) {
  .cursor {
    font-size: 0.9em;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (prefers-reduced-motion: reduce) {
  .cursor {
    animation: none;
  }
}
</style>
