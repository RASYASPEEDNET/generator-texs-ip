function getTimeNow() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  return `${h}:${m}`;
}

function generateImage() {
  const message = document.getElementById("message").value.trim();
  if (message === "") return alert("Isi dulu pesannya ya!");

  const time = getTimeNow();
  const url = `https://brat.siputzx.my.id/iphone-quoted?time=${time}&messageText=${encodeURIComponent(message)}&carrierName=INDOSAT%20OOREDOO`;

  // Tampilkan gambar dulu
  document.getElementById("result").innerHTML = `
    <img id="previewImg" src="${url}" style="width:100%;border-radius:18px;margin-top:15px;">
    <button id="downloadBtn" onclick="downloadImage('${url}')" style="margin-top:10px;padding:10px 15px;border:none;border-radius:10px;background:#1d9bf0;color:white;cursor:pointer;animation:pulse 1.5s infinite;">
      ⬇️ Download
    </button>
  `;
}

async function downloadImage(imgUrl) {
  try {
    const response = await fetch(imgUrl);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "iphone-quoted.png";
    link.click();
  } catch (err) {
    alert("Gagal download, coba ulang.");
  }
}

/* Animasi tombol */
const style = document.createElement("style");
style.innerHTML = `
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
}
`;
document.head.appendChild(style);
