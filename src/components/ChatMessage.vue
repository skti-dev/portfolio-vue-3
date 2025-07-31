<template>
  <article 
    class="chat-message"
    :class="{ 'user-message': message.isUser, 'bot-message': !message.isUser }"
    :aria-label="messageAriaLabel"
  >
    <div class="message-avatar" :aria-hidden="true">
      <i 
        :class="message.isUser ? 'fas fa-user' : 'fas fa-robot'"
        aria-hidden="true"
      ></i>
    </div>
    
    <div class="message-content">
      <p class="message-text">{{ message.text }}</p>
      <time 
        class="message-timestamp"
        :datetime="message.timestamp"
        :title="formatTimestamp(message.timestamp)"
        v-if="message.timestamp"
      >
        {{ formatTime(message.timestamp) }}
      </time>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  message: {
    type: Object,
    required: true,
    validator: (message) => {
      return message.id && message.text && typeof message.isUser === 'boolean'
    }
  }
})

const messageAriaLabel = computed(() => {
  const sender = props.message.isUser ? t('chatbot.you') : t('chatbot.assistant')
  return `${sender}: ${props.message.text}`
})

const formatTime = (timestamp) => {
  try {
    return new Date(timestamp).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch {
    return ''
  }
}

const formatTimestamp = (timestamp) => {
  try {
    return new Date(timestamp).toLocaleString()
  } catch {
    return timestamp
  }
}
</script>

<style scoped>
.chat-message {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  align-items: flex-start;
}

.user-message {
  flex-direction: row-reverse;
}

.user-message .message-content {
  background: var(--primary-gradient);
  color: white;
  border-radius: 1rem 0.25rem 1rem 1rem;
}

.bot-message .message-content {
  background: #f1f3f4;
  color: #333;
  border-radius: 0.25rem 1rem 1rem 1rem;
}

.message-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: white;
  flex-shrink: 0;
}

.user-message .message-avatar {
  background: var(--primary-gradient);
}

.bot-message .message-avatar {
  background: #6b7280;
}

.message-content {
  max-width: 80%;
  padding: 0.75rem 1rem;
  word-wrap: break-word;
}

.message-text {
  margin: 0;
  line-height: 1.5;
}

.message-timestamp {
  display: block;
  font-size: 0.75rem;
  opacity: 0.7;
  margin-top: 0.25rem;
}

@media (max-width: 480px) {
  .message-content {
    max-width: 85%;
    padding: 0.5rem 0.75rem;
  }
  
  .message-avatar {
    width: 32px;
    height: 32px;
    font-size: 0.875rem;
  }
}
</style>
