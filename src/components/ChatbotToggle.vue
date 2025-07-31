<template>
  <button 
    class="chatbot-toggle"
    @click="$emit('toggle')"
    :aria-label="toggleAriaLabel"
    :aria-expanded="isOpen"
    type="button"
  >
    <i 
      :class="isOpen ? 'fas fa-times' : 'fas fa-comment'"
      aria-hidden="true"
    ></i>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle'])

const toggleAriaLabel = computed(() => {
  return props.isOpen ? t('chatbot.close') : t('chatbot.open')
})
</script>

<style scoped>
.chatbot-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary-gradient);
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.chatbot-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
}

.chatbot-toggle:focus {
  outline: 3px solid rgba(var(--purple-rgb), 0.3);
  outline-offset: 2px;
}

.chatbot-toggle:active {
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .chatbot-toggle {
    bottom: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
    font-size: 1.1rem;
  }
}
</style>
