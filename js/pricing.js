// js/pricing.js

export function initPricing() {
    const toggle = document.getElementById("billing-toggle");
    const priceElements = document.querySelectorAll("[data-price]");
    const periodElements = document.querySelectorAll("[data-period]");
    if (!toggle || priceElements.length === 0) return;
  
    const dong = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    });
  
    toggle.addEventListener("click", () => {
      const isYearly = toggle.getAttribute("aria-checked") !== "true";
      toggle.setAttribute("aria-checked", String(isYearly));
  
      const dot = toggle.querySelector(".toggle-dot");
      if (dot) {
        dot.classList.toggle("translate-x-5", isYearly);
      }
  
      priceElements.forEach((el) => {
        const raw = isYearly ? el.dataset.yearly : el.dataset.monthly;
        if (raw) {
          el.textContent = dong.format(Number(raw));
        }
      });
  
      periodElements.forEach((el) => {
        el.textContent = isYearly ? "/năm (tiết kiệm 20%)" : "/tháng";
      });
    });
  }