# TailorDS Ecosystem

> **Crea tu propio Design System, sin compromisos ni limitaciones**

TailorDS es un ecosistema completo de herramientas y paquetes integrados para construir Design Systems únicos, escalables y totalmente personalizados.

## Paquetes del Ecosistema

- **[@tailords/tokens](packages/tokens)**: Gestión y generación de design tokens (SCSS), variables CSS, utilidades y funciones type-safe.
- **[@tailords/studio](packages/studio)**: Herramientas para crear y optimizar sistemas (paletas de color, tipografías, espaciados, conversión de tokens, etc).
- **[@tailords/theme](packages/theme)**: Base HTML/CSS, normalización cross-browser, patrones responsivos y buenas prácticas de accesibilidad.
- **[@tailords/ui](packages/ui)**: Librería de componentes Vue totalmente personalizables y token-driven.
- **[@tailords/vitepress](packages/vitepress)**: Tema de documentación, explorador de tokens, sandbox interactivo y showcase responsivo.

Todos los paquetes pueden usarse juntos o de forma independiente, y comparten una arquitectura monorepo que facilita el desarrollo, testing y releases coordinados.

## Comandos principales

```bash
# Instalar dependencias
pnpm install

# Desarrollar todos los paquetes en paralelo
pnpm dev

# Trabajar en un paquete específico
pnpm --filter @tailords/tokens dev

# Ejecutar tests, build, lint, etc.
pnpm test
pnpm build
pnpm lint
pnpm typecheck
```

## Documentación y Recursos

- [Documentación oficial](https://tailords.dev)
- [Guía de inicio](docs/getting-started.md)
- [Guía de instalación](docs/installation.md)
- [Documentación de cada paquete](packages/)

## Contribuir

¡Las contribuciones son bienvenidas! Pronto estará disponible una guía de contribución.

## Licencia

MIT © [Francisco Vena](https://www.fvena.com)
