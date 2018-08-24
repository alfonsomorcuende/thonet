---
title: Buttons
---
![alt text](http://thonet.realized.es/doc/img/components/btn-tokens.png "Tokens composing a button")

### Introduction

Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.

## Simple button

---

![alt text](http://thonet.realized.es/doc/img/components/btn-simple-sizes.png "Simple button sizes")

#### Sizes

| Available Sizes  | Style  |
| ------------- |-------------| -------------|
| S | `height: 32px` |
| M | `height: 40px` |
| L | `height: 48px` |
| XL | `height: 56px` |

#### Atoms

| Atoms  | Options  |
| ------------- |-------------| -------------|
| Layer | disabled (-1) / resting (0) / raised (2) / floating (4) |
| Fill | border-radius (0, 2px, 4px, 8px, 100%) / background-color |
| Border | border-radius (0, 2px, 4px, 8px, 100%) / border-color / border-width |
| Text | font-family (1, 2) / device / size / weight / color |
| State | default / :hover / visited / disabled |
| Size | S / M / L / XL |

#### Tokens

| Tokens  |
| --------- |
| $layer |
| $fill |
| $border |
| $font |
| $state | 
| $size |
| $spacing |


| Sizes        | Options  | Tokens     |
| ------------- |-------------| -------------|
| S | Layer | $layer |
| M | Fill | $fill |
| L | Border | $border |
| XL | Text | $font |
|  | State | $state |
|  | Size | $size |
|  |  | $spacing |

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

![alt text](http://thonet.realized.es/doc/img/components/btn-variations.png "Simple button variations")

## Icon button

![alt text](http://thonet.realized.es/doc/img/components/btn-icon.png "Icon button")

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

![alt text](http://thonet.realized.es/doc/img/components/btn-icon-variations.png "Icon button variations")

## Split button / button groups

![alt text](http://thonet.realized.es/doc/img/components/btn-groups.png "Icon button variations")


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
