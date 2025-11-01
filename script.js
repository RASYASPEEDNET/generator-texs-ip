function generateImage() {
  const message = document.getElementById("message").value.trim();
  const resultDiv = document.getElementById("result");

  if (!message) {
    alert("Harap masukkan teks terlebih dahulu!");
    return;
  }

  resultDiv.innerHTML = '<div class="loader"></div><p>Sedang memproses...</p>';

  const apiUrl = `https://brat.siputzx.my.id/iphone-quoted?time=11%3A26&messageText=${encodeURIComponent(message)}&carrierName=INDOSAT%20OOREDOO&batteryPercentage=88&signalStrength=4&emojiStyle=apple`;

  setTimeout(() => {
    resultDiv.innerHTML = `
      <p>Hasil:</p>
      <p style="margin:10px 0; font-size:1.1rem; color:#fff; background:#222; padding:10px; border-radius:8px;">
        ${message}
      </p>
      <img src="${apiUrl}" alt="Generated Image">
      <br>
      <a class="download-btn" href="/api/download?url=${encodeURIComponent(apiUrl)}">⬇️ Download</a>
    `;
  }, 800);
}
