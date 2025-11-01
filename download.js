function generateImage() {
  const message = document.getElementById("message").value.trim();
  const resultDiv = document.getElementById("result");

  if (!message) {
    alert("Harap masukkan teks terlebih dahulu!");
    return;
  }
  resultDiv.innerHTML = '<div class="loader"></div><p>Sedang memproses...</p>';
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeRaw = `${hours}:${minutes}`;
  const timeParam = encodeURIComponent(timeRaw);
  const cacheBuster = Date.now();

  const apiUrl = `https://brat.siputzx.my.id/iphone-quoted?time=${timeParam}&messageText=${encodeURIComponent(message)}&carrierName=INDOSAT%20OOREDOO&signalStrength=4&emojiStyle=apple&_ts=${cacheBuster}`;

  
  console.log("generateImage() → timeRaw:", timeRaw, "timeParam:", timeParam, "apiUrl:", apiUrl);


  setTimeout(() => {
    resultDiv.innerHTML = `
      <p>Hasil:</p>
      <p style="margin:10px 0; font-size:1.1rem; color:#fff; background:#111; padding:10px; border-radius:8px;">
        ${escapeHtml(message)}
      </p>
      <img id="generatedImg" src="${apiUrl}" alt="Generated Image">
      <br>
      <a class="download-btn" href="${apiUrl}" target="_blank" rel="noopener">⬇️ Download</a>
    `;

  
    const img = document.getElementById("generatedImg");
    img.addEventListener('load', () => console.log('Image loaded:', img.src));
    img.addEventListener('error', (e) => console.error('Image failed to load:', e));
  }, 600);
}

function escapeHtml(str) {
  return str.replace(/[&<>"'`=\/]/g, function(s) {
    return ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    })[s];
  });
}
