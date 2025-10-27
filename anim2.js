// Smooth Bottom-to-Up Animation for Matoshri Galaxy
document.addEventListener("DOMContentLoaded", () => {

  // Sections to Animate (auto-detected)
  const selectors = [
    "h1",                 // All main headings
    "#heads",
    "header",
    "#bodyhead",
    "#sale",
    "#review",
    "#sale",
    "#past",
    "#his",
    "#bottom",
    "#footer",
    "#ender"
  ];

  // Apply initial hidden state and movement from bottom
  let elements = [];
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(60px)"; // Start from lower position
      el.style.transition = "all 1s ease-out";
      elements.push(el);
    });
  });

  // On scroll – early trigger reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)"; // Slide Up
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 }); // Earlier trigger for smooth reveal

  // Observe each element
  elements.forEach(el => observer.observe(el));

});
