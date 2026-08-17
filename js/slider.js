// js/slider.js

export function initSlider() {
    const root = document.getElementById("testimonial-slider");
    if (!root) return;
  
    const track = root.querySelector("[data-slider-track]");
    const slides = Array.from(root.querySelectorAll("[data-slide]"));
    const prevBtn = root.querySelector("[data-slider-prev]");
    const nextBtn = root.querySelector("[data-slider-next]");
    const dotsContainer = root.querySelector("[data-slider-dots]");
    if (!track || slides.length === 0) return;
  
    let index = 0;
    let timer = null;
  
    // Sinh chấm chỉ dẫn động từ số lượng slide thật
    dotsContainer.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `h-2.5 rounded-full transition-all ${
        i === 0 ? "w-8 bg-brand-600 dark:bg-blue-400" : "w-2.5 bg-line dark:bg-line-dark"
      }`;
      dot.setAttribute("aria-label", `Chuyển tới nhận xét ${i + 1}`);
      dot.addEventListener("click", () => {
        go(i);
        start();
      });
      dotsContainer.appendChild(dot);
    });
  
    function updateDots() {
      const dots = dotsContainer.querySelectorAll("button");
      dots.forEach((dot, i) => {
        dot.className = `h-2.5 rounded-full transition-all ${
          i === index ? "w-8 bg-brand-600 dark:bg-blue-400" : "w-2.5 bg-line dark:bg-line-dark"
        }`;
      });
    }
  
    function go(next) {
      index = (next + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((s, i) => s.toggleAttribute("inert", i !== index));
      updateDots();
    }
  
    function start() {
      stop();
      timer = setInterval(() => go(index + 1), 4500);
    }
  
    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
  
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        go(index - 1);
        start();
      });
    }
  
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        go(index + 1);
        start();
      });
    }
  
    // Tạm dừng khi hover hoặc focus bàn phím
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  
    go(0);
    start();
  }