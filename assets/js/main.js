// ...existing code...
(function () {
  function init() {
    const openGift = document.getElementById("openGift");
    const closeGift = document.getElementById("closeGift");
    const giftCard = document.getElementById("giftCard");

    if (openGift && closeGift && giftCard) {
      // Buka gift card
      openGift.addEventListener("click", () => {
        giftCard.classList.remove("translate-x-full");
        giftCard.classList.add("translate-x-0");
        document.body.style.overflow = 'hidden';
      });

      // Tutup gift card
      closeGift.addEventListener("click", () => {
        giftCard.classList.remove("translate-x-0");
        giftCard.classList.add("translate-x-full");
        document.body.style.overflow = '';
      });

      // Tutup saat klik area gelap (klik di luar panel)
      giftCard.addEventListener('click', function (e) {
        if (e.target === giftCard) {
          giftCard.classList.add("translate-x-full");
          giftCard.classList.remove("translate-x-0");
          document.body.style.overflow = '';
        }
      });
    }

    // === Copy to clipboard ===
    window.copyToClipboard = function (id) {
      const el = document.getElementById(id);
      if (!el) return alert("Tidak ditemukan");
      const text = el.innerText || el.textContent;
      navigator.clipboard.writeText(text)
        .then(() => alert("Nomor rekening berhasil disalin: " + text))
        .catch(() => alert("Gagal menyalin"));
    };

    // === Message form ===
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
          msgBox.className =
            "bg-[#d4e3d2] border border-[#a5bfa0] px-4 py-3 rounded-xl text-sm text-gray-800 shadow";
          msgBox.innerHTML = `<strong>${name} :</strong><br/>${message}`;
          messageList.prepend(msgBox);
          form.reset();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();