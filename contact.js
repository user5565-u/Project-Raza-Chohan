document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", function (event) {
    
    submitBtn.style.backgroundColor = "#00cc66";
    submitBtn.style.color = "white";
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;


    setTimeout(() => {

      const audio = new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg");
      audio.play();

      submitBtn.style.backgroundColor = "#007BFF";
      submitBtn.innerText = "Message Sent ✅";

    
      const utter = new SpeechSynthesisUtterance("Form submitted successfully!");
      speechSynthesis.speak(utter);

      
      alert("Your message has been sent successfully!");

  
      setTimeout(() => {
        submitBtn.style.backgroundColor = "";
        submitBtn.style.color = "";
        submitBtn.innerText = "Send Message";
        submitBtn.disabled = false;
      }, 2000);
    }, 1000);
  });
});
