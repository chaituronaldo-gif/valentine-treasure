(() => {
    const heartsWrap = document.getElementById("hearts");
    const nextBtn = document.getElementById("nextBtn");
    const tinyNote = document.getElementById("tinyNote");
  
    // Create falling hearts continuously for a few seconds
    const HEARTS = ["💖", "💗", "💘", "💕", "❤️", "💞"];
    const DURATION_MS = 5000; // hearts generate for 5 seconds
    const CREATE_EVERY_MS = 130;
  
    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    function spawnHeart() {
      const el = document.createElement("div");
      el.className = "heart";
      el.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
      el.style.left = `${rand(0, 100)}vw`;
      el.style.fontSize = `${rand(18, 34)}px`;
      el.style.animationDuration = `${rand(2.8, 6.2)}s`;
      el.style.opacity = `${rand(0.6, 0.95)}`;
  
      heartsWrap.appendChild(el);
  
      // cleanup
      setTimeout(() => el.remove(), 7000);
    }
  
    function spawnSparkle() {
      // tiny confetti-like squares
      const s = document.createElement("div");
      s.className = "sparkle";
      s.style.left = `${rand(10, 90)}vw`;
      s.style.top = `${rand(10, 40)}vh`;
      // no custom colors per your base style; uses default via background with opacity
      s.style.background = "rgba(255, 247, 251, 0.9)";
      heartsWrap.appendChild(s);
      setTimeout(() => s.remove(), 1100);
    }
  
    // Start
    let interval = setInterval(spawnHeart, CREATE_EVERY_MS);
    let sparkleInterval = setInterval(spawnSparkle, 220);
  
    setTimeout(() => {
      clearInterval(interval);
      clearInterval(sparkleInterval);
    }, DURATION_MS);
  
    // Enable button after a moment so she watches the hearts first
    setTimeout(() => {
      nextBtn.disabled = false;
      tinyNote.textContent = "Go on… open them 🎁";
    }, 1600);
  
    nextBtn.addEventListener("click", () => {
      nextBtn.disabled = true;
      nextBtn.textContent = "Opening… 💝";
      setTimeout(() => goTo("./coupons.html"), 500);
    });
  })();
  