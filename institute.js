
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#institute form");
  const submitBtn = form.querySelector(".submit-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    submitBtn.style.backgroundColor = "#4CAF50"; 
    submitBtn.value = "Sending...";

    
    const getformURL = "https://getform.io/f/your_institute_form_link";

    fetch(getformURL, {
      method: "POST",
      body: new FormData(form)
    })
      .then(() => {
        submitBtn.style.backgroundColor = "#2ecc71";
        submitBtn.value = "Submitted ✅";


        const utter = new SpeechSynthesisUtterance("Form submitted successfully!");
        speechSynthesis.speak(utter);

        form.reset();
      })
      .catch(() => {
        submitBtn.style.backgroundColor = "#e74c3c";
        submitBtn.value = "Error!";
      });
  });
});


