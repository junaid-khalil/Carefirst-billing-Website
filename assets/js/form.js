document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init("BOj7PYqWDHCFcDGjZ"); // Replace with your EmailJS public key

  const form = document.getElementById("consultationForm");
  const messageDiv = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const templateParams = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      practicetitle: document.getElementById("text").value,
      massage: document.getElementById("massage").value,
      
    };

    emailjs.send("service_5te3t1c", "template_9h6wq8n", templateParams)
      .then(function(response) {
        messageDiv.innerHTML = "<p class='success'>Form submitted successfully!</p>";
        form.reset();
      }, function(error) {
        messageDiv.innerHTML = "<p class='error'>Form submission failed. Please try again.</p>";
        console.error("FAILED...", error);
      });
  });
});
