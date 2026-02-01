(() => {
    const envelope = document.getElementById("envelope");
    const flap = document.getElementById("flap");
    const seal = document.getElementById("seal");
    const hint = document.getElementById("hint");
  
    const openAndNext = once(() => {
      envelope.classList.add("open");
      if (hint) hint.textContent = "Opening… 💖";
  
      // Prevent double clicks
      seal.disabled = true;
      seal.style.cursor = "default";
  
      // Navigate after animation
      setTimeout(() => {
        goTo("./letter.html");
      }, 1200);
    });
  
    // Open on seal click
    seal.addEventListener("click", openAndNext);
  
    // (Optional) allow clicking anywhere on envelope too:
    envelope.addEventListener("click", (e) => {
      // If they clicked the button, it's already handled
      if (e.target.closest("#seal")) return;
      openAndNext();
    });
  
    // Accessibility: open with Enter/Space if focused
    seal.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") openAndNext();
    });
  })();
  