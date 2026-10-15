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
      <p v-if="message.isUser" class="message-text">{{ message.text }}</p>
      <div v-else class="message-text markdown" v-html="renderedText"></div>
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
import { marked } from 'marked'
import DOMPurify from 'dompurify'

const { t, locale } = useI18n()

// Links from the bot open in a new tab
DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A') {
    node.setAttribute('target', '_blank')
    node.setAttribute('rel', 'noopener noreferrer')
  }
})

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

const renderedText = computed(() =>
  DOMPurify.sanitize(marked.parse(props.message.text, { breaks: true, gfm: true }))
)

const formatTime = (timestamp) => {
  try {
    return new Date(timestamp).toLocaleTimeString(locale.value === 'en' ? 'en-US' : 'pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch {
    return ''
  }
}

const formatTimestamp = (timestamp) => {
  try {
    return new Date(timestamp).toLocaleString(locale.value === 'en' ? 'en-US' : 'pt-BR')
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
  background: var(--primary-color);
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

.markdown :deep(p),
.markdown :deep(ul),
.markdown :deep(ol) {
  margin: 0 0 0.5rem;
}

.markdown :deep(ul),
.markdown :deep(ol) {
  padding-left: 1.25rem;
}

.markdown :deep(> :last-child) {
  margin-bottom: 0;
}

.markdown :deep(a) {
  color: var(--primary-color);
  text-decoration: underline;
  word-break: break-word;
}

.markdown :deep(code) {
  background: rgba(0, 0, 0, 0.08);
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  font-size: 0.85em;
}

.markdown :deep(pre) {
  background: rgba(0, 0, 0, 0.08);
  padding: 0.5rem;
  border-radius: 6px;
  overflow-x: auto;
}

.markdown :deep(pre code) {
  background: none;
  padding: 0;
}

.markdown :deep(h1),
.markdown :deep(h2),
.markdown :deep(h3),
.markdown :deep(h4) {
  font-size: 1rem;
  margin: 0.5rem 0 0.25rem;
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
