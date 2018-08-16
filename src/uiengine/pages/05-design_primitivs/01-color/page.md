---
title: 🔶 Color
tokens: !include /src/uiengine/tokens/colors.js
---

> *"Design is thinking made visual"*

[Saul Bass](https://en.wikipedia.org/wiki/Saul_Bass)

- [Usage](#usage)
- [Color Roles](#color-roles)
- [Swatches & tokens](#swatches)


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
---

## Brand

| Token        | Class   | Role(s)  | Value   | RGBA  | HSLA  | 🔶 Color |
| ------------- |-------------| -------------| -------------| -------------| -------------| -------------|
| $primary | .primary | Primary brand / Interactive text / Primary icon color / Primary border color | #DA291B | 218, 41, 27, 1 | 4.397905759162303, 77.95918367346938, 48, 1 | <div style="width: 50px; height: 25px; background-color: #DA291B; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $primary-darken | .primary-darken | Primary brand / Interactive text / Primary icon color / Primary border color | #B8271E | 184, 39, 30, 1 | 3.771428571428558, 72.29095853161115, 42, 1 | <div style="width: 50px; height: 25px; background-color: #B8271E; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $primary-lighten | .primary-lighten | Primary brand / Interactive text / Primary icon color / Primary border color | #F9423A | 249, 66, 58, 1 | 2.5130890052355976, 94.08866995073893, 60, 1 | <div style="width: 50px; height: 25px; background-color: #F9423A; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $secondary | .secondary | Supporting brand | #747D8C | 116, 125, 140, 1 | 217.50000000000006, 9.4488188976378, 50, 1 | <div style="width: 50px; height: 25px; background-color: #747D8C; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $secondary-darken | .secondary-darken | Supporting brand | #2F3542 | 47, 53,66,1 | 221.05263157894734, 16.814159292035388, 22, 1 | <div style="width: 50px; height: 25px; background-color: #2F3542; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $secondary-lighten | .secondary-lighten | Supporting brand | #A4B0BE | 164, 176, 190, 1 | 212.30769230769232, 16.666666666666664, 69, 1 | <div style="width: 50px; height: 25px; background-color: #A4B0BE; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $tertiary | .tertiary | Supporting brand | #F39C11 | 243, 156, 17, 1 | 36.90265486725664, 90.39999999999999, 51, 1 | <div style="width: 50px; height: 25px; background-color: #F39C11; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $tertiary-darken | .tertiary-darken | Supporting brand | #E67E22 | 230, 126, 34, 1 | 28.163265306122454, 79.67479674796746, 52, 1 | <div style="width: 50px; height: 25px; background-color: #E67E22; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $tertiary-lighten | .tertiary-lighten | Supporting brand | #F1C30F | 241, 195, 15, 1 | 47.78761061946903, 88.9763779527559, 50, 1 | <div style="width: 50px; height: 25px; background-color: #F1C30F; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $quaternary | .quaternary | Supporting brand | #53565A | 83, 86, 90, 1 | 214.28571428571445, 4.046242774566484, 34, 1 | <div style="width: 50px; height: 25px; background-color: #53565A; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $quaternary-darken | .quaternary-darken | Supporting brand | #3D3F42 | 61, 63, 66, 1 | 214.28571428571414, 3.9625892197883394, 25, 1 | <div style="width: 50px; height: 25px; background-color: #3D3F42; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $quaternary-lighten | .quaternary-lighten | Supporting brand | #D0D0CE | 208, 208, 206, 1 | 60, 2.083333333333326, 81, 1 | <div style="width: 50px; height: 25px; background-color: #D0D0CE; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |


## UI / Support

| Token        | Class   | Role(s)  | Value   | RGBA  | HSLA  | 🔶 Color |
| ------------- |-------------| -------------| -------------| -------------| -------------| -------------|
| $info | .info | Informative text messages / Modal informative messages background / Modal informative messages border | #17A2B9 | 23, 162, 185, 1 | 188.51851851851853, 77.88461538461539, 41, 1 | <div style="width: 50px; height: 25px; background-color: #17A2B9; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $info-lighten-30 | .info-lighten-30 | Informative text messages / Modal informative messages background / Modal informative messages border | lighten($info, 30%) | 93, 190, 206, 1 | 188.49557522123894, 53.55450236966824, 59, 1 | <div style="width: 50px; height: 25px; background-color: #5DBECE; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $info-lighten-60 | .info-lighten-60 | Informative text messages / Modal informative messages background / Modal informative messages border | lighten($info, 60%) | 162, 217, 227, 1 | 189.23076923076923, 53.7190082644628, 76, 1 | <div style="width: 50px; height: 25px; background-color: #A2D9E3; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $success | .success | Success text messages / Modal success messages background / Modal success messages border | #39CB4F | 57, 203, 79, 1 | 129.04109589041096, 58.399999999999984, 51, 1 | <div style="width: 50px; height: 25px; background-color: #39CB4F; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $success-lighten-30 | .success-lighten-30 | Success text messages / Modal success messages background / Modal success messages border | lighten($success, 30%) | 116, 218, 132, 1 | 129.41176470588238, 57.954545454545446, 65, 1 | <div style="width: 50px; height: 25px; background-color: #74DA84; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $success-lighten-60 | .success-lighten-60 | Success text messages / Modal success messages background / Modal success messages border | lighten($success, 60%) | 175, 234, 184, 1 | 129.15254237288138, 58.41584158415838, 80, 1 | <div style="width: 50px; height: 25px; background-color: #AFEAB8; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $warning | .warning | Warning text messages / Modal warning messages background / Modal warning messages border | #E6B516 | 230, 181, 22, 1 | 45.8653846153846, 82.53968253968253, 49, 1 | <div style="width: 50px; height: 25px; background-color: #E6B516; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $warning-lighten-30 | .warning-lighten-30 | Warning text messages / Modal warning messages background / Modal warning messages border | lighten($warning, 30%) | 237, 203, 92, 1 | 45.93103448275862, 80.11049723756906, 65, 1 | <div style="width: 50px; height: 25px; background-color: #EDCB5C; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $warning-lighten-60 | .warning-lighten-60 | Warning text messages / Modal warning messages background / Modal warning messages border | lighten($warning, 60%) | 245, 225, 161, 1 | 45.71428571428571, 80.76923076923082, 80, 1 | <div style="width: 50px; height: 25px; background-color: #F5E1A1; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $error | .error | Error text messages / Modal error messages background / Modal error messages border | #F54B5E | 245, 75, 94, 1 | 353.29411764705884, 89.47368421052634, 63, 1 | <div style="width: 50px; height: 25px; background-color: #F54B5E; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $error-lighten-30 | .error-lighten-30 | Error text messages / Modal error messages background / Modal error messages border | lighten($error, 30%) | 248, 129, 142, 1 | 353.4453781512605, 89.47368421052633, 74, 1 | <div style="width: 50px; height: 25px; background-color: #F8818E; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $error-lighten-60 | .error-lighten-60 | Error text messages / Modal error messages background / Modal error messages border | lighten($error, 60%) | 251, 183, 190, 1 | 353.8235294117647, 89.47368421052632, 85, 1 | <div style="width: 50px; height: 25px; background-color: #FBB7BE; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |

## UI / Neutral

| Token        | Class   | Role(s)  | Value   | RGBA  | HSLA  | 🔶 Color |
| ------------- |-------------| -------------| -------------| -------------| -------------| -------------|
| $black | .black | Basic black | #000000 | 0, 0, 0, 1 | 0, 0, 0, 1 | <div style="width: 50px; height: 25px; background-color: #000000; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $black-lighten-30 | .black-lighten-30 | Basic black | lighten($black, 30%) | 76, 76, 76, 1 | 0, 0, 0.2980392156862745, 1 | <div style="width: 50px; height: 25px; background-color: #4C4C4C; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $black-lighten-60 | .black-lighten-60 | Basic black | lighten($black, 60%) | 153, 153, 153, 1 | 0, 0, 0.6, 1 | <div style="width: 50px; height: 25px; background-color: #999999; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $white | .white | Basic white | #ffffff | 255, 255, 255, 1 | 0, 0, 1, 1 | <div style="width: 50px; height: 25px; background-color: #ffffff; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $darker-gray | .darker-gray | Basic gray / Generic backgrounds / Borders / Dividers | #222222 | 34, 34, 34, 1 | 0, 0, 0.1333333333333333, 1 | <div style="width: 50px; height: 25px; background-color: #222222; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $dark-gray | .dark-gray | Basic gray / Generic backgrounds / Borders / Dividers | lighten($darker-gray, 20%) | 78, 78, 78, 1 | 0, 0, 0.3058823529411765, 1 | <div style="width: 50px; height: 25px; background-color: #4E4E4E; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $dark-medium-gray | .dark-medium-gray | Basic gray / Generic backgrounds / Borders / Dividers | lighten($darker-gray, 55%) | 122, 122, 122, 1 | 0, 0, 0.4784313725490196, 1 | <div style="width: 50px; height: 25px; background-color: #7A7A7A; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $gray | .gray | Basic gray / Generic backgrounds / Borders / Dividers | lighten($darker-gray, 75%) | 188, 188, 188, 1 | 0, 0, 0.7372549019607844, 1 | <div style="width: 50px; height: 25px; background-color: #BCBCBC; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $light-medium-gray | .light-medium-gray | Basic gray / Generic backgrounds / Borders / Dividers | lighten($darker-gray, 90%) | 232, 232, 232, 1 | 0, 0, 0.9098039215686274, 1 | <div style="width: 50px; height: 25px; background-color: #E8E8E8; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $light-gray | .light-gray | Basic gray / Generic backgrounds / Borders / Dividers | lighten($darker-gray, 95%) | 244, 244, 244, 1 | 0, 0, 0.9568627450980391, 1 | <div style="width: 50px; height: 25px; background-color: #F4F4F4; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $lighter-gray | .lighter-gray | Basic gray / Generic backgrounds / Borders / Dividers | lighten($darker-gray, 98%) | 251, 251, 251, 1 | 0, 0, 0.9847204506802721, 1 | <div style="width: 50px; height: 25px; background-color: #FBFBFB; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |

## UI / Link

| Token        | Class   | Role(s)  | Value   | RGBA  | HSLA  | 🔶 Color |
| ------------- |-------------| -------------| -------------| -------------| -------------| -------------|
| $link-default | .link-default | Default link color | #0000EE | 0, 0, 238, 1 | 240, 100, 47, 1 | <div style="width: 50px; height: 25px; background-color: #0000EE; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $link-visited | .link-visited | Visited link color | #551A8B | 85, 26, 139, 1 | 271.32743362831854, 68.4848484848485, 32, 1 | <div style="width: 50px; height: 25px; background-color: #551A8B; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $link-active | .link-active | Active link color | #FF0000 | 255, 0, 0, 1 | 0, 100, 50, 1 | <div style="width: 50px; height: 25px; background-color: #FF0000; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $link-hover | .link-hover | Hover link color | darken($link-default, 20%) | 2, 2, 189, 1 | 240, 98.29046454767727, 37, 1 | <div style="width: 50px; height: 25px; background-color: #0202BD; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |

## UI / Social

| Token        | Class   | Role(s)  | Value   | RGBA  | HSLA  | 🔶 Color |
| ------------- |-------------| -------------| -------------| -------------| -------------| -------------|
| $behance | .behance | Behance brand color | #1769FF | 23, 105, 255, 1 | 218.79310344827584, 100, 55, 1 | <div style="width: 50px; height: 25px; background-color: #1769FF; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $dribbble | .dribbble | Dribbble brand color | #EA4C89 | 234, 76, 137, 1 | 336.83544303797464, 78.99999999999999, 61, 1 | <div style="width: 50px; height: 25px; background-color: #EA4C89; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $dropbox | .dropbox | Dropbox brand color | #0061FF | 0, 97, 255, 1 | 217.17647058823528, 100, 50, 1 | <div style="width: 50px; height: 25px; background-color: #0061FF; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $facebook | .facebook | Facebook brand color | #3B5998 | 59, 89, 152, 1 | 220.6451612903226, 44.075829383886244, 41, 1 | <div style="width: 50px; height: 25px; background-color: #3B5998; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $github | .github | Github brand color | #4078C0 | 64, 120, 192, 1 | 213.75, 50.39370078740157, 50, 1 | <div style="width: 50px; height: 25px; background-color: #4078C0; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $google-plus | .google-plus | Google Plus brand color | #D34836 | 211, 72, 54, 1 | 6.87898089171974, 64.08163265306122, 52, 1 | <div style="width: 50px; height: 25px; background-color: #D34836; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $instagram | .instagram | Instagram brand color | #4C5FD7 | 76, 95, 215, 1 | 231.79856115107913, 63.47031963470322, 57, 1 | <div style="width: 50px; height: 25px; background-color: #4C5FD7; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $linkedin | .linkedin | Linkedin brand color | #0077B5 | 0, 119, 181, 1 | 200.55248618784532, 100, 35, 1 | <div style="width: 50px; height: 25px; background-color: #0077B5; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $pinterest | .pinterest | Pinterest brand color | #CB2027 | 203, 32, 39, 1 | 357.5438596491228, 72.7659574468085, 46, 1 | <div style="width: 50px; height: 25px; background-color: #CB2027; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $skype | .skype | Skype brand color | #00AFF0 | 0, 175, 240, 1 | 196.25000000000003, 100, 47, 1 | <div style="width: 50px; height: 25px; background-color: #00AFF0; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $slack | .slack | Slack brand color | #6ECADC | 110, 202, 220, 1 | 189.81818181818184, 61.111111111111114, 65, 1 | <div style="width: 50px; height: 25px; background-color: #6ECADC; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $spotify | .spotify | Spotify brand color | #1ED760 | 30, 215, 96, 1 | 141.4054054054054, 75.51020408163265, 48, 1 | <div style="width: 50px; height: 25px; background-color: #1ED760; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $twitter | .twitter | Twitter brand color | #00B6F1 | 0, 182, 241, 1 | 194.68879668049792, 100, 47, 1 | <div style="width: 50px; height: 25px; background-color: #00B6F1; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $vimeo | .vimeo | Vimeo brand color | #45BBFF | 69, 187, 255, 1 | 201.93548387096774, 100, 64, 1 | <div style="width: 50px; height: 25px; background-color: #45BBFF; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $youtube | .youtube | Youtube brand color | #FF0000 | 255, 0, 0, 1 | 0, 100, 50, 1 | <div style="width: 50px; height: 25px; background-color: #FF0000; border: none; margin: 0 auto; position: relative; top: 2px"> </div> |

## UI / Opacity

| Token        | Class   | Role(s)  | Value   | RGBA  | HSLA  | 🔶 Color |
| ------------- |-------------| -------------| -------------| -------------| -------------| -------------|
| $black-lightbox-65 | .black-lightbox-65 | brand color | rgba($darker-gray, .65) | 34, 34, 34, 0.65 | 0, 0, 0.1333333333333333, 0.65 | <div style="width: 50px; height: 25px; background-color: rgba(34, 34, 34, .65); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $black-lightbox-55 | .black-lightbox-55 | brand color | rgba($darker-gray, .55) | 34, 34, 34, 0.65 | 0, 0, 0.1333333333333333, 0.55 | <div style="width: 50px; height: 25px; background-color: rgba(34, 34, 34, .55); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $black-lightbox-45 | .black-lightbox-45 | brand color | rgba($darker-gray, .45) | 34, 34, 34, 0.45 | 0, 0, 0.1333333333333333, 0.45 | <div style="width: 50px; height: 25px; background-color: rgba(34, 34, 34, .45); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $black-lightbox-35 | .black-lightbox-35 | brand color | rgba($darker-gray, .35) | 34, 34, 34, 0.35 | 0, 0, 0.1333333333333333, 0.35 | <div style="width: 50px; height: 25px; background-color: rgba(34, 34, 34, .35); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $black-lightbox-25 | .black-lightbox-25 | brand color | rgba($darker-gray, .25) | 34, 34, 34, 0.25 | 0, 0, 0.1333333333333333, 0.25 | <div style="width: 50px; height: 25px; background-color: rgba(34, 34, 34, .25); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $black-lightbox-15 | .black-lightbox-15 | brand color | rgba($darker-gray, .15) | 34, 34, 34, 0.15 | 0, 0, 0.1333333333333333, 0.15 | <div style="width: 50px; height: 25px; background-color: rgba(34, 34, 34, .15); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $black-lightbox-5 | .black-lightbox-5 | brand color | rgba($darker-gray, .5) | 34, 34, 34, 0.5 | 0, 0, 0.1333333333333333, 0.5 | <div style="width: 50px; height: 25px; background-color: rgba(34, 34, 34, .5); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $white-lightbox-65 | .white-lightbox-65 | brand color | rgba($darker-gray, .65) | 255, 255, 255, 0.65 | 0, 0, 1, 0.65 | <div style="width: 50px; height: 25px; background-color: rgba(255, 255, 255, .65); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $white-lightbox-55 | .white-lightbox-55 | brand color | rgba($darker-gray, .55) | 255, 255, 255, 0.65 | 0, 0, 1, 0.55 | <div style="width: 50px; height: 25px; background-color: rgba(255, 255, 255, .55); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $white-lightbox-45 | .white-lightbox-45 | brand color | rgba($darker-gray, .45) | 255, 255, 255, 0.45 | 0, 0, 1, 0.45 | <div style="width: 50px; height: 25px; background-color: rgba(255, 255, 255, .45); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $white-lightbox-35 | .white-lightbox-35 | brand color | rgba($darker-gray, .35) | 255, 255, 255, 0.35 | 0, 0, 1, 0.35 | <div style="width: 50px; height: 25px; background-color: rgba(255, 255, 255, .35); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $white-lightbox-25 | .white-lightbox-25 | brand color | rgba($darker-gray, .25) | 255, 255, 255, 0.25 | 0, 0, 1, 0.25 | <div style="width: 50px; height: 25px; background-color: rgba(255, 255, 255, .25); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $white-lightbox-15 | .white-lightbox-15 | brand color | rgba($darker-gray, .15) | 255, 255, 255, 0.15 | 0, 0, 1, 0.15 | <div style="width: 50px; height: 25px; background-color: rgba(255, 255, 255, .15); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |
| $white-lightbox-5 | .white-lightbox-5 | brand color | rgba($darker-gray, .5) | 255, 255, 255, 0.5 | 0, 0, 1, 0.5 | <div style="width: 50px; height: 25px; background-color: rgba(255, 255, 255, .5); border: none; margin: 0 auto; position: relative; top: 2px"> </div> |



<a id="swatches"></a>

# Swatches & tokens
