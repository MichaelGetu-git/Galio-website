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
- Y [mucho más](/docs/intro)

## ¿Qué sigue?

Lee el [tutorial](/docs/intro) y construye algo genial.' > blog/2021-02-28-hello-world.md
```

## Frontmatter del blog

Cada entrada de blog puede tener un frontmatter YAML en la parte superior:

```yaml
---
slug: my-blog-post
title: Título de mi entrada de blog
authors: [tu-nombre]
tags: [tag1, tag2]
draft: false
---

# Contenido de la entrada...
```

## Campos del frontmatter

- **`slug`**: La URL de la entrada (opcional, se genera automáticamente desde el nombre del archivo)
- **`title`**: El título de la entrada
- **`authors`**: Lista de autores (debe coincidir con los nombres en `blog/authors.yml`)
- **`tags`**: Lista de etiquetas para categorizar la entrada
- **`draft`**: Si es `true`, la entrada no se publicará

## Estructura de archivos del blog

```
blog/
  authors.yml
  tags.yml
  2021-02-28-hello-world.md
  2021-02-28-long-blog-post.md
  2021-08-01-mdx-blog-post.mdx
```

## Entradas de blog con MDX

Puedes usar **MDX** para crear entradas de blog más interactivas:

```jsx
---
slug: mdx-blog-post
title: Entrada de Blog con MDX
authors: [slorber]
tags: [mdx, blog]
---

# Mi Entrada de Blog con MDX

Esta entrada usa **MDX** para incluir componentes React.

<MyComponent />

export const MyComponent = () => (
  <div style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
    <h3>¡Este es un componente React!</h3>
    <p>Puedes usar cualquier componente React en tus entradas de blog.</p>
  </div>
);
```

## Configurar autores

Crea un archivo `blog/authors.yml` para definir los autores:

```yaml
slorber:
  name: Sébastien Lorber
  title: Docusaurus maintainer
  url: https://sebastienlorber.com
  image_url: https://github.com/slorber.png
```

## Configurar etiquetas

Crea un archivo `blog/tags.yml` para definir las etiquetas:

```yaml
hola:
  name: Hola
  description: Entradas de bienvenida
  permalink: /blog/tags/hola

docusaurus:
  name: Docusaurus
  description: Entradas sobre Docusaurus
  permalink: /blog/tags/docusaurus
```

## Programar entradas de blog

Puedes programar entradas de blog para el futuro usando fechas en el nombre del archivo:

```bash
# Esta entrada se publicará el 1 de enero de 2025
blog/2025-01-01-future-post.md
```

## Entradas de blog con imágenes

Puedes incluir imágenes en tus entradas de blog:

```markdown
![Mi Imagen](/img/blog/my-image.jpg)

<figure>
  <img src="/img/blog/my-image.jpg" alt="Descripción de la imagen" />
  <figcaption>Pie de foto de la imagen</figcaption>
</figure>
```
