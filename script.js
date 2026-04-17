const timeEl = document.querySelector('[data-testid="test-user-time"]');

    function updateTime() {
      timeEl.textContent = `Current time (ms): ${Date.now()}`;
    }

    updateTime();
    setInterval(updateTime, 1000);