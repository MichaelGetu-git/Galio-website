---
sidebar_position: 1
---

# Gestionar Versiones de Documentación

Docusaurus puede gestionar múltiples versiones de tu documentación.

## Crear una nueva versión

```bash
npm run docusaurus docs:version 2.0
```

Esto creará:
- Una nueva carpeta `versioned_docs/version-2.0/`
- Una nueva carpeta `versioned_sidebars/version-2.0-sidebars.json`
- Actualizará `versions.json`

## Configurar la versión

En `docusaurus.config.ts`:

```ts
const config: Config = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          versions: {
            current: {
              label: '2.0',
              path: '2.0',
            },
            '1.0': {
              label: '1.0',
              path: '1.0',
            },
          },
        },
      },
    ],
  ],
};
```

## Configurar banners de versión

```ts
versions: {
  current: {
    label: '2.0',
    path: '2.0',
  },
  '1.0': {
    label: '1.0',
    path: '1.0',
    banner: 'unmaintained', // 'unreleased', 'unmaintained', 'none'
  },
}
```

## Navegación entre versiones

```ts
themeConfig: {
  navbar: {
    items: [
      {
        type: 'docsVersionDropdown',
        position: 'right',
        dropdownActiveClassDisabled: true,
      },
    ],
  },
}
```
