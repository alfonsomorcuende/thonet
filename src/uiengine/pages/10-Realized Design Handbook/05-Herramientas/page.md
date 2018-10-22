# Herramientas

<h2 class="big-title">HERRAMIENTAS</h2>

- [Abstract](#abstract)
- [Sketch / Thonet](#sketch)
- [Slack](#slack)
- [Atom](#atom)
- [Git](#git)
- [UIengine](#uiengine)

<a id="#abstract"></a>

<h2 class="medium-title abstract">ABSTRACT</h2>

[Abstract](https://www.goabstract.com/) es una aplicación que permite aplicar a Sketch un control de versiones al estilo Git, pero con interfaz. Se puede utilizar tanto en webapp como en su propia aplicación nativa para el ordenador ([descargar](https://app.goabstract.com/download)).

### Los motivos

El control de versiones de Abstract permite que varios diseñadores del equipo puedan, de forma colaborativa, trabajar en el mismo archivo, evitando crear versiones duplicadas del proyecto y protegiendo el siempre el trabajo. Además, establece y asienta algunos procesos a la hora de trabajar.

### La organización en abstract

De un primer vistazo, en Abstract diferenciamos los proyectos de los repositorios a través de las iniciales P y R como sufijos de cada título:

![Abstract projects organization](http://thonet.realized.es/doc/img/handbook/abstract-projects-organization.png "Abstract Projects Organization")

### Organización de archivos dentro de un proyecto o repositorio

Encontraremos archivos de Sketch  diferentes si se trata de un proyecto o un repositorio:

- Proyecto:
  - Archivo o archivos que contienen el visual del producto
  - Librerías propias o enlazadas desde un repositorio
- Repositorio:
  - Librerías propias del repositorio disponibles para enlazar desde cualquier proyecto de Abstract.

### Conceptos, procesos y nomenclatura

#### Master

La rama master es la que contiene la última versión estable del producto dentro de un proyecto o repositorio.

Los diseñadores pueden abrir cualquier archivo de Sketch **directamente desde master**, pero, en este caso, Abstract **no registrará los cambios**. Esta es la forma más segura de realizar experimentos sobre el diseño sin destruirlo.

#### Ramas (branches)

Las ramas son versiones que se crean a partir del master del proyecto en las que cada diseñador podrá realizar ajustes, modificaciones o desarrollar nuevas funcionalidades sin que estas alteren la estabilidad del mismo. Son espacios independientes donde trabajar e ir guardando los cambios sin modificar la última versión estable del producto.

El nombre de cada rama deberá tener la siguiente anatomía:

 ```
 Código de la tarea - Descripción - Nombre de usuario (por ejemplo: DS03 - Formularios - Luis).
```
#### Commits

Para que Abstract registre y guarde los cambios en cada rama  no basta con guardar desde el fichero de Sketch, sino que tenemos que **hacer un commit**. Es importante hacer commits a menudo, con actualizaciones pequeñas,  ya que es mucho más manejable a la hora de resolver posibles conflictos, revertir commits o incluso sincronizar las modificaciones con Abstract.

La anatomía de un commit deberá ser:

```
- Título - descripción muy concisa (Inputs - nuevos tamaños)
- Descripción más detallada (Añadidos los tamaños s, m, l y xl)
```
#### Pull request y Merge

Un **merge** es la fusión de nuestra rama personal con la rama master. Es la forma de llevarnos todos los ajustes o aportaciones de nuestra rama a la última versión estable del proyecto (master).

Para que un merge se lleve a cabo, previamente se ha de pedir un **pull request** que ha de validar el Project Manager para que los cambios suban a la rama master.

### Procesos en Abstract

#### Repositorio - Creación de un nuevo primitive o componente

1. Creación de una **nueva rama** desde Master, aplicando la nomenclatura correspondiente (Código de la tarea - Descripción - Nombre de usuario)
2. Creación del archivo de Sketch directamente en Abstract como **librería**. La nomenclatura variará en función de si se trata de un primitive o un componente:
  - **Primitive:** Letra del alfabeto correspondiente / nombre del primitive → a / color.sketch
  - **Componente:** Número de tres cifras / c / nombre del componente → 001 / c / control buttons (la c del medio hace alusión a que se trata de un componente).
3. Creación de **commits** siguiendo la nomenclatura correspondiente.
4. Una vez el trabajo esté realizado, se creará la petición de un **pull request**.
5. Una vez validado el pull request por el Product Manager, se realizará el **merge** de la rama a Master.

#### Nuevo proyecto

1. Creación  en Abstract, por parte del Product Manager,  de un **nuevo proyecto** con el sufijo correspondiente.
2. Enlace de las **librerías** del repositorio o repositorios necesarios.
3. Creación del **archivo** de Sketch principal  en la rama Master.
4. Creación de una **rama**.
5. Generación de los visuales necesarios y gestión de los mismos mediante **commits**.
6. Una vez el trabajo esté realizado, se creará la petición de un **pull request**.
7. Una vez validado el pull request por el Product Manager, se realizará el **merge** de la rama a Master.

&nbsp;
***
&nbsp;

<a id="#sketch"></a>

<h2 class="medium-title sketch">SKETCH / THONET</h2>

[Sketch](https://www.sketchapp.com/) es una herramienta de diseño vectorial que utilizamos para construir tanto el prototipado como  el visual de los productos en los que trabajamos. Es también la herramienta en la que diseñamos y materializamos las librerías de Thonet Design System.

### Estructura de Thonet

En el caso de Thonet DS, se ha de tener en cuenta que existe un archivo de Sketch por cada **primitive** y cada **componente** que, a su vez, son librerías enlazables a cualquier otro proyecto dentro de Abstract:

![Thonet files organization in Abstract](http://thonet.realized.es/doc/img/handbook/abstract-thonet-organization.png "Abstract Thonet Organization")

Cada archivo primitive contiene elementos **subatómicos**  (color, tipografía, iconografía, etc.) que pueden ser utilizados de manera independiente para crear componentes. El último de los primitives es el **builder**, en el que tenemos disponibles todas las formas y propiedades necesarias para crear casi todos los componentes (shapes, fill, border, state, etc.), construidas a partir del resto de primitives.

Entre los archivos primitives y los de componentes, existe un archivo de **Theming**, como capa intermedia cuya función es personalizar los componentes según las necesidades del producto.

![Primitives > Theming > Components](http://thonet.realized.es/doc/img/handbook/primitives-theming-components.png "Primitives > Theming > Components")

### Dentro de Sketch

Una vez dentro de Sketch, cada uno de los archivos que componen Thonet DS cuentan con una página dedicada a la **documentación** de ese primitive o componente y otra para los símbolos que componen la librería.

#### Anidación de símbolos

Todos los primitives están almacenados en símbolos salvo la tipografía, que son estilos de texto.

Para garantizar el buen funcionamiento de las librerías de Thonet DS es fundamental la nomenclatura de los símbolos, ordenados deliberadamente en un **listado alfabético**. En primer lugar, Sketch tomará como referencia el propio nombre del archivo marcado como librería y, a partir de ahí, el nombre del artboard de cada símbolo (en la sección de Plugins encontrarás algunos para facilitar la tarea de mantener ordenados los nombres de los artboards y las capas):

(SCREENSHOT)

Cómo nombrar los artboards / símbolos:

- La anidación irá siempre de lo general a lo particular.
- El orden será deliberadamente alfabético, mediante el uso de letra seguida de punto (por ejemplo: a. support)
- En el último nivel se prescindirá del orden alfabético a no ser que sea estrictamente necesario (por ejemplo: para ordenar visualmente la escala de grises en la paleta neutral).
- En el caso de que el listado sea tan extenso que pueda exceder los caracteres del abecedario, el orden será numérico y contará con tres cifras (por ejemplo: 001 - c - control buttons)
- Los nombres han de ir siempre en minúsculas

Cómo nombrar las capas dentro de los símbolos:

- Los nombres deben coincidir con los primitives para facilitar la comprensión y la selección (por ejemplo: fill)
- Han de ir siempre en minúsculas
- Se evitarán siempre los sufijos “copy” generados al duplicar capas

#### Plugins

He aquí un listado de plugins de Sketch útiles para facilitar algunas tareas en la creación, desarrollo y mantenimiento de Thonet DS.

- [Runner](https://sketchrunner.com/) → Lanzamiento de acciones e instalación de plugins de forma mucho más rápida.
- [Sketchpalette](https://github.com/andrewfiorillo/sketch-palettes) → Permite exportar e importar paletas de color.
- [Automate](https://ashung.github.io/Automate-Sketch/) → Automatización de infinidad de tareas. Especialmente útil en cuanto a símbolos o librerías completas.
- [Rename It!](https://rodi01.github.io/RenameIt/) → Imprescindible para renombrar capas, estilos o artboards.
- [Select Similar Layers](https://github.com/wonderbit/sketch-select-similar-layers) → Ofrece la posibilidad de seleccionar todas las capas de una página con propiedades idénticas como, por ejemplo, el nombre.
- [Text Style Master](https://github.com/aparajita/sketch-text-style-master) → Imprescindible para gestionar los estilos de texto con acciones en lote.

&nbsp;
***
&nbsp;

<a id="slack"></a>

<h2 class="medium-title slack">SLACK</h2>

[Slack](https://slack.com/) es una aplicación de mensajería multiplataforma que utilizamos todos los miembros del equipo para llevar una comunicación fluida independientemente de nuestra ubicación.

Nuestro espacio de Slack se organiza de la siguiente manera:

- Salas por proyecto
- Sala independiente para Thonet DS
- Sala para recursos
- Sala general

&nbsp;
***
&nbsp;

<a id="atom"></a>

<h2 class="medium-title atom">ATOM</h2>

[Atom](https://atom.io/) es un editor de texto gratuito y open source  de GitHub que utilizamos para trabajar toda la parte de código de Thonet DS.

Utilizamos Atom por la flexibilidad y hackabilidad que ofrece, además de su integración con Git y GitHub. En Atom, utilizamos dos plugins imprescindibles para ayudarnos a definir nuestros Tokens tanto en JSON como en YML.

- [Linter-js-yaml](https://atom.io/packages/linter-js-yaml) → Prevención de errores sintácticos en YML.
- [Jsonlint](https://atom.io/packages/linter-jsonlint) → Prevención de errores sintácticos en JSON.

&nbsp;
***
&nbsp;  

<a id="git"></a>

<h2 class="medium-title git">GIT</h2>

[Git](https://git-scm.com/) es un sistema de control de versiones gratuito y open source que utilizamos de manera similar a Abstract pero para nuestro repositorio en código de Thonet DS.

Trabajamos directamente en la consola, aunque hay interfaces visuales disponibles como [Sourcetree](https://www.sourcetreeapp.com/) de Atlassian.

&nbsp;
***
&nbsp;

<a id="uiengine"></a>

<h2 class="medium-title uiengine">UIENGINE</h2>

[UIengine](https://github.com/dennisreimann/uiengine) es una SPA open source con la que generamos nuestra documentación y renderizamos nuestros tokens a partir de ficheros md, js y yml.

El repositorio se aloja en [GitHub](https://github.com/alfonsomorcuende/thonet/), desde donde se crean las ramas para desarrollar nuevos apartados o funcionalidades a través de Git.
