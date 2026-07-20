// ===============================
// Rebka Zerihun — Portfolio JS
// ===============================

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close mobile menu when a link is clicked
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Animated counter
function animateCount(el) {
  const target = Number(el.dataset.count) || 0;
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// Reveal-on-scroll + trigger counters / skill bars
const revealables = document.querySelectorAll(
  ".section, .hero-content, .hero-photo"
);
revealables.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add("visible");

      // Fire counters inside this element
      el.querySelectorAll(".stat-num[data-count]").forEach((num) => {
        if (!num.dataset.done) {
          num.dataset.done = "true";
          animateCount(num);
        }
      });

      // Animate skill bars inside this element
      el.querySelectorAll(".bar").forEach((bar) => bar.classList.add("animate"));

      observer.unobserve(el);
    });
  },
  { threshold: 0.2 }
);

revealables.forEach((el) => observer.observe(el));
