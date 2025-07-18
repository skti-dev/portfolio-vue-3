<template>
  <div class="chatbot-container">
    <!-- Chatbot Window -->
    <div class="chatbot-window" :class="{ hidden: !isOpen }">
      <div class="chatbot-header">
        <h3>{{ $t('chatbot.title') }}</h3>
        <button class="chatbot-close" @click="toggleChat">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="chatbot-messages" ref="messagesContainer">
        <div 
          v-for="message in messages" 
          :key="message.id"
          class="chatbot-message"
          :class="{ user: message.isUser }"
        >
          <div class="avatar">
            {{ message.isUser ? 'U' : 'AI' }}
          </div>
          <div class="content">
            {{ message.text }}
          </div>
        </div>
        
        <!-- Typing indicator -->
        <div v-if="isTyping" class="chatbot-message">
          <div class="avatar">AI</div>
          <div class="content">
            <div class="typing-indicator">
              <div class="typing-dot"></div>
              <div class="typing-dot"></div>
              <div class="typing-dot"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="chatbot-input">
        <input 
          v-model="currentMessage"
          @keyup.enter="sendMessage"
          :placeholder="$t('chatbot.placeholder')"
          :disabled="isTyping"
        />
        <button class="chatbot-send" @click="sendMessage" :disabled="isTyping">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
    
    <!-- Toggle Button -->
    <button class="chatbot-toggle" @click="toggleChat">
      <i class="fas fa-comment" v-if="!isOpen"></i>
      <i class="fas fa-times" v-else></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isTyping: false,
      currentMessage: '',
      messages: [],
      ngrokUrl: 'https://api.groq.com/openai/v1'
    }
  },
  mounted() {
    this.initializeChat()
  },
  methods: {
    toggleChat() {
      this.isOpen = !this.isOpen
      if (this.isOpen && this.messages.length === 0) {
        this.addBotMessage(this.$t('chatbot.welcome'))
      }
    },
    
    initializeChat() {
      // Welcome message will be added when chat opens
    },
    
    async sendMessage() {
      if (!this.currentMessage.trim() || this.isTyping) return
      
      const userMessage = this.currentMessage.trim()
      this.addUserMessage(userMessage)
      this.currentMessage = ''
      
      this.isTyping = true
      
      try {
        // Get page content for context
        const pageContent = this.getPageContent()
        
        const response = await fetch(`${this.ngrokUrl}/api/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: userMessage,
            language: this.$i18n.locale,
            context: pageContent
          })
        })
        
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        
        const data = await response.json()
        
        setTimeout(() => {
          this.isTyping = false
          this.addBotMessage(data.response || this.$t('chatbot.error'))
        }, 1000)
        
      } catch (error) {
        console.error('Error:', error)
        setTimeout(() => {
          this.isTyping = false
          this.addBotMessage(this.$t('chatbot.error'))
        }, 1000)
      }
    },
    
    addUserMessage(text) {
      this.messages.push({
        id: Date.now(),
        text,
        isUser: true
      })
      this.scrollToBottom()
    },
    
    addBotMessage(text) {
      this.messages.push({
        id: Date.now(),
        text,
        isUser: false
      })
      this.scrollToBottom()
    },
    
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer
        if (container) {
          container.scrollTop = container.scrollHeight
        }
      })
    },
    
    getPageContent() {
      // Extract text content from the page for context
      const sections = document.querySelectorAll('.section')
      let content = []
      
      sections.forEach(section => {
        const title = section.querySelector('.section-title')?.textContent
        const text = section.textContent
        
        if (title && text) {
          content.push({
            section: title.trim(),
            content: text.replace(/\s+/g, ' ').trim().substring(0, 500)
          })
        }
      })
      
      return {
        language: this.$i18n.locale,
        sections: content,
        url: window.location.href
      }
    }
  },
  
  watch: {
    '$i18n.locale'() {
      // Update welcome message when language changes
      if (this.messages.length > 0 && !this.messages[0].isUser) {
        this.messages[0].text = this.$t('chatbot.welcome')
      }
    }
  }
}
</script>
