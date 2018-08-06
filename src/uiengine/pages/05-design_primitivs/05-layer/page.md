---
title: ⬆️ Layer
---

Las capas (layers) conforman la base del ecosistema de los componentes, son la superficie sobre las que estos se agrupan. Siendo todas del mismo grosor, poseen diferentes medidas y grados de elevación entre sí.

Por defecto, **"Thonet"** cuenta con cuatro niveles de elevación entre capas o entre los propios componentes con respecto a la base: *disabled (-1) // resting (0) // raised (2) // floating (8*).

El nivel de elevación de cada capa viene indicado por su sombra:

## Tipos

| Layer name        | Elevation   | Box-shadow |
| ------------- |-------------| -----------------|
| Disabled | -1 | none |
| Resting | 0 | none |
| Raised | 2 | 0 2px 4px 0 rgba(0,0,0,0.10); |
| Disabled | 8 | 0 8px 10px 0 rgba(0,0,0,0.10); |

## Cómo calcular el box-shadow
---

```
y = elevation  -->  blur = y+2
```

## Elevación entre componentes y layout
---
