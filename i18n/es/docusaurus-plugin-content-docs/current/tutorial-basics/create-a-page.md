---
sidebar_position: 4
---

# Crear una Página

Las páginas son componentes React que se renderizan en rutas específicas de tu sitio.

## Crear tu primera página

Crea un archivo en la carpeta `src/pages/`:

```jsx
// src/pages/my-page.js
import React from 'react';
import Layout from '@theme/Layout';

export default function MyPage() {
  return (
    <Layout title="Mi Página">
      <main>
        <h1>¡Bienvenido a mi página!</h1>
        <p>Esta es una página personalizada creada con React.</p>
      </main>
    </Layout>
  );
}
```

## Agregar la página a la navegación

La página estará disponible automáticamente en la ruta `/my-page` después de que la crees.

## Páginas con contenido Markdown

También puedes crear páginas que usen Markdown:

```jsx
// src/pages/markdown-page.js
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';

export default function MarkdownPage() {
  const {siteConfig} = useDocusaurusContext();
  const {myPluginData} = usePluginData('my-plugin');
  
  return (
    <Layout title="Página Markdown">
      <main>
        <h1>Mi Página Markdown</h1>
        <p>Esta página puede usar datos de plugins y contexto de Docusaurus.</p>
      </main>
    </Layout>
  );
}
```

## Páginas con enrutamiento personalizado

Puedes crear páginas con enrutamiento personalizado:

```jsx
// src/pages/users/[id].js
import React from 'react';
import Layout from '@theme/Layout';
import {useParams} from '@docusaurus/router';

export default function UserPage() {
  const {id} = useParams();
  
  return (
    <Layout title={`Usuario ${id}`}>
      <main>
        <h1>Perfil del Usuario {id}</h1>
        <p>Esta es la página del usuario con ID: {id}</p>
      </main>
    </Layout>
  );
}
```

## Páginas con estilos personalizados

Puedes agregar estilos CSS personalizados a tus páginas:

```jsx
// src/pages/styled-page.js
import React from 'react';
import Layout from '@theme/Layout';
import './styled-page.css';

export default function StyledPage() {
  return (
    <Layout title="Página Estilizada">
      <main className="styled-page">
        <h1>Mi Página Estilizada</h1>
        <p>Esta página tiene estilos CSS personalizados.</p>
      </main>
    </Layout>
  );
}
```

```css
/* src/pages/styled-page.css */
.styled-page {
  padding: 2rem;
  background-color: #f5f5f5;
}

.styled-page h1 {
  color: #25c2a0;
  text-align: center;
}
```
