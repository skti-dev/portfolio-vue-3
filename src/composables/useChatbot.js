import { ref, nextTick } from "vue";
import { useI18n } from "vue-i18n";

export function useChatbot() {
  const { t, locale } = useI18n();

  const isOpen = ref(false);
  const isTyping = ref(false);
  const currentMessage = ref("");
  const messages = ref([]);
  const messagesContainer = ref(null);

  const API_BASE_URL =
    import.meta.env.VITE_CHATBOT_API_URL || "https://api.groq.com/openai/v1";

  const addMessage = (text, isUser = false) => {
    const message = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      text,
      isUser,
      timestamp: new Date().toISOString(),
    };

    messages.value.push(message);
    scrollToBottom();
    return message;
  };

  const scrollToBottom = async () => {
    await nextTick();
    const container = messagesContainer.value;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const toggleChat = () => {
    isOpen.value = !isOpen.value;

    if (isOpen.value && messages.value.length === 0) {
      addMessage(t("chatbot.welcome"));
    }
  };

  const clearMessages = () => {
    messages.value = [];
  };

  return {
    // State
    isOpen,
    isTyping,
    currentMessage,
    messages,
    messagesContainer,

    // Actions
    addMessage,
    toggleChat,
    clearMessages,
    scrollToBottom,

    // Constants
    API_BASE_URL,
  };
}
