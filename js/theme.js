// js/theme.js

export function initTheme() {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;
  
    function updateState(isDark) {
      toggle.setAttribute("aria-checked", String(isDark));
      toggle.setAttribute("aria-label", isDark ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối");
    }
  
    // Khởi tạo trạng thái ban đầu dựa trên class dark ở <html>
    updateState(document.documentElement.classList.contains("dark"));
  
    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateState(isDark);
    });
  }