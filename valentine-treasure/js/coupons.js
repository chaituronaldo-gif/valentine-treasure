(() => {
    /**
     * ===========================
     * CONFIG — YOU WILL EDIT THIS
     * ===========================
     */
    const EMAILJS_SERVICE_ID = "service_v8jwgnp";
    const EMAILJS_TEMPLATE_ID = "template_g2bxl3b";
    const EMAILJS_PUBLIC_KEY = "LB5AJbVYzsycQBlgf";
  
    /**
     * Email destination is already set inside EmailJS
     * (chaituronaldo@gmail.com)
     */
  
    emailjs.init(EMAILJS_PUBLIC_KEY);
  
    const coupons = document.querySelectorAll(".coupon");
  
    // Restore redeemed state
    coupons.forEach((coupon) => {
      const id = coupon.dataset.id;
      if (localStorage.getItem(`redeemed-${id}`) === "yes") {
        markRedeemed(coupon);
      }
    });
  
    coupons.forEach((coupon) => {
      coupon.addEventListener("click", () => {
        if (coupon.classList.contains("redeemed")) return;
  
        const id = coupon.dataset.id;
        const label = coupon.textContent;
  
        // Confirm (cute, but prevents accidental clicks)
        const ok = confirm(`Redeem "${label}" now? 💖`);
        if (!ok) return;
  
        // Mark locally
        localStorage.setItem(`redeemed-${id}`, "yes");
        markRedeemed(coupon);
  
        // Send email
        sendEmail(label);
      });
    });
  
    function markRedeemed(el) {
      el.classList.add("redeemed");
      el.textContent = "Redeemed 💕";
    }
  
    function sendEmail(couponName) {
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        coupon: couponName,
        time: new Date().toLocaleString(),
      })
      .then(
        () => {
          console.log("Email sent");
        },
        (err) => {
          console.error("Email failed", err);
        }
      );
    }
  })();
  