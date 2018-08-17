---
title: 🛠 Builder
---

Builder es el constructor primitivo de **"Thonet"**. En él se agrupan los elementos subatómicos necesarios para crear los átomos y componentes de nuestro sistema de diseño.


# ¿Cómo funciona?
---
El builder de **"Thonet"** está compuesto por cuatro categorías diferentes mediante las cuales podemos construir la base para la mayoría de los componentes de la UI. Dichas categorías son:

- Fill
- Border
- [Layer](../05-layer) (elevation)
- State

Cada categoría incluye elementos con diferentes border-radius:

- 100% (rounded)
- 8px
- 4px
- 2px
- 0 (squared)

## Detalles

| Nombre        | Descripción   |
| ------------- |-------------|
| Fill | Agrupa los rellenos de los componentes de nuestra UI |
| Border | Agrupa los bordes de los componentes de nuestra UI |
| Layer | Agrupa los grados de elevación disponibles en Thonet (ver [Layer](../05-layer) ) |
| State | Agrupa los posibles estados en formato de overlay de nuestros componentes de la  UI |

# Fill
---

![alt text](http://thonet.realized.es/doc/img/primitivs/builder_fills-detail.png "Thonet fills")

Fill agrupa los rellenos de los componentes de nuestra UI. Por defecto todos tienen el mismo tamaño, 160x48px, y se ordenan según su border-radius (0, 2px, 4px, 8px, 100%) y sus lados (top, right, bottom, left).

# Border
---

![alt text](http://thonet.realized.es/doc/img/primitivs/builder_border-detail.png "Thonet borders")

Border agrupa los bordes de los componentes de nuestra UI. Se clasifican de la misma manera que los fills, salvo que estos poseen una capa más de personalización: border-width (1px, 2px, 3px).

# Layer
---

![alt text](http://thonet.realized.es/doc/img/primitivs/builder_layer-detail.png "Thonet layers")

De todos los estados de elevación definidos en [Layer](../05-layer), nuestro builder solo cuenta con dos de ellos: raised y floating, ya que son los que muestran estilos visuales que posicionan su grado de elevación.

# State

---

![alt text](http://thonet.realized.es/doc/img/primitivs/builder_states-detail.png "Thonet states")

State agrupa tres posibles estados (:hover, pressed and disabled) en formato de capas de overlay que se posicionan sobre los elementos.

Para construirlos, seguimos la misma lógica de variables lighten and darken con la que formamos nuestra paleta de color UI, salvo que la aplicamos sobre la capa de overlay.


## Building states

| Name       | Variable   | Color preview |
| ------------- |-------------| -----------------|
| :hover | lighten($dark-gray, 60%) | preview |
| pressed | lighten($dark-gray, 30%) | preview |
| Raised | lighten($white, 30%) | color preview |


![alt text](http://thonet.realized.es/doc/img/primitivs/builder_states-example.png "Thonet states examples")

# Sketch overrides

---

Para asegurar un sistema de overrides sostenible en los elementos compuestos por las partículas subatómicas del Builder, hemos dotado a los artboards de cada categoría (fill, border, layer y state) de diferentes medidas.

De este modo, para realizar un override en Sketch, la aplicación nos ofrecerá elementos de la misma categoría:

![alt text](http://thonet.realized.es/doc/img/primitivs/builder-sketch_overrides.png "Sketch overrides example")
