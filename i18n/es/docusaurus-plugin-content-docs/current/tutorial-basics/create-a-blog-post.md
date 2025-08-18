---
sidebar_position: 3
---

# Crear una Entrada de Blog

Los blogs son una excelente manera de compartir tus pensamientos y actualizaciones con tu comunidad.

## Crear tu primera entrada de blog

Crea un archivo Markdown en la carpeta `blog/`:

```bash
# Crear una nueva entrada de blog
echo '---
slug: hello-world
title: ¡Hola Mundo!
authors: [slorber]
tags: [hola, docusaurus]
---

# ¡Hola Mundo!

¡Bienvenido a mi blog! Esta es mi primera entrada.

## ¿Qué puedo hacer?

- **Markdown** que se ve *genial*
- Mostrar código con `highlighting`
- Generar **páginas de API**
- Y [mucho más](../intro)

## ¿Qué sigue?

Lee el [tutorial](../intro) y construye algo genial.' > blog/2021-02-28-hello-world.md
```