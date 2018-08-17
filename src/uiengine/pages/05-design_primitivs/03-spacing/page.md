---
title: 📏 Spacing
---

> *"To work our way towards a shared language once again, we must first learn how to discover patterns which are deep, and capable of generating life."*

> [Christopher Alexander](https://en.wikipedia.org/wiki/Christopher_Alexander)

Usar el espacio de forma ordenada y consistente en una interfaz genera balance y ritmo, el buen uso del espacio mejora la calidad percibida en la experiencia de usuario.

La gestión de los espacios dentro de Thonet se realiza mediante Tokens. Estos son usados de forma consistente en todos sus componentes y layout. La aplicación de estos Tokens se puede realizar a través de "paddings" o "margins" en los componentes y a través de reglas que definen los espacios de separación en los layouts.

Para la documentación del uso de dichos espacios existe una librería "Primitiv" (THONET-atom-spacing.sketch) en la que se dispone de símbolos que guardan sus valores para poder compartir con el equipo la aplicación de espacios a través ejemplos de interfaz.

# Dos escalas

---

Diferenciamos la aplicación de espacios a dos tipos de patrones.

- El patrón funcional, al que aplicamos los espacios de componentes, por ejemplo un botón o un input... a estos espacios los denominamos "spacing".
- El patrón de producto, que es aplicado de forma general a la composición de las páginas diseñadas, también lo denominamos layout y es el que da forma, personalidad y coherencia al producto que estemos creando. Para este tipo de espaciado utilizamos el nombre de "layout".


## Escala de espacios para componentes

---

Hemos creado una escala de tamaños que se distribuye de forma diferenciada por los niveles de espacios con los que contamos. Los espaciados de componentes se usan para componentes pequeños, especialmente dentro de componentes mas complejos, por ejemplo la separación existente entre un Label y un Text Input.

Esta escala tiene incrementos constantes para poder crear relaciones dentro de componentes de interfaz.

![alt text](http://thonet.realized.es/doc/img/primitivs/spacing-table_component_spacing.svg "Component Spacing  ")

## Spacing scale

| Name        | PX   | Rem  | Token   |   
| ------------- |-------------| -------------| -------------|
| spacing-xxxs | 2 | 0.125 | $spacing-xxxs |
| spacing-xxs | 4 | 0.25 | $spacing-xxs |
| spacing-xs | 8 | 0.5 | $spacing-xs |
| spacing-s | 12 | 0.75 | $spacing-s |
| spacing-m | 16 | 1 | $spacing-m |
| spacing-l | 24 | 1.5 | $spacing-l |
| spacing-xl | 32 | 2 | $spacing-xl |
| spacing-xxl | 40 | 2.5 | $spacing-xxl |
| spacing-xxxl | 48 | 3 | $spacing-xxxl |

## Símbolos disponibles para documentar espacios de componentes

---

Como librería "Primitiv" Thonet dispone de símbolos para poder documentar todos estos espacios en nuestros diseños. Se dispone de las siguientes opciones.

![alt text](http://thonet.realized.es/doc/img/primitivs/spacing-components_symbols.svg "Component Symbols  ")

## Escala de espacios para layout

---

Los espaciados de layout se usan para distribuir elementos a lo largo de las páginas, por ejemplo la separación entre bloques de información. Layout tiene incrementos superiores que componentes con lo que puedes seleccionar diferentes rangos de valores para interfaces más compactas o con más nivel de blancos. Usa valores más grandes de layout para separar secciones.

![alt text](http://thonet.realized.es/doc/img/primitivs/spacing-table_layout_spacing.svg "Layout Spacing  ")

| Name        | PX   | Rem  | Token   |   
| ------------- |-------------| -------------| -------------|
| spacing-xxs | 16 | 1 | $spacing-xxs |
| spacing-xs | 24 | 1.5 | $spacing-xs |
| spacing-s | 32 | 2 | $spacing-s |
| spacing-m | 48 | 3 | $spacing-m |
| spacing-l | 64 | 5 | $spacing-l |
| spacing-xl | 96 | 6 | $spacing-xl |
| spacing-xxl | 160 | 10 | $spacing-xxl |

## Símbolos disponibles para documentar espacios de layout

---

Como librería "Primitiv" Thonet dispone de símbolos para poder documentar todos estos espacios en nuestros diseños. Se dispone de las siguientes opciones.

![alt text](http://thonet.realized.es/doc/img/primitivs/spacing-layout_symbols.svg "Layout Symbols  ")
