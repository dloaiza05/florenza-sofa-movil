# Florenza · prueba móvil de sofá

Demostración técnica independiente del editor Meta Quest. Abrir `index.html` desde HTTPS.

- Archivos GLB autocontenidos exportados desde una copia temporal del sofá de Blender; se conserva el original sin guardar cambios.
- Tres acabados básicos: gris, arena y petróleo. Cada color usa su propio archivo para que el visor nativo reciba el acabado elegido.
- Dimensiones del archivo: 1,8999 × 1,0413 × 0,8919 m. Pendientes de comprobación física.
- Modelo ligero: 30 objetos, 59.162 vértices de Blender; aproximadamente 3,6 MB por GLB. No incluye habitación, cámaras, luces, texturas avanzadas ni puntadas de curvas.
- Android: WebXR / Scene Viewer según compatibilidad. Apple: Quick Look mediante generación USDZ de model-viewer. Requiere prueba física; no todos los dispositivos admiten AR.
- La demostración no incluye edición, cuentas, pedidos ni cobros. Los archivos públicos de visualización son descargables por el navegador. Los archivos fuente de Blender no están publicados.
- Dependencia model-viewer servida localmente, licencia incluida en vendor. Sin túnel ni dependencia del computador local una vez publicado.

La tienda completa requiere alojamiento Node.js, PostgreSQL y almacenamiento persistente. Esta demostración de GitHub Pages no los reemplaza.
