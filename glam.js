// 1. AUTO YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// 2. COUNTDOWN TIMER - CHANGED: Now 1d 10h 18m 10s like Bella, not midnight reset
let totalSeconds = (1 * 24 * 60 * 60) + (10 * 60 * 60) + (18 * 60) + 10;

function updateCountdown() {
  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  const dEl = document.getElementById("d");
  const hEl = document.getElementById("h");
  const mEl = document.getElementById("m");
  const sEl = document.getElementById("s");

  if (dEl) dEl.textContent = String(d).padStart(2, '0');
  if (hEl) hEl.textContent = String(h).padStart(2, '0');
  if (mEl) mEl.textContent = String(m).padStart(2, '0');
  if (sEl) sEl.textContent = String(s).padStart(2, '0');

  if (totalSeconds > 0) totalSeconds--;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// 3. FAQ ACCORDION - click to open/close
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const isOpen = faqItem.classList.contains("active");

    // Close all others
    document.querySelectorAll(".faq").forEach(item => {
      item.classList.remove("active");
    });

    // Open clicked one if it was closed
    if (!isOpen) {
      faqItem.classList.add("active");
    }
  });
});

// 4. SOCIAL PROOF POPUP - rotates REAL reviews only - CHANGED: Removed 1-1, added Rose/Yetty/Ihuoma
const proofs = [
  { text: "I used to pay ₦70k for every event, now it takes me less than an hour to do my own makeup!.", name: "Amaka • Lagos • Verified Student" },
  { text: "My graduation makeup ateeee, all thanks to this class.", name: "Graduation Student • Verified Student" },
  { text: "See what I did with the eyes. I'm an expert now!!!!!!", name: "Real Student • Verified Student" },
  { text: "Soft glam, done by ME. Blush, brows, lips - all me.", name: "Real Student • Verified Student" },
  { text: "I did my own makeup for my event and everyone thought I paid a MUA.", name: "Rose • Verified Student" },
  { text: "I used to panic every time I had to do my makeup. Now I enjoy it.", name: "Yetty • Australia • Verified Student" },
  { text: "From zero knowledge to doing my own glam confidently.", name: "Ihuoma • UK • Verified Student" },
  { text: "Thank you very much. I love it!!!", name: "Real Student • Verified Student" }
];

let proofIndex = 0;
const popup = document.getElementById("proof-popup");
const proofText = document.getElementById("proof-text");
const proofName = document.getElementById("proof-name");

function showProof() {
  const current = proofs[proofIndex];
  proofText.textContent = "“" + current.text + "”";
  proofName.textContent = current.name + " • Just now";
  popup.classList.add("show");

  // Hide after 6 seconds
  setTimeout(() => {
    popup.classList.remove("show");
  }, 6000);

  proofIndex = (proofIndex + 1) % proofs.length;
}

// First popup after 8 seconds, then every 30 seconds
setTimeout(() => {
  showProof();
  setInterval(showProof, 30000);
}, 8000);

// Close button
document.getElementById("proof-close").addEventListener("click", () => {
  popup.classList.remove("show");
});





document.querySelectorAll('img.auto-trim').forEach(img => {
  if (img.complete) trim(img); else img.addEventListener('load', () => trim(img));
  function trim(img) {
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    c.width = img.naturalWidth; c.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
    try {
      const d = ctx.getImageData(0, 0, c.width, c.height).data;
      const keep = [];
      for (let y = 0; y < c.height; y++) {
        let white = 0, total = 0;
        for (let x = 0; x < c.width; x += 4) {
          const i = (y * c.width + x) * 4;
          total++;
          if (d[i] > 245 && d[i+1] > 245 && d[i+2] > 245) white++;
        }
        if (white / total < 0.97) keep.push(y);
      }
      if (keep.length && keep.length < c.height * 0.9) {
        const c2 = document.createElement('canvas');
        c2.width = c.width; c2.height = keep.length;
        const ctx2 = c2.getContext('2d');
        keep.forEach((y, ny) => ctx2.drawImage(c, 0, y, c.width, 1, 0, ny, c.width, 1));
        img.src = c2.toDataURL('image/jpeg', 0.9);
      }
    } catch(e) {}
  }
});

/* BOLD TIMER */
setInterval(() => {
  const d = document.getElementById('d');
  const h = document.getElementById('h');
  const m = document.getElementById('m');
  const s = document.getElementById('s');
  if (!d) return;
  document.getElementById('d2').textContent = d.textContent;
  document.getElementById('h2').textContent = h.textContent;
  document.getElementById('m2').textContent = m.textContent;
  document.getElementById('s2').textContent = s.textContent;
}, 1000);
