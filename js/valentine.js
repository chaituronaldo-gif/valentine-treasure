(() => {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const subText = document.getElementById("subText");
    const area = document.getElementById("buttonsArea");
  
    let attempts = 0;
  
    const messages = [
      "Nice try 😏",
      "Hmm… not so easy!",
      "Still no? 👀",
      "You know the answer 💖",
      "Okay this is getting funny 😂",
      "Alright… I’ll stop running soon 😇"
    ];
  
    function moveNoButton() {
      const areaRect = area.getBoundingClientRect();
      const btnRect = noBtn.getBoundingClientRect();
  
      const maxX = areaRect.width - btnRect.width;
      const maxY = areaRect.height - btnRect.height;
  
      const x = Math.random() * maxX;
      const y = Math.random() * maxY;
  
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
  
      attempts++;
      if (attempts < messages.length) {
        subText.textContent = messages[attempts];
      }
    }
  
    // Evade on hover (desktop)
    noBtn.addEventListener("mouseenter", moveNoButton);
  
    // Evade on tap / click (mobile + desktop)
    noBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      moveNoButton();
    });
  
    // Extra safety: if click somehow fires
    noBtn.addEventListener("click", (e) => {
      e.preventDefault();
      moveNoButton();
    });
  
    // YES is always allowed
    yesBtn.addEventListener("click", () => {
      yesBtn.disabled = true;
      yesBtn.textContent = "YAYYYYY 💖";
  
      setTimeout(() => {
        goTo("./celebrate.html");
      }, 500);
    });
  })();
  