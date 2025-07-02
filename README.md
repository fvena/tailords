# TailorDS

A modern, customizable SCSS framework for building design systems with utility-first approach and component-based architecture.

## Installation

```bash
npm install tailords
```

# Introducción

TailorDs Styles es un completo generador "Utility-First" completamente configurable y un framework CSS desarrollado en Sass. Esto significa que tienes todo el poder de un flujo de trabajo "Utility-First" sin perder el potencial de Sass.

## ¿Por qué TailorDs es diferente?

Si tu objetivo es desarrollar tu propio sistema de diseño o todo el diseño desde cero, estas son algunas de las ventajas de utilizar TailorDs.

### 1. Escrito íntegramente en Sass

Si estás utilizando Sass para desarrollar tu proyecto, podrás integrarlo con solo una línea de código, y tendrás una gran base para comenzar y varías herramientas que te facilitarán el trabajo.

```scss
// importa tailords al inicio de tu archivo principal scss
@use "tailords" as *;
```

### 2. Facil de configurar

Modificar los colores, tipografías, breakpoints, prefijos, usar !important en las clases generadas, ... TailorDs permite varias opciones de configuración para que puedas iniciar tu proyecto comodamente.

```scss
@use "tailords" as * with (
  $useBase: true,
  $useReset: true,
  $css-variables: true,
  $utility-class: true,
  $excludes: (),
  $includes: (),
  $enable-responsive: true,
  $useImportant: true,
  $enable-hover: true,
  $medias: (
    palm,
    lap,
    small,
    desk,
    large,
  ),
  $font-families: (
    body: (
      "Source Sans Pro",
      Helvetica Neue,
      Arial,
      sans-serif,
    ),
    header: (
      "Source Sans Pro",
      Helvetica Neue,
      Arial,
      sans-serif,
    ),
    mono: (
      "Fira Code",
      "Courier New",
      Courier,
      monospace,
    ),
  )
);
```

### 3. Desarrollado con variables CSS

TailorDs genera automáticamente un listado de variables CSS. Esto te permitirá más flexibilidad a la hora de personalizar los estilos o su modificación en tiempo de ejecución con javascript. Aunque si lo prefieres puedes modificar la configuración para que no se generen y utilicen.

```scss
:root {
  --font-base: "Source Sans Pro", Helvetica Neue, Arial, sans-serif;
  --font-h1: 2.24rem;
  --font-h2: 1.907rem;
  --brand-dark: 187,22,66;
  --brand: 221,34,78;
  ...
}
```

### 4. Funciones de ayuda Sass y mixins para acceder a los valores de tus variables

El patrón "Utility-First" tiene muchas ventajas en muchos casos, pero en otros será mejor crear tus propias clases. TailorDs cuenta con varias clases para agilizarte el acceso a tu configuración y que puedas desarrollar más rápido.

```scss
.custom-element {
  background-color: color(brand); // var(--brand)
  box-shadow: shadow(
    2
  ); // 0 2px 2px rgba(var(--shadow-color), 0.1125), 0 4px 4px rgba(var(--shadow-color), 0.1125), ...;
  font-weight: font(bold); // 600
  margin-bottom: double(); // 2.4rem
  padding: simple(); // 1.6rem
}
```

### 5. Excluye o incluye solo los grupos de propiedades que necesites

Seguramente no necesites tener todas "Utility-Class", yo personalmente solo suelo usar las de los colores, textos y espacio. Podrás eliminar o incluir fácilmente solo las que vayas a utilizar.

```scss
@use "tailords" as * with (
  $includes: (
    colors,
    types,
    sizes,
  )
);
```

### 6. Diseñado para ser ligero

Con todas las clases y opciones habilitadas, TailorDs sigue siendo de los frameworks más ligeros, pero gracias a la posibilidad de elegir que queremos generar, podemos reducir drásticamente su tamaño.

## Pros y Contras de Utility-First

Utility-First (Clases Útiles al principio), es un patrón CSS que optimiza el desarrollo de los estilos de un proyecto mediante la generación de clases de bajo nivel, altamente reutilizables, inmutables y con un solo propósito.

Actualmente está de moda gracias a frameworks como Tailwind, aunque no es algo nuevo, todos hemos escrito y utilizado clases de ayuda en nuestros proyectos como `.clearfix` o `.text-right`.

### 1. PRO - Reutilizar

Dado la simplicidad de estas clases, es fácil intercambiar componentes con otros proyectos, ya que estás clases serán y harán exactamente lo mismo.

### 2. PRO - Productividad

Es mucho más rápido aplicar un estilo básico a un elemento añadiéndole un par de clases, que crearle una clase propia, además nos evita tener que estar navegando entre dos archivos para entender la estructura y estilos de un componente.

### 3. PRO - Adaptación

Muchas veces cuando aplicamos un mismo estilo a varios elementos, necesitamos realizar pequeños cambios donde solo necesitamos modificar una o dos propiedades, como la alineación de un texto o su color. Gracias a estas clases, podemos adaptar un diseño rápidamente sin tener que crear otras clases específicas.

### 4. PRO - Prototipado

Es mucho más rápido y sencillo realizar prototipos con diseños sencillos, aplicando unicamente algunas clases predefinidas, que tener que ir creando clases específicas para cada elemento y moviéndote entre archivos.

### 5. CONTRA - Mantenimiento

Muchos elementos básicos que necesitaremos reutilizar en nuestro proyecto, tendrán muchas clases, como un botón. Tener que copiar y pegar un listado con más de 5 clases por todo el proyecto, es mucho más costoso, aparte, si necesitamos realizar un cambio en el diseño, puede resultar imposible.

### 6. CONTRA - Semántica

Al crear clases específicas para cada elemento, podemos asignarle un nombre semántico que nos ayude a saber de que elemento se trata y la estructura de una página o componente. Sin embargo, un diseño donde solo encontramos div con listados de clases puede resultar indescifrable.

### 7. CONTRA - Responsive y Cross Browser

Solucionar problemas relacionados con la visualización en distintos navegadores o realizar diseños responsive puede resultar mucho más complejo y multiplicar el número de clases en cada elemento. Aumentando la complejidad de las vistas y su mantenimiento.

### 8. CONTRA - Curva de aprendizaje

Usar el patrón Utility-First no evita que tengas que saber CSS, ya que simplemente transcribe las propiedades CSS a clases, por lo que sigues necesitando conocer todas las propiedades, que valores tienen, para que sirven y como combinar varias a la misma vez para realizar ciertos diseños. Y además tienes que aprenderte todos los equivalentes en clases de las propiedades CSS.

## Pros y Contras de los frameworks de componentes

Los frameworks de **componentes** tipo Bootstrap, nos ofrecen multitud de componentes prediseñados para utilizar en nuestras aplicaciones así como soluciones de diseño y sistemas de diseño predefinidos.

### 1. PRO - Productividad

Podemos desarrollar interfaces completas rápidamente gracias a todos los componentes y estilos que tienen prediseñados, además podemos adaptarlos fácilmente al estilo de nuestro proyecto modificando algunas variables.

### 2. PRO - Responsive y Cross Browser

Normalmente aplican buenas prácticas y son desarrollados y probados en los principales navegadores y dispositivos.

### 3. CONTRA - Personalización

Modificar el estilo de un componente más haya de la configuración por defecto puede ser bastante complicado, al igual que modificar su arquitectura para añadir o quitar elementos. También puede suponer un problema si queremos modificar su funcionalidad o estados.

### 4. CONTRA - Complejidad

Normalmente suelen intentar ser lo más flexibles posibles, con muchas opciones de configuración y funcionalidad, lo que puede derivar en una sobreingeniería o en un uso más complejo.

## ¿Por qué TailorDs es diferente?

Por desgracia es imposible juntar en un solo framework todos los pros y eliminar todos los contras de otros frameworks, pero si tu objetivo es desarrollar un "design system" propio o tu propia librería desde cero, si que es posible.

## Instalación como módulo Sass

Puedes personalizar todos los parámetros de TailorDS utilizando el nuevo método para [configurar módulos](https://sass-lang.com/documentation/at-rules/use#configuration) de sass-dart.

Carga el módulo TailorDS en tu archivo principal sass y define los parámetros que quieras configurar dentro de la variable `$config`.

```scss
@use "tailords" as * with (
  $useBase: true,
  $useReset: true,
  $css-variables: true,
  $utility-class: true,
  $excludes: (),
  $includes: (),
  $enable-responsive: true,
  $useImportant: true,
  $enable-hover: true,
  $medias: (
    palm,
    lap,
    small,
    desk,
    large,
  ),
  $font-families: (
    body: (
      "Source Sans Pro",
      Helvetica Neue,
      Arial,
      sans-serif,
    ),
    header: (
      "Source Sans Pro",
      Helvetica Neue,
      Arial,
      sans-serif,
    ),
    mono: (
      "Fira Code",
      "Courier New",
      Courier,
      monospace,
    ),
  )
);
```

## Controlando el tamaño del archivo

Debido a su naturaleza de generar multitud de clases de bajo nivel, los frameworks Utility-first suelen tener un gran tamaño. Sin embargo, TailorDS permite controlar que grupos de clases quieres utilizar y cuales no mediante las propiedades `includes` y `excludes`.

Yo personalmente solo suelo utilizar las clases relacionados con los colores, textos, tamaños y márgenes, utilizando la siguiente configuración:

```scss
/* prettier-ignore */
@use "tailords" as * with (
  $includes: (colors, types, sizes),
);
```

También puedes mejorar el resultado utilizando herramientas de terceros como [PurgeCSS](https://purgecss.com), que elimina todas las clases que no están siendo utilizadas.

## Configuración

Por último, pero no menos importante, debemos asegurarnos que nuestro archivo `_variables.scss` se importe antes que los archivos de TailorDS.

### Utilizando `@vue/cli`

Primero, instalaremos un plugin para importar recursos css:

```shell
npm install --save-dev vue-cli-plugin-style-resources-loader
```

Añade el siguiente código en el campo `pluginOptions` de tu archivo `vue.config.js`:

```js[vue.config.js]
const path = require('path');

module.exports = {

    // ... Otros parámetros de configuración

    transpileDependencies: ["tailords"],
    pluginOptions: {
        'style-resources-loader': {
            'preProcessor': 'scss',
            'patterns': [
                path.resolve(__dirname, 'ruta/a/variables.scss'),
            ]
        }
    }
}
```

### Utilizando `webpack`

Asegúrate de tener `sass-loader` instalado y añade la siguiente configuración en tu archivo `webpack.config.js`:

```js[webpack.config.js]
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules(?!\/tailords)/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            import: [
                                path.resolve(__dirname, 'ruta/a/variables.scss')
                            ]
                        },
                    },
                ],
            }
        ],
    },
}
```

# Api Funciones

Si has instalado TailorDs Styles como módulo sass, tendrás acceso a varias funciones de ayuda para acceder directamente a los valores de las variables de tu proyecto de forma más rápida.

Algunos valores de tus estilos son generados de forma automática al compilar tu proyecto, para poder acceder a ellos o las variables css, he creado algunas funciones que ayudan a obtener estos datos.

```scss
.element {
  margin-bottom: size(2); // 3.2rem
  padding: simple() double(); // 1.6rem 3.2rem
  background: color(brand, 30); // rgba(221,34,78,0.2)
  font-size: font(h2); // 1.907rem
  font-weight: font(semibold); // 500
  color: color(white); // rgba(255,255,255,1)
}
```

## Colores

Hay dos funciones disponibles para obtener los colores: `color()` devuelve el color indicado de nuestra configuración, y `gradient()` devuelve un degrado predefinido o con los valores indicados.

### color(color, opacity)

La función `color()` devuelve el color indicado en formato rgba, admite dos parámetros el nombre del color que debe corresponderse con alguno de colores configurados y la opacidad. Este segundo parámetro es optativo, sino se indica se considera una opacidad el 100%.

Si tenemos configuradas las variables CSS (opción por defecto), el color generado incluirá el nombre de la variable que representa.

```scss
// css-variables: true,
.element {
  background: color(brand, 30); // rgba(var(--brand),0.2)
  color: color(white); // rgba(var(--white),1)
}

//css-variables: false,
.element {
  background: color(brand, 30); // rgba(221,34,78,0.2)
  color: color(white); // rgba(255,255,255,1)
}
```

### gradient(name,type) | gradient(color1,color2,type)

La función `gradient()` devuelve un degrado entre dos colores. Esta función admite el nombre de un degradado definido en la configuración o el nombre de los dos colores que conformarán el degradado (pueden ser uno de los colores predefinidos o colores en hexadecimal). Por otro lado acepta de forma optativa el nombre del tipo de degradado (linear, radial o conic).

Si tenemos configuradas las variables CSS (opción por defecto), el color generado incluirá el nombre de la variable que representa.

```scss
// css-variables: true,
.element1 {
  background: gradient(brand);
  // linear-gradient(to down, var(--brand-light) 0%, var(--brand-dark) 100%)
}

.element2 {
  background: gradient(danger, warning, radial);
  // radial-gradient(ellipse at left top, var(--danger) 0%, var(--warning) 100%)
}

.element3 {
  background: gradient(#ffd780, #e69d00);
  // linear-gradient(to down, #ffd780 0%, #e69d00 100%);
}
```

> Podemos modificar el tipo de degradado por defecto mediante la propiedad `gradient-default` en la configuración de TailorDs.

## Sombras

### shadow(deep, color, soft, long)

- deep (integer)

La función shadow devuelve una sombra mediante la técnica de capas con un efecto más realista.

La profundidad es un valor numérico, a mayor valor la altura de la sombra será mayor, aunque no recomiendo usar valores mayores de 6 porque el número de capas sería excesivo.

Los parámetros color, soft y long, se definen por defecto en la configuración de TailorDs Styles y no son necesarios incluirlos al llamar la función.

```scss
// css-variables: true,
.element1 {
  box-shadow: shadow(3);
  // 0 2px 2px rgba(var(--shadow-color), 0.1125),
  // 0 4px 4px rgba(var(--shadow-color), 0.1125),
  // 0 6px 6px rgba(var(--shadow-color), 0.1125);
}

.element2 {
  box-shadow: shadow(3, brand);
}
```

# Api Mixins

Si has instalado TailorDs Styles como módulo sass, tendrás acceso a varios mixins de ayuda añadir bloques de código reutilizables fácilmente:

```scss
.element {
  color: color(brand);

  @include media(lap) {
    color: color(danger);
  }

  @include media(palm) {
    color: color(warning);
  }
}

// Compilación
.element {
  color: rgba(var(--brand), 1);
}
@media screen and (min-width: 37.5em) and (max-width: 56.1875em) {
  .element {
    color: rgba(var(--danger), 1);
  }
}
@media screen and (max-width: 37.4375em) {
  .element {
    color: rgba(var(--warning), 1);
  }
}
```

## Colores

### theme()

Permite definir fácilmente los estilos que se aplicaran a cada tema: light, dark.

```scss
.element {
  color: color(brand);

  @include media(dark) {
    color: color(white);
  }
}
```

## Hover

### hover()

En algunas ocasiones añadir propiedades dentro del pseudo selector `:hover` puede provocar efectos extraños al usar un dispositivo táctil, con este mixin te aseguras que estas propiedades solo se apliquen si el dispositivo no es táctil.

```scss
.link {
  color: color(brand);

  @include hover(dark) {
    text-decoration: underline;
  }
}
```

## Responsive

### media()

Genera un media query con los datos del tamaño de pantalla indicada:

- palm, lap, small, desk, large, portrait, landscape, touch, screen, tablet

```scss
.element {
  color: color(brand);

  @include media(lap) {
    color: color(danger);
  }

  @include media(palm) {
    color: color(warning);
  }
}
```
