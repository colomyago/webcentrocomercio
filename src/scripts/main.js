var menuLinks = document.querySelector(".nav-links");
var hamburguesa = document.querySelector(".nav-hamburger");

function cerrarMenu() {
  menuLinks.classList.remove("active");
  hamburguesa.classList.remove("active");
  hamburguesa.setAttribute("aria-expanded", "false");
  hamburguesa.setAttribute("aria-label", "Abrir menú");
  document.body.classList.remove("menu-abierto");
}

document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    var target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
    cerrarMenu();
  });
});

// Hamburger menu toggle
hamburguesa.addEventListener("click", function () {
  var abierto = menuLinks.classList.toggle("active");
  this.classList.toggle("active", abierto);
  this.setAttribute("aria-expanded", String(abierto));
  this.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  document.body.classList.toggle("menu-abierto", abierto);
});

// Cerrar el menú con Escape o al tocar fuera de él
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && menuLinks.classList.contains("active")) {
    cerrarMenu();
    hamburguesa.focus();
  }
});

document.addEventListener("click", function (e) {
  if (
    menuLinks.classList.contains("active") &&
    !menuLinks.contains(e.target) &&
    !hamburguesa.contains(e.target)
  ) {
    cerrarMenu();
  }
});

// Resaltar en el menú la sección que se está viendo
var enlacesMenu = document.querySelectorAll('.nav-links a[href^="#"]');

if ("IntersectionObserver" in window) {
  var observador = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        enlacesMenu.forEach(function (enlace) {
          if (enlace.getAttribute("href") === "#" + entrada.target.id) {
            enlace.setAttribute("aria-current", "true");
          } else {
            enlace.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  document.querySelectorAll("main section[id]").forEach(function (seccion) {
    observador.observe(seccion);
  });
}

// Botón para volver arriba: aparece al bajar del hero
var volverArriba = document.querySelector(".volver-arriba");

function actualizarVolverArriba() {
  volverArriba.classList.toggle("visible", window.scrollY > 700);
}

window.addEventListener("scroll", actualizarVolverArriba, { passive: true });
actualizarVolverArriba();

var contactoForm = document.querySelector(".contacto-form");

if (contactoForm) {
  contactoForm.addEventListener("submit", function (e) {
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
}
