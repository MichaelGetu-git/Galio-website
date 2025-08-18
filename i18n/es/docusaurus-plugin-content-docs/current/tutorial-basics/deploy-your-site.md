---
sidebar_position: 7
---

# Desplegar tu Sitio

Una vez que hayas construido tu sitio Docusaurus, es hora de desplegarlo para que el mundo pueda verlo.

## Construir tu sitio

Primero, construye tu sitio para producción:

```bash
npm run build
```

Esto creará una carpeta `build/` con tu sitio optimizado para producción.

## Opciones de despliegue

### 1. GitHub Pages

GitHub Pages es una opción gratuita y fácil para desplegar sitios estáticos.

#### Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** > **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. Selecciona la rama `gh-pages` y la carpeta `/ (root)`
5. Haz clic en **Save**

#### Configurar Docusaurus para GitHub Pages

Actualiza tu `docusaurus.config.ts`:

```ts
const config: Config = {
  url: 'https://tu-usuario.github.io',
  baseUrl: '/nombre-del-repositorio/',
  // ... resto de la configuración
};
```

#### Desplegar automáticamente

Crea un archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

### 2. Netlify

Netlify ofrece despliegue automático y hosting gratuito.

#### Desplegar en Netlify

1. Ve a [netlify.com](https://netlify.com)
2. Haz clic en **New site from Git**
3. Conecta tu repositorio de GitHub
4. Configura el comando de construcción: `npm run build`
5. Configura la carpeta de publicación: `build`
6. Haz clic en **Deploy site**

#### Configurar Docusaurus para Netlify

Actualiza tu `docusaurus.config.ts`:

```ts
const config: Config = {
  url: 'https://tu-sitio.netlify.app',
  baseUrl: '/',
  // ... resto de la configuración
};
```

### 3. Vercel

Vercel es excelente para sitios React y Next.js.

#### Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **New Project**
3. Importa tu repositorio de GitHub
4. Configura el comando de construcción: `npm run build`
5. Configura la carpeta de salida: `build`
6. Haz clic en **Deploy**

## Configuración de dominio personalizado

### Configurar un dominio personalizado

1. Compra un dominio (ej: `midominio.com`)
2. Configura los registros DNS:
   - Para GitHub Pages: apunta a `tu-usuario.github.io`
   - Para Netlify: apunta a `tu-sitio.netlify.app`
   - Para Vercel: apunta a `tu-sitio.vercel.app`

3. Actualiza tu `docusaurus.config.ts`:

```ts
const config: Config = {
  url: 'https://midominio.com',
  baseUrl: '/',
  // ... resto de la configuración
};
```

## Variables de entorno

Puedes usar variables de entorno para diferentes configuraciones:

```ts
const config: Config = {
  url: process.env.SITE_URL || 'https://default-domain.com',
  baseUrl: process.env.BASE_URL || '/',
  // ... resto de la configuración
};
```

## Optimización de rendimiento

### Compresión Gzip

Habilita la compresión Gzip en tu servidor web para reducir el tamaño de los archivos.

### CDN

Usa una CDN (Content Delivery Network) para servir tu sitio desde ubicaciones más cercanas a tus usuarios.

### Caché

Configura encabezados de caché apropiados para archivos estáticos:

```
Cache-Control: public, max-age=31536000, immutable
```

## Monitoreo y análisis

### Google Analytics

Agrega Google Analytics a tu sitio:

```ts
const config: Config = {
  // ... resto de la configuración
  plugins: [
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'GA-TRACKING-ID',
      },
    ],
  ],
};
```

### Google Search Console

Verifica tu sitio en Google Search Console para mejorar el SEO.

## Solución de problemas comunes

### Error 404 en rutas

Si tienes problemas con rutas en producción, asegúrate de que tu servidor esté configurado para manejar el enrutamiento del lado del cliente.

### Problemas de construcción

- Verifica que todas las dependencias estén instaladas
- Asegúrate de que no haya errores de TypeScript
- Revisa los logs de construcción para errores específicos

### Problemas de despliegue

- Verifica que la rama de despliegue sea correcta
- Asegúrate de que los permisos de GitHub Actions estén configurados
- Revisa los logs de despliegue para errores específicos
