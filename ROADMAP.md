# Roadmap

Pendientes del sitio, ordenados por qué los desbloquea.

## Esperando datos del cliente

- [ ] **Número de WhatsApp**: completar `whatsapp` en `src/data/contacto.js` (código de país + número, sin `+`, ej. `5493487123456`). Al cargarlo aparecen solos la fila en Redes, el botón flotante y los datos estructurados.
- [ ] **Email de contacto**: completar `email` en `src/data/contacto.js`. Aparece la fila en Redes y en los datos estructurados.
- [ ] **Logo de Espacio Mujeres**: lo provee otra persona. Copiarlo a `public/espacios/` y completar `logo` en `src/data/espacios.js` (hoy muestra las iniciales "EM").
- [ ] **Dirección, horario y teléfono del Centro**: completar `direccion`, `horario` y `telefono` en `src/data/contacto.js`; aparecen solos en el footer.
- [ ] **Año de fundación**: confirmar (se deduce 1914 por el centenario de 2014) y activar el sello del hero en `Hero.astro`.
- [ ] **Beneficios de ser socio y cómo asociarse**: completar `Asociate.astro`, importarlo en `index.astro` y activar el botón del nav y "Quiero asociarme" del hero.
- [ ] **Descripción de cada espacio**: completar `descripcion` en `src/data/espacios.js`.
- [ ] **Logo de la CJEZ en mejor resolución** (opcional): el actual es de baja calidad.

## Listo para activar (ya está hecho, desactivado)

- [ ] Sección **Servicios** (`src/components/Servicios.astro`) y su link en el nav.
- [ ] **Formulario** de contacto y botón "Contactanos" del hero (requieren email o WhatsApp).

## Ideas a futuro

- [ ] Página propia para cada espacio (rutas dinámicas de Astro) y completar `enlace` en `espacios.js`.
- [ ] Revisar la vista previa al compartir (WhatsApp, LinkedIn) después de publicar: puede quedar en caché con la imagen vieja.
