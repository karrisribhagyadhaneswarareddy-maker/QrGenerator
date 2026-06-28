const qrText = document.getElementById("qr-text");
const qr = document.getElementById("qr");
const img = document.getElementById("img");
const btn = document.getElementById("btn");

btn.addEventListener("click", qrGenerator);

function qrGenerator() {
  const text = qrText.value.trim();

  if (text === "") {
    alert("Please enter text or a URL!");
    qr.style.display = "none";
    return;
  }

  img.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodeURIComponent(text);

  qr.style.display = "flex";
}

qrText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    qrGenerator();
  }
});
