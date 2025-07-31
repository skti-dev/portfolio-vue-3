<template>
  <article 
    class="chat-message bot-message typing-message"
    aria-label="Assistente está digitando"
    aria-live="polite"
  >
    <div class="message-avatar" aria-hidden="true">
      <i class="fas fa-robot" aria-hidden="true"></i>
    </div>
    
    <div class="message-content">
      <div class="typing-indicator" aria-label="Digitando">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  </article>
</template>

<script setup>
</script>

<style scoped>
.chat-message {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  align-items: flex-start;
}

.message-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: white;
  flex-shrink: 0;
}

.message-content {
  background: #f1f3f4;
  color: #333;
  border-radius: 1rem 1rem 1rem 0.25rem;
  padding: 0.75rem 1rem;
  max-width: 80%;
}

.typing-indicator {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 1.5rem;
}

.typing-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #9ca3af;
  animation: typing 1.4s infinite ease-in-out;
}

.typing-dot:nth-child(1) {
  animation-delay: -0.32s;
}

.typing-dot:nth-child(2) {
  animation-delay: -0.16s;
}

.typing-dot:nth-child(3) {
  animation-delay: 0s;
}

@keyframes typing {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 480px) {
  .message-avatar {
    width: 32px;
    height: 32px;
    font-size: 0.875rem;
  }
  
  .message-content {
    padding: 0.5rem 0.75rem;
  }
}
</style>
