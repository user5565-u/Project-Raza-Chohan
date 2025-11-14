document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const submitBtn = document.querySelector(".button");

  submitBtn.addEventListener("mouseover", () => {
    submitBtn.style.backgroundColor = "#28a745";
    submitBtn.style.color = "white";
    submitBtn.style.transform = "scale(1.1)";
    submitBtn.style.transition = "0.3s";
  });

  submitBtn.addEventListener("mouseout", () => {
    submitBtn.style.backgroundColor = "";
    submitBtn.style.color = "";
    submitBtn.style.transform = "scale(1)";
  });

  form.addEventListener("submit", (e) => {

    const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
    audio.play();

    submitBtn.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    submitBtn.style.color = "white";

    alert("✅ Your message has been sent successfully!");
  });
});
