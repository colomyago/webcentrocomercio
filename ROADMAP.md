# Roadmap

Pendientes del sitio, ordenados por qué los desbloquea.

## Esperando datos del cliente

- [ ] **Número de WhatsApp**: completar `whatsapp` en `src/data/contacto.js` (código de país + número, sin `+`, ej. `5493487123456`). Al cargarlo aparecen solos la fila en Redes, el botón flotante y los datos estructurados.
- [ ] **Email de contacto**: completar `email` en `src/data/contacto.js`. Aparece la fila en Redes y en los datos estructurados.
- [ ] **Logo de Espacio Mujeres**: lo provee otra persona. Copiarlo a `public/espacios/` y completar `logo` en `src/data/espacios.js` (hoy muestra las iniciales "EM").
- [ ] **Dirección y teléfono del Centro**: no se publican hasta tener los datos reales.
- [ ] **Logo de la CJEZ en mejor resolución** (opcional): el actual es de baja calidad.

## Listo para activar (ya está hecho, desactivado)

- [ ] Sección **Servicios** (`src/components/Servicios.astro`) y su link en el nav.
- [ ] **Formulario** de contacto y botón "Contactanos" del hero (requieren email o WhatsApp).

## Ideas a futuro

- [ ] Página propia para cada espacio (rutas dinámicas de Astro) y completar `enlace` en `espacios.js`.
- [ ] Descripción corta de cada espacio.
- [ ] Revisar la vista previa al compartir (WhatsApp, LinkedIn) después de publicar: puede quedar en caché con la imagen vieja.
