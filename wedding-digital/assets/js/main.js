// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // tombol gift
  const openBtn = document.getElementById('openGift');
  const closeBtn = document.getElementById('closeGift');
  const giftCard = document.getElementById('giftCard');

  if (openBtn && giftCard) {
    openBtn.addEventListener('click', () => giftCard.classList.remove('translate-x-full'));
  }
  if (closeBtn && giftCard) {
    closeBtn.addEventListener('click', () => giftCard.classList.add('translate-x-full'));
  }

  // copy to clipboard — gunakan event delegation jika tombol ada
  window.copyToClipboard = function(id) {
    const el = document.getElementById(id);
    if (!el) return alert('Tidak ditemukan');
    const text = el.innerText || el.textContent;
    navigator.clipboard.writeText(text).then(() => {
      alert('Nomor rekening disalin!');
    }).catch(()=> alert('Gagal menyalin'));
  }

  // message form
  const form = document.getElementById("messageForm");
  const nameInput = document.getElementById("nameInput");
  const messageInput = document.getElementById("messageInput");
  const messageList = document.getElementById("messageList");

  if (form && nameInput && messageInput && messageList) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = nameInput.value.trim();
      const message = messageInput.value.trim();
      if (name && message) {
        const msgBox = document.createElement("div");
        msgBox.className = "bg-[#d4e3d2] border border-[#a5bfa0] px-4 py-3 rounded-xl text-sm text-gray-800 shadow";
        msgBox.innerHTML = `<strong>${name} :</strong><br/>${message}`;
        messageList.prepend(msgBox);
        form.reset();
      }
    });
  }
});
