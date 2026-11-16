// FAQ accordion is handled natively by <details>. This countdown is a visual
// placeholder; set the target date below to the campaign's actual end date.
(() => {
  const target = new Date();
  target.setDate(target.getDate() + 1);
  target.setHours(23, 59, 59, 999);

  const fields = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
  };

  function updateCountdown() {
    const remaining = Math.max(0, target.getTime() - Date.now());
    const values = {
      days: Math.floor(remaining / 86400000),
      hours: Math.floor((remaining % 86400000) / 3600000),
      minutes: Math.floor((remaining % 3600000) / 60000),
      seconds: Math.floor((remaining % 60000) / 1000)
    };
    Object.entries(values).forEach(([key, value]) => {
      if (fields[key]) fields[key].textContent = String(value).padStart(2, "0");
    });
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();

document.getElementById("year").textContent=new Date().getFullYear()