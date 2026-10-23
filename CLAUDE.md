# Centro Del Comercio e Industrias de Zárate

Sitio institucional de una entidad civil sin fines de lucro (Zárate, Buenos Aires, Argentina). Sitio estático hecho con **Astro**, en español (`lang="es"`).

## Comandos

- `npm run dev` — servidor local con recarga
- `npm run build` — genera `dist/`
- `npm run preview` — sirve `dist/` para revisar el build

## Estructura

- `src/pages/index.astro` — página única; compone las secciones
- `src/layouts/Layout.astro` — `<head>`, fuentes, CSS global y script
- `src/components/` — una sección por componente (`Nav`, `Hero`, `Nosotros`, `Contacto`, `Footer`, `Servicios`)
- `src/styles/global.css` — todos los estilos y variables `--color-*` en `:root`
- `src/scripts/main.js` — menú hamburguesa, scroll suave, formulario
- `public/` — logos (`logo.png` nav, `logo2.png` hero), servidos en `/`

## Despliegue

Hosting en Hostinger (`cciz.com.ar`). Hostinger NO ejecuta el build: sube archivos tal cual.

1. Push a `main` → GitHub Actions (`.github/workflows/deploy.yml`) hace `npm ci && npm run build`.
2. La Action publica `dist/` en la rama **`deploy`** (force push; nunca editarla a mano).
3. Hostinger (hPanel → Avanzado → Git) está conectado a la rama `deploy` y despliega en `public_html` con implementación automática.

Nunca commitear `dist/` en `main`. Para publicar: push a `main` y esperar la Action.

## Convenciones

- Código y textos en español; HTML semántico.
- Colores solo vía variables CSS (`--color-*`), nunca hardcodeados en reglas.
- Mobile-first; breakpoint principal `max-width: 768px`.
- Tipografía: Cormorant Garamond (títulos), DM Sans (cuerpo).
- Sin CSS ni JS inline: estilos en `global.css`, lógica en `main.js`.
- Secciones desactivadas se comentan o quedan como componente sin importar; no se borran.
- Placeholders con formato `[TEXTO_DESCRIPTIVO]`.
- Cada sección es autocontenida (su HTML en un componente, sus reglas de CSS agrupadas).

## Contenido

- Instagram: https://www.instagram.com/centrodelcomercio/ (@centrodelcomercio)
- X: https://x.com/cciz_oficial · YouTube: https://www.youtube.com/@CCIZ-Oficial
- Desactivado y listo para activar: Servicios, email de contacto, formulario, botón "Contactanos" del hero, link "Servicios" del nav.

## Identidad de git

Los commits del repo usan `colombyago <colomboyago0@gmail.com>`. Si git no tiene identidad configurada, pasarla con `git -c user.name=... -c user.email=...` solo para ese commit.

## Pendiente

- Rediseño visual (hero con imagen, más secciones, color de acento, contacto completo). Se hace sobre esta base Astro.
