---
sidebar_position: 2
---

# Crear un Documento

Los documentos son archivos **Markdown** que se muestran en la barra lateral de la documentación. Puedes crear tantos documentos como quieras.

## Crear tu primer documento

Crea un archivo Markdown en la carpeta `docs/`:

```bash
# Crear un nuevo archivo Markdown
echo '# Mi Primer Documento

¡Bienvenido! Este es mi primer documento de Docusaurus.

## ¿Qué puedo hacer?

- **Markdown** que se ve *genial*
- Mostrar código con `highlighting`
- Generar **páginas de API**
- Y [mucho más](/docs/intro)

## ¿Qué sigue?

Lee el [tutorial](/docs/intro) y construye algo genial.' > docs/my-doc.md
```

## Agregar el documento a la barra lateral

El documento aparecerá automáticamente en la barra lateral después de que lo crees.

## Documentos anidados

Puedes crear documentos anidados organizándolos en carpetas:

```
docs/
  intro.md
  tutorial-basics/
    create-a-document.md
    create-a-blog-post.md
  tutorial-extras/
    manage-docs-versions.md
    translate-your-site.md
```

## Configurar el orden de la barra lateral

Puedes controlar el orden de los documentos en la barra lateral usando el frontmatter `sidebar_position`:

```markdown
---
sidebar_position: 1
---

# Mi Documento

Este documento aparecerá primero en la barra lateral.
```
