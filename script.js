document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    var target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu on link click
    document.querySelector(".nav-links").classList.remove("active");
    document.querySelector(".nav-hamburger").classList.remove("active");
  });
});

// Hamburger menu toggle
document.querySelector(".nav-hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-links").classList.toggle("active");
});

document.querySelector(".contacto-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var btn = this.querySelector(".btn-enviar");
  var form = this;

  btn.textContent = "¡Mensaje enviado!";
  btn.style.backgroundColor = "#D4A0A0";

  setTimeout(function () {
    btn.textContent = "Enviar";
    btn.style.backgroundColor = "";
    form.reset();
  }, 3000);
});
