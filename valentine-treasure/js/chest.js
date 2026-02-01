(() => {
    const CORRECT = "September"; // case-sensitive
  
    const chest = document.getElementById("chest");
    const input = document.getElementById("answerInput");
    const btn = document.getElementById("unlockBtn");
    const hint = document.getElementById("hint");
  
    function wrongAnswer() {
      input.classList.remove("shake");
      void input.offsetWidth; // restart animation
      input.classList.add("shake");
  
      hint.textContent = "Nope 😛 Try again (remember: case-sensitive). First letter should be capital.";
      hint.style.opacity = "1";
    }
  
    function correctAnswer() {
      chest.classList.add("open");
      hint.textContent = "Unlocked 💖 Opening…";
      btn.disabled = true;
      input.disabled = true;
  
      setTimeout(() => {
        goTo("./valentine.html");
      }, 1200);
    }
  
    function tryUnlock() {
      const value = input.value.trim();
      if (value === CORRECT) correctAnswer();
      else wrongAnswer();
    }
  
    btn.addEventListener("click", tryUnlock);
  
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") tryUnlock();
    });
  
    // auto-focus for convenience
    window.addEventListener("load", () => input.focus());
  })();
  