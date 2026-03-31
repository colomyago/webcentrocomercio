# Project Guidelines

## About

Sitio web estático del Centro Del Comercio e Industrias de Zárate (Buenos Aires, Argentina). Landing page institucional sin frameworks ni build tools.

## Code Style

- HTML5 semántico en español (lang="es")
- CSS con variables custom (`--color-*`) definidas en `:root` de `styles.css`
- JavaScript vanilla, sin dependencias externas
- No usar CSS ni JS inline. Estilos en `styles.css`, scripts en `script.js`
- Tipografía: Cormorant Garamond (títulos), DM Sans (cuerpo)

## Architecture

- `index.html` — estructura y contenido
- `styles.css` — todos los estilos, variables de color, responsive (768px)
- `script.js` — scroll suave y manejo del formulario
- Logos: `logo.png` (nav), `logo2.png` (hero)

## Conventions

- Las secciones desactivadas temporalmente se comentan con `<!-- -->` en el HTML, no se eliminan
- Los placeholders usan el formato `[TEXTO_DESCRIPTIVO]` entre corchetes
- Responsive mobile-first: breakpoint principal en `max-width: 768px`
- Todos los colores se referencian via variables CSS, nunca hardcodeados en las reglas

## Instagram

- Perfil: https://www.instagram.com/centrodelcomercio/
- Usuario: @centrodelcomercio
