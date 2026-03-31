document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    var target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
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
