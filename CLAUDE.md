# Centro Del Comercio e Industrias de Zárate

Sitio institucional de una entidad civil sin fines de lucro (Zárate, Buenos Aires, Argentina). Sitio estático hecho con **Astro**, en español (`lang="es"`).

## Comandos

- `npm run dev` — servidor local con recarga
- `npm run build` — genera `dist/`
- `npm run preview` — sirve `dist/` para revisar el build

## Estructura

- `src/pages/index.astro` — página única; compone las secciones
- `src/layouts/Layout.astro` — `<head>`, fuentes, CSS global y script
- `src/components/` — una sección por componente (`Nav`, `Hero`, `Nosotros`, `Espacios`, `Redes`, `Footer`, `Servicios`)
- `src/data/contacto.js` — WhatsApp (número con código de país, ej. `5493487123456`) y email. Mientras sean `null` no se muestra nada; al completarlos aparecen solas las filas en Redes, el botón flotante de WhatsApp y los datos estructurados.
- `src/data/espacios.js` — lista de espacios (nombre, logo, enlace); logos en `public/espacios/`
- `src/styles/global.css` — todos los estilos y variables `--color-*` en `:root`
- `src/scripts/main.js` — menú móvil (Escape / tocar fuera), sección activa en el menú, botón volver arriba, scroll suave, formulario
- `public/` — solo lo que se publica: `favicon.png`, `apple-touch-icon.png`, `icon-512.png`, `og-image.png` (1200x630, vista previa al compartir), `logo-centro.webp` (hero), `logo-centro-chico.webp` (nav/footer) y `espacios/cjez.webp` (logo de la CJEZ).
- `fuentes/` — originales que NO se publican: `logo2.png` (logo del Centro, 1024 px) y `logo-centro.png` (recortado sin márgenes; base para regenerar los WebP, el favicon y `og-image.png`).

## Despliegue

Hosting en Hostinger (`cciz.com.ar`). Hostinger NO ejecuta el build: sube archivos tal cual.

1. Push a `main` → GitHub Actions (`.github/workflows/deploy.yml`) hace `npm ci && npm run build`.
2. La Action publica `dist/` en la rama **`deploy`** (force push; nunca editarla a mano).
3. Hostinger (hPanel → Avanzado → Git) está conectado a la rama `deploy` y despliega en `public_html` con implementación automática.

Nunca commitear `dist/` en `main`. Para publicar: push a `main` y esperar la Action.

## Convenciones

- Código y textos en español; HTML semántico.
- Colores solo vía variables CSS (`--color-*`), nunca hardcodeados en reglas (única excepción: el borde de dientes del hero, un SVG en data URI).
- Mobile-first; breakpoint principal `max-width: 768px`.
- Tipografía: Archivo expandido, peso 700-800 (títulos, tono de cartel de comercio) y Newsreader (cuerpo).
- Identidad visual: rojo `#B01C22` del logo, blanco y negro. Idea rectora: chapa esmaltada de comercio + engranaje del logo (plato blanco con el logo y borde de dientes en el hero). Evitar fondos crema, mayúsculas espaciadas y tarjetas idénticas.
- Los estilos de la barra principal van en `.nav-principal` (no usar el selector `nav` suelto: también hay un `<nav>` en el footer).
- Márgenes laterales siempre con `--gutter` para que todo quede alineado en la misma columna.
- Sin CSS ni JS inline: estilos en `global.css`, lógica en `main.js`.
- Secciones desactivadas se comentan o quedan como componente sin importar; no se borran.
- Placeholders con formato `[TEXTO_DESCRIPTIVO]`.
- Cada sección es autocontenida (su HTML en un componente, sus reglas de CSS agrupadas).

## Contenido

- Instagram: https://www.instagram.com/centrodelcomercio/ (@centrodelcomercio)
- X: https://x.com/cciz_oficial · YouTube: https://www.youtube.com/@CCIZ-Oficial
- Espacios del Centro (Mujeres, Gastronomía y Turismo, Digital) y la Cámara de Jóvenes Empresarios de Zárate (CJEZ, gestionada por fuera del Centro). Datos en `src/data/espacios.js`; los tres primeros aún sin logo propio (marca provisoria de iniciales). Logo CJEZ en baja resolución: reemplazar si aparece uno mejor.
- No publicar información de gestiones anteriores (por ejemplo la Expo-Feria Zárate) por decisión del cliente.
- Desactivado y listo para activar: Servicios, email de contacto, formulario, botón "Contactanos" del hero, link "Servicios" del nav.

## Identidad de git

Los commits del repo usan `colombyago <colomboyago0@gmail.com>`. Si git no tiene identidad configurada, pasarla con `git -c user.name=... -c user.email=...` solo para ese commit.

## Pendiente

- Rediseño visual (hero con imagen, más secciones, color de acento, contacto completo). Se hace sobre esta base Astro.
