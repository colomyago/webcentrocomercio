// Espacios del Centro. Para sumar un logo: copiarlo a public/espacios/ y completar `logo`.
// `enlace` (página interna o sitio externo) se completa cuando exista; sin enlace la tarjeta no es clickeable.
export const espacios = [
  {
    slug: "mujeres",
    nombre: "Espacio Mujeres",
    iniciales: "EM",
    logo: null,
    enlace: null,
  },
  {
    slug: "gastronomia-y-turismo",
    nombre: "Espacio Gastronomía y Turismo",
    iniciales: "GT",
    logo: "/espacios/gastronomia-turismo.svg",
    enlace: null,
  },
  {
    // Gestionado por fuera del Centro; el logo lo provee la propia agrupación.
    slug: "jovenes-empresarios",
    nombre: "Cámara de Jóvenes Empresarios de Zárate",
    iniciales: "JE",
    logo: "/espacios/cjez.webp",
    enlace: null,
  },
  {
    slug: "digital",
    nombre: "Espacio Digital",
    iniciales: "ED",
    logo: "/espacios/digital.svg",
    enlace: null,
  },
];
