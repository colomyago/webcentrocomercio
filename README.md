# Centro Del Comercio e Industrias de Zárate

Sitio web institucional del Centro Del Comercio e Industrias de Zárate, Buenos Aires, Argentina.

## Estructura

```
├── src/
│   ├── pages/index.astro       # Página única
│   ├── layouts/Layout.astro    # Head, fuentes, CSS y JS
│   ├── components/             # Una sección por componente
│   ├── styles/global.css       # Estilos (variables CSS, responsive)
│   └── scripts/main.js         # Menú, scroll suave y formulario
├── public/                     # Logos (logo.png nav, logo2.png hero)
└── .github/workflows/deploy.yml
```

## Secciones activas

- **Nav** — Logo y enlaces a Nosotros y Contacto
- **Hero** — Título, descripción y logo institucional
- **Quiénes somos** — Texto institucional
- **Contacto** — Ubicación e Instagram
- **Footer** — Nombre y año

## Secciones comentadas (listas para activar)

- Servicios (3 cards con ícono, título y descripción)
- Email de contacto
- Formulario de contacto (nombre, apellido, email, mensaje)
- Botón "Contactanos" en el hero
- Link "Servicios" en el nav

## Tecnologías

- Astro (sitio estático), CSS3, JavaScript vanilla
- Google Fonts: Cormorant Garamond + DM Sans
- Diseño responsive (breakpoint: 768px)

## Paleta de colores

| Rol | Color |
|-----|-------|
| Fondo | `#F9F7F4` |
| Texto principal | `#1A1A18` |
| Texto secundario | `#6B6B66` |
| Acento | `#2D5C3F` |
| Fondo suave | `#E8F0EB` |

## Desarrollo

```
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Despliegue

Push a `main` → GitHub Actions compila y publica `dist/` en la rama `deploy` → Hostinger la despliega en `public_html`.
