function goTo(url) {
    window.location.href = url;
  }
  
  function once(fn) {
    let called = false;
    return (...args) => {
      if (called) return;
      called = true;
      return fn(...args);
    };
  }
  