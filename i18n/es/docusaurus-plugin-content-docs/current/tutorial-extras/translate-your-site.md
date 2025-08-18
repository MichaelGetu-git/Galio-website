---
sidebar_position: 2
---

# Traducir tu Sitio

Docusaurus proporciona soporte completo para internacionalización (i18n).

## Configurar idiomas

En `docusaurus.config.ts`:

```ts
const config: Config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr'],
    localeConfigs: {
      en: { htmlLang: 'en' },
      es: { htmlLang: 'es' },
      fr: { htmlLang: 'fr' },
    },
  },
};
```

## Crear traducciones

```bash
npm run docusaurus write-translations -- --locale es
```

Esto creará archivos de traducción en `i18n/es/`.

## Estructura de archivos

```
i18n/
  es/
    code.json
    docusaurus-theme-classic/
      navbar.json
      footer.json
    docusaurus-plugin-content-docs/
      current/
        intro.md
        tutorial-basics/
        tutorial-extras/
    docusaurus-plugin-content-blog/
      current/
```

## Traducir archivos de código

En `i18n/es/code.json`:

```json
{
  "theme.NotFound.title": {
    "message": "Página no encontrada",
    "description": "El título de la página 404"
  }
}
```

## Configurar el selector de idioma

```ts
themeConfig: {
  navbar: {
    items: [
      {
        type: 'localeDropdown',
        position: 'right',
      },
    ],
  },
}
```

## Construir para diferentes idiomas

```bash
npm run build -- --locale es
```
