---
title:  🖋 Tipografía
tokens:
    - name: Barlow
      type: category
      tokens:
      - type: font
        fontweight: regular
        license: SIL Open Font License
        variable: BarlowRegular
        value: "font-family: BarlowRegular;"
        sizes:
          - 1rem
      - type: font
        fontweight: bold
        license: SIL Open Font License
        variable: BarlowBold
        value: "font-family: BarlowBold;"
        sizes:
          - 2rem
      - type: font
        fontweight: black
        license: SIL Open Font License
        variable: BarlowBlack
        value: "font-family: BarlowBlack;"
        sizes:
          - 3rem
    - name: Lato
      type: category
      tokens:
      - type: font
        fontweight: light
        license: SIL Open Font License
        variable: BarlowRegular
        value: "font-family: LatoLight;"
        sizes:
          - 1rem
      - type: font
        fontweight: regular
        license: SIL Open Font License
        variable: BarlowBold
        value: "font-family: LatoRegular;"
        sizes:
          - 2rem
      - type: font
        fontweight: bold
        license: SIL Open Font License
        variable: BarlowBlack
        value: "font-family: LatoBold;"
        sizes:
          - 3rem

imports:
      - { resource: /src/uiengine/tokens/colors.js }
---

La tipografía es uno de los elementos más importantes de un sistema de diseño. Su función jerárquica es clave a la hora de estructurar y organizar el diseño para ofrecer una experiencia de usuario ordenada, clara y concisa.

# Thonet Typeface


## Barlow
---

![alt text](http://thonet.realized.es/doc/img/primitivs/typo_barlow.svg "Barlow")

```css
font-family: 'Barlow', sans-serif;
```
[Barlow @ Google fonts](https://fonts.google.com/specimen/Barlow)

## Lato
---

![alt text](http://thonet.realized.es/doc/img/primitivs/typo_lato.svg "Lato")

```css
font-family: 'Lato', sans-serif;
```
[Lato @ Google fonts](https://fonts.google.com/specimen/Lato)

# Thonet Type Scale

En Thonet hemos decidido escalar la tipografía con una lógica práctica. En lugar de seguir un ratio equivalente progresivo (como el ya conocido [Modular Scale](https://type-scale.com/)), hemos establecido una base de 16px = 1rem y un ratio de partida "Minor Third (1.2)" para, posteriormente, escalar la tipografía en intervalos personalizados (steps) a raíz de una fórmula matemática en lugar de seguir estrictamente el ratio.

La razón de ser de este planteamiento es conseguir un enfoque práctico y evitar una cantidad de variables poco útiles entre los tamaños estándar de la UI y los headers.

### Fórmula

![alt text](http://thonet.realized.es/doc/img/primitivs/typo_thonet-type-scale-general.svg "Thonet Type Scale")

![alt text](http://thonet.realized.es/doc/img/primitivs/typo_thonet-type-scale-distribution-graphic.svg "Thonet Type Scale")

## Responsive balance

Nuestra fórmula respeta la relación de la proporción entre los elementos en diferentes dispositivos y resoluciones.

![alt text](http://thonet.realized.es/doc/img/primitivs/typo_thonet-type-scale-responsive.svg "Thonet Type Scale Responsive")

### Type Leading

El leading (line-height) influye directamente en la legibilidad del texto. En Thonet, el leading viene definido por el propio tamaño de la fuente a través de un ratio estándar de 1:1.5 (rem), salvo en los headers, que, por su morfología, el ratio es menor: 1:1.125 (rem).

![alt text](http://thonet.realized.es/doc/img/primitivs/typo_thonet-type-leading.svg "Thonet Type Leading")
