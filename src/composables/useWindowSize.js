import { ref, onMounted, onUnmounted } from "vue";

export function useWindowSize() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  let resizeTimeout = null;

  const updateSize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  const debouncedResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateSize, 100);
  };

  onMounted(() => {
    window.addEventListener("resize", debouncedResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", debouncedResize);
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
  });

  return { width, height };
}
