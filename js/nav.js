// js/nav.js

export function initNav() {
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("nav-mobile");
    if (!toggle || !menu) return;
  
    function setOpen(open) {
      menu.classList.toggle("hidden", !open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
      document.body.classList.toggle("overflow-hidden", open);
    }
  
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });
  
    // 1. Phím ESC
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  
    // 2. Click ngoài header
    document.addEventListener("click", (e) => {
      if (
        toggle.getAttribute("aria-expanded") === "true" &&
        !menu.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        setOpen(false);
      }
    });
  
    // 3. Phóng to lên desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024 && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
      }
    });
  }
  
  export function initHeaderOnScroll() {
    const header = document.querySelector("header");
    const sentinel = document.getElementById("nav-sentinel");
    if (!header || !sentinel) return;
  
    const observer = new IntersectionObserver(([entry]) => {
      const scrolled = !entry.isIntersecting;
      header.classList.toggle("shadow-sm", scrolled);
    });
    observer.observe(sentinel);
  }
  
  export function initToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;
  
    window.addEventListener(
      "scroll",
      () => {
        btn.classList.toggle("hidden", window.scrollY <= 400);
      },
      { passive: true }
    );
  
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }