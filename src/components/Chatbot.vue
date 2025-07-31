<template>
  <div class="chatbot-container">
    <!-- Chatbot Window -->
    <dialog 
      v-show="isOpen"
      class="chatbot-window" 
      aria-labelledby="chatbot-title"
      aria-live="polite"
      open
    >
      <header class="chatbot-header">
        <h3 id="chatbot-title">{{ $t('chatbot.title') }}</h3>
        <button 
          class="chatbot-close" 
          @click="toggleChat"
          :aria-label="$t('chatbot.close')"
          type="button"
        >
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </header>
      
      <main 
        class="chatbot-messages" 
        ref="messagesContainer"
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        <ChatMessage
          v-for="message in messages"
          :key="message.id"
          :message="message"
        />
        
        <TypingIndicator v-if="isTyping" />
      </main>
      
      <footer class="chatbot-input">
        <form @submit.prevent="handleSendMessage" class="input-form">
          <input 
            v-model="currentMessage"
            :placeholder="$t('chatbot.placeholder')"
            :disabled="isTyping"
            class="message-input"
            type="text"
            aria-label="Type your message"
            maxlength="500"
          />
          <button 
            type="submit"
            class="chatbot-send" 
            :disabled="isTyping || !currentMessage.trim()"
            :aria-label="$t('chatbot.send')"
          >
            <i class="fas fa-paper-plane" aria-hidden="true"></i>
          </button>
        </form>
      </footer>
    </dialog>
    
    <!-- Toggle Button -->
    <ChatbotToggle
      :is-open="isOpen"
      @toggle="toggleChat"
    />
  </div>
</template>

<script setup>
import { watch, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ChatMessage from './ChatMessage.vue'
import TypingIndicator from './TypingIndicator.vue'
import ChatbotToggle from './ChatbotToggle.vue'
import { useChatbot } from '@/composables/useChatbot'
import { useChatAPI } from '@/composables/useChatAPI'

const { t, locale } = useI18n()

const {
  isOpen,
  isTyping,
  currentMessage,
  messages,
  messagesContainer,
  addMessage,
  toggleChat,
  API_BASE_URL
} = useChatbot()

const { sendMessage } = useChatAPI(API_BASE_URL)

const handleSendMessage = async () => {
  if (!currentMessage.value.trim() || isTyping.value) return
  
  const userMessage = currentMessage.value.trim()
  addMessage(userMessage, true)
  currentMessage.value = ''
  
  isTyping.value = true
  
  try {
    const response = await sendMessage(userMessage)
    
    // Simulate typing delay for better UX
    setTimeout(() => {
      isTyping.value = false
      addMessage(response)
    }, Math.random() * 1000 + 500) // 0.5-1.5s delay
    
  } catch (error) {
    console.error('Chatbot error:', error)
    
    setTimeout(() => {
      isTyping.value = false
      addMessage(error.message || t('chatbot.error'))
    }, 1000)
  }
}

// Update welcome message when language changes
watch(locale, () => {
  if (messages.value.length > 0 && !messages.value[0].isUser) {
    messages.value[0].text = t('chatbot.welcome')
  }
}, { immediate: false })

// Cleanup on unmount
onUnmounted(() => {
  isTyping.value = false
})
</script>

<style scoped>
.chatbot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.chatbot-window {
  position: absolute;
  bottom: 80px;
  right: 0;
  transform: translateX(-350px);
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

.chatbot-header {
  background: var(--primary-gradient);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbot-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.chatbot-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.chatbot-close:hover {
  background: rgba(255, 255, 255, 0.1);
}

.chatbot-close:focus {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}

.chatbot-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  scroll-behavior: smooth;
}

.chatbot-messages::-webkit-scrollbar {
  width: 6px;
}

.chatbot-messages::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.chatbot-messages::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.chatbot-messages::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.chatbot-input {
  padding: 1rem;
  border-top: 1px solid #e0e0e0;
}

.input-form {
  display: flex;
  gap: 0.5rem;
  flex: 1;
}

.message-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 25px;
  outline: none;
  font-size: 0.9rem;
  transition: border-color 0.2s;
}

.message-input:focus {
  border-color: var(--primary-gradient);
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.1);
}

.message-input:disabled {
  opacity: 0.6;
  background: #f9fafb;
}

.chatbot-send {
  width: 44px;
  height: 44px;
  border: none;
  background: var(--primary-gradient);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-size: 1rem;
}

.chatbot-send:hover:not(:disabled) {
  background: color-mix(in srgb, var(--primary-gradient) 85%, black);
  transform: scale(1.05);
}

.chatbot-send:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.chatbot-send:focus {
  outline: 3px solid rgba(var(--primary-color-rgb), 0.3);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .chatbot-container {
    bottom: 10px;
    right: 10px;
  }
  
  .chatbot-window {
    width: 320px;
    height: 450px;
    bottom: 70px;
  }
}

@media (max-width: 480px) {
  .chatbot-window {
    width: 280px;
    height: 400px;
    right: -10px;
  }
  
  .chatbot-header {
    padding: 0.75rem;
  }
  
  .chatbot-messages {
    padding: 0.75rem;
  }
  
  .chatbot-input {
    padding: 0.75rem;
  }
}
</style>
