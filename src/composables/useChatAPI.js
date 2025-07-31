import { ref } from "vue";
import { useI18n } from "vue-i18n";

export function useChatAPI(apiBaseUrl) {
  const { locale, t } = useI18n();
  const isLoading = ref(false);
  const error = ref(null);

  const getPageContext = () => {
    try {
      const sections = document.querySelectorAll("[data-section], .section");
      const content = Array.from(sections)
        .map((section) => {
          const title = section
            .querySelector("h1, h2, h3, h4, h5, h6, .section-title")
            ?.textContent?.trim();
          const text = section.textContent
            ?.replace(/\s+/g, " ")
            .trim()
            .substring(0, 500);

          return {
            section: title || "Untitled Section",
            content: text || "",
          };
        })
        .filter((item) => item.content.length > 0);

      return {
        language: locale.value,
        sections: content,
        url: window.location.href,
        timestamp: new Date().toISOString(),
      };
    } catch (err) {
      console.warn("Failed to extract page context:", err);
      return {
        language: locale.value,
        sections: [],
        url: window.location.href,
      };
    }
  };

  const sendMessage = async (message) => {
    if (!message?.trim()) {
      throw new Error("Message cannot be empty");
    }

    isLoading.value = true;
    error.value = null;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

      const response = await fetch(`${apiBaseUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          message: message.trim(),
          language: locale.value,
          context: getPageContext(),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP ${response.status}: ${response.statusText}`
        );
      }

      const data = await response.json();

      if (!data.response) {
        throw new Error("Invalid response format from API");
      }

      return data.response;
    } catch (err) {
      const errorMessage =
        err.name === "AbortError"
          ? t("chatbot.timeout")
          : err.message || t("chatbot.error");

      error.value = errorMessage;
      throw new Error(errorMessage);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    error,
    sendMessage,
  };
}
