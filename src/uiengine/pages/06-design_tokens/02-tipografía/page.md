---
title: 🖋 Typography tokens
tokens:
    - <<: !include /src/uiengine/tokens/font-families.js
    - <<: !include /src/uiengine/tokens/font-sizes.js
    - name: Barlow
      type: category
      tokens:
      - type: font
        fontweight: 400
        license: SIL Open Font License
        variable: $font-family-1regular
        value: "font-family: 'Barlow', sans-serif;"
        sizes:
          - 1rem
      - type: font
        fontweight: 700
        license: SIL Open Font License
        variable: $font-family-1bold
        value: "font-family: 'Barlow', sans-serif; font-weight: 700;"
        sizes:
          - 2rem
      - type: font
        fontweight: 900
        license: SIL Open Font License
        variable: $font-family-1black
        value: "font-family: 'Barlow', sans-serif; font-weight: 900;"
        sizes:
          - 3rem
    - name: Lato
      type: category
      tokens:
      - type: font
        fontweight: 300
        license: SIL Open Font License
        variable: $font-family-2light
        value: "font-family: 'Lato', sans-serif; font-weight: 300;"
        sizes:
          - 1rem
      - type: font
        fontweight: 400
        license: SIL Open Font License
        variable: $font-family-2regular
        value: "font-family: 'Lato', sans-serif; font-weight: 400;"
        sizes:
          - 2rem
      - type: font
        fontweight: 700
        license: SIL Open Font License
        variable: $font-family-2bold
        value: "font-family: 'Lato', sans-serif; font-weight: 700;"
        sizes:
          - 3rem
---
