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
