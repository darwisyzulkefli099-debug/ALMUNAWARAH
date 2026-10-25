// AL-MUNAWARAH — interaksi website
// PENTING: Gantikan nombor di bawah dengan nombor WhatsApp rasmi.
// Format: kod negara + nombor tanpa tanda +, ruang atau sengkang. Contoh Malaysia: 60123456789
const WHATSAPP_NUMBER = "60123456789";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const whatsappButton = document.getElementById("whatsappButton");
const message = "Assalamualaikum, saya ingin bertanya tentang perkhidmatan Pusat Rawatan Tradisional Al-Munawarah.";
whatsappButton.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

document.getElementById("year").textContent = new Date().getFullYear();
