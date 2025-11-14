
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#parlor form");
  const submitBtn = form.querySelector(".submit-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    submitBtn.style.backgroundColor = "#ff69b4"; // color change
    submitBtn.value = "Sending...";

    const getformURL = "https://getform.io/f/your_parlor_form_link";

    fetch(getformURL, {
      method: "POST",
      body: new FormData(form)
    })
      .then(() => {
        submitBtn.style.backgroundColor = "#ff1493";
        submitBtn.value = "Submitted ✅";

        const utter = new SpeechSynthesisUtterance("Parlor form submitted successfully!");
        speechSynthesis.speak(utter);

        form.reset();
      })
      .catch(() => {
        submitBtn.style.backgroundColor = "#e74c3c";
        submitBtn.value = "Error!";
      });
  });
});
