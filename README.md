# Datum Garita

> Sistema de gestión de censos e información poblacional enfocado en la población de La Garita.

**Solución basada en la plantilla `vuestic-admin-template`**

## Setup de la web para desarrollo


```bash
# clona el proyecto
git clone https://github.com/Avrgebro/special-fiesta.git datum-garita

# entra al directorio del proyecto
cd datum-garita

# instala las dependecias
npm install

# levanta el sistema web
npm run dev
```

Esto mostrará la web automáticamente en http://localhost:8080

## Setup para producción

```bash
# Generar archivos para ambiente de test
npm run build:stage

# Generar archivos para ambiente de producción
npm run build:prod
```

## Adicionales

```bash
# Verificar formato del código
npm run lint

# Verificar y corregir el formato del código
npm run lint -- --fix
```

## Plantilla utilizada

[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)

## Navegadores soportados

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## License

Créditos a los realizadores de la plantilla [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)