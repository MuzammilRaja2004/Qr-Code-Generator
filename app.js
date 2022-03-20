const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr_code img");

generateBtn.addEventListener("click", () => {
  const qrCodeValue = qrInput.value;
  if (!qrCodeValue) return; // if Input Value Is Emapty , return
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrCodeValue}&size=200x200`;
  wrapper.classList.add("active");
});
