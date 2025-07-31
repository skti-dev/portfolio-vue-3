import { ref } from "vue";

export function usePortfolio() {
  const selectedCategory = ref("all");

  const filterProjects = (projects, category) => {
    if (category === "all") return projects;
    return projects.filter((project) => project.category === category);
  };

  const openExternalLink = (url, trackingLabel = "") => {
    if (!url) {
      console.warn("URL not provided for external link");
      return;
    }

    try {
      // Analytics tracking if available
      if (window.gtag && trackingLabel) {
        window.gtag("event", "click", {
          event_category: "external_link",
          event_label: trackingLabel,
          value: 1,
        });
      }

      window.open(url, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening external link:", error);
    }
  };

  const downloadFile = (url, filename, trackingLabel = "") => {
    try {
      // Analytics tracking
      if (window.gtag && trackingLabel) {
        window.gtag("event", "download", {
          event_category: "file_download",
          event_label: trackingLabel,
          value: 1,
        });
      }

      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const scrollToSection = (sectionId) => {
    try {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } catch (error) {
      console.error("Error scrolling to section:", error);
    }
  };

  return {
    selectedCategory,
    filterProjects,
    openExternalLink,
    downloadFile,
    scrollToSection,
  };
}
