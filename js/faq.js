// js/faq.js

export function initFaq() {
    const root = document.getElementById("faq-list");
    if (!root) return;
  
    const triggers = root.querySelectorAll("[data-faq-trigger]");
  
    function setOpen(trigger, open) {
      const contentId = trigger.getAttribute("aria-controls");
      const content = document.getElementById(contentId);
      if (!content) return;
  
      trigger.setAttribute("aria-expanded", String(open));
      content.classList.toggle("hidden", !open);
  
      const icon = trigger.querySelector("svg");
      if (icon) {
        icon.classList.toggle("rotate-180", open);
      }
    }
  
    root.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-faq-trigger]");
      if (!trigger) return;
  
      const willOpen = trigger.getAttribute("aria-expanded") !== "true";
  
      // Đóng hết rồi mở đúng mục được chọn
      triggers.forEach((t) => setOpen(t, false));
      if (willOpen) {
        setOpen(trigger, true);
      }
    });
  }