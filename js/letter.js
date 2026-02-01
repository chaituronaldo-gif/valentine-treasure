(() => {
    const btn = document.getElementById("continueBtn");
  
    btn.addEventListener("click", () => {
      btn.disabled = true;
      btn.textContent = "Turning the page… 💌";
  
      setTimeout(() => {
        goTo("./chest.html");
      }, 600);
    });
  })();
  