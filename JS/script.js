const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Function to generate QR code
function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";
  });
}

// Event listeners
qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

qrCodeBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generateQrCode();
  }
});

// Clear QR code on input clear
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR code";
  }
});
