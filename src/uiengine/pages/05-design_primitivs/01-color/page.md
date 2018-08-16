---
title: 🔶 Color
tokens: !include /src/uiengine/tokens/colors.js
---

> *"Design is thinking made visual"*

[Saul Bass](https://en.wikipedia.org/wiki/Saul_Bass)

- [Swatches](#swatches)
- [Usage](#usage)
- [Color Roles](#color-roles)


En [Realized](http://realized.es/) hemos estado pensando seriamente sobre el color. Nuestra intención con **"Thonet"** es ofrecer una filosofía, una organización y una paleta de colores que permita crear patrones de diseño claros, significativos y emocionales alrededor del color.

**"Thonet"** ofrece una paleta de colores armónica con nuestra marca que se divide en dos grandes agrupaciones:

1. [UI](#color-ui)
2. [Brand](#color-brand)

<a id="usage"></a>

# Usage
---

<a id="color-ui"></a>

## UI

La estructura de UI se subdivide en las agrupaciones:

- **Support:** Nuestra paleta para comunicar o notificar a usuarios alertas, errores, etc...
- **Neutral:** Blanco, negro y nuestra escala de grises que pueden ser utilizados para casi cualquier componente. Nosotros preferimos limitar su uso a estos elementos:
  - Background colors
  - Text colors
  - Border colors
  - SVG fill colors
- **Link:** La paleta de colores escogida para representar un enlace y sus estados:
  - Default
  - :hover
  - Active
  - Visited
- **Social:** Lista de colores corporativos de las principales redes sociales hoy en día en el mercado.

<a id="color-brand"></a>

## Brand

Nuestra paleta de marca Realized. En ella ofrecemos hasta cuatro niveles de color:

- Primary
- Secondary
- Tiertary
- Quaternary

A su vez cada uno de estos niveles están modificados con valores

- Darken
- Lighten

## Sketch Palette

La paleta de color completa puede ser importada a cualquier fichero de Sketch cargando el archivo adjunto [.sketchpalette](#) a través del plugin [Sketch Palettes](https://github.com/andrewfiorillo/sketch-palettes).*

```
*En Runner: cmd + ' → install → Sketch Palettes
```


## Color terms

| Term        | Definition   |
| ------------- |-------------|
| value | A unique color (hex code) assigned to a universal variable |
| Rgba | A unique color (rgba code) assigned to a universal variable |
| Hsla | A unique color (hsla code) assigned to a universal variable |
| Role | The systematic usage/s of a color value |
| Token | The code identifier for a unique role or set of roles. Variables are universal and never change across themes. Within a theme variables are assigned appropriate values. |
| Theme | The set of unique color values assigned to the universal palette |
| Palette | The complete set of universal variables. The palette is the naming conventions of colors used in the UI. Each theme will use the same palette of variables. |

<a id="color-roles"></a>

# Color roles

| Token        | Class   | Role(s)  | Value   | RGBA  | HSLA  |
| ------------- |-------------| -------------| -------------| -------------| -------------|
| $primary | .primary | Primary brand / Interactive text / Primary icon color / Primary border color | #DA291B | 218,41,27,1 | 4.397905759162303, 77.95918367346938, 48, 1 |



<a id="swatches"></a>

# Swatches
