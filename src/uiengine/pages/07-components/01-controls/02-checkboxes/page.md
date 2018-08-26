---
title: Checkboxes
---
![alt text](http://thonet.realized.es/doc/img/components/checkbox-tokens.png "Tokens composing a button")

### Introduction

A checkable input that communicates if an option is true, false or indeterminate.
The ability to style checkboxes with CSS varies across browsers. To ensure that checkboxes look the same everywhere, we use a custom DOM. Pay close attention to the markup, because all elements must exist for the styles to work.

## Simple Checkboxes

---

![alt text](http://thonet.realized.es/doc/img/components/btn-simple-sizes.png "Simple button sizes")

#### Sizes

| Available Sizes  | Style  |
| ------------- |-------------|
| S | `height: 32px` |
| M | `height: 40px` |
| L | `height: 48px` |


#### Atoms

| Atoms  | Tokens  | Options |
| ------------- |-------------| -------------|
| Layer | $layer | disabled (-1) / resting (0) |
| Fill | $fill | border-radius (0, 2px, 4px, 8px, 100%) / background-color |
| Border | $border | border-radius (0, 2px, 4px, 8px, 100%) / border-color / border-width |
| Text | $font | font-family (1, 2) / device / size / weight / color |
| State | $state | default / :hover / visited / disabled |
| Size | $size | S / M / L |
| Spacing | $spacing | spacing (xxxs, xxs, xs, s, m, l, xl, xxl, xxxl) |


### Usage

Buttons are used primarily on action items. Some examples include Add, Save, Delete, Sign up. Do not use Buttons as navigational elements. Instead, use Links because it takes the user to a new page and is not associated with an action. Each page may have one to two primary buttons. Any remaining calls-to-action are represented as secondary buttons.

### Theming

![alt text](http://thonet.realized.es/doc/img/components/btn-tokens.png "Tokens composing a button")

| Tokens        | Style  |
| ------------- |-------------|
| $layerResting | `box-shadow: none;` |
| $fillAll4px | `border-radius: 4px; background-color: #HEX;` |
| $borderRadiusAll4px1pxWidth | `border: solid 1px #HEX;` |
| $stateDefault | `overlay: none;` |
| $spacingL | `padding: 0 24px;` |
| $desktopFontSizeM | `font-size: 1rem; line-height: 1:1.5rem;` |
| $sizeL | `height: 48px;` |

### Variations



## Checkbox button

| Sizes        | Options  | Tokens     |
| ------------- |-------------| -------------|
| S | Layer | $layer |
| M | Fill | $fill |
| L | Border | $border |
|  | Text | $font |
|  | State | $state |
|  | Size | $size |
|  | Icon | $icon |
|  |  | $spacing |


### Usage

Buttons are used primarily on action items. Some examples include Add, Save, Delete, Sign up. Do not use Buttons as navigational elements. Instead, use Links because it takes the user to a new page and is not associated with an action. Each page may have one to two primary buttons. Any remaining calls-to-action are represented as secondary buttons.

### Variations



## Checkbox groups




| Sizes        | Options  | Tokens     |
| ------------- |-------------| -------------|
| S | Layer | $layer |
| M | Fill | $fill |
| L | Border | $border |
|  | Text | $font |
|  | State | $state |
|  | Size | $size |
|  | Icon | $icon |
|  |  | $spacing |

### Usage

Buttons are used primarily on action items. Some examples include Add, Save, Delete, Sign up. Do not use Buttons as navigational elements. Instead, use Links because it takes the user to a new page and is not associated with an action. Each page may have one to two primary buttons. Any remaining calls-to-action are represented as secondary buttons.

### Variations

![alt text](http://thonet.realized.es/doc/img/components/btn-groups-variations.png "Split buttons variations")


## Checkbox states

disabled / enabled / intermediate / focused
