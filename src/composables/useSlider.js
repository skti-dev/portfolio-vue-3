import { ref, watch } from "vue";

export function useSlider(totalSlides) {
  const currentIndex = ref(0);

  const nextSlide = () => {
    if (currentIndex.value < totalSlides.value - 1) {
      currentIndex.value++;
    }
  };

  const previousSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < totalSlides.value) {
      currentIndex.value = index;
    }
  };

  // Reset index se totalSlides mudar
  watch(totalSlides, (newTotal) => {
    if (currentIndex.value >= newTotal) {
      currentIndex.value = Math.max(0, newTotal - 1);
    }
  });

  return {
    currentIndex,
    nextSlide,
    previousSlide,
    goToSlide,
  };
}
