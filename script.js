const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(176, 138, 60, 0.16), transparent 120px),
      linear-gradient(180deg, rgba(20, 14, 8, 0.88), rgba(5, 4, 3, 0.96))
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = `
      linear-gradient(180deg, rgba(20, 14, 8, 0.88), rgba(5, 4, 3, 0.96))
    `;
  });
});