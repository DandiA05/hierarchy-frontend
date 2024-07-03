## Prerequisite

Things you need to learn :

- Next.js ([Link](https://nextjs.org/learn))
- Atomic Design Methodology ([Link](https://atomicdesign.bradfrost.com/chapter-2/))
- Typescript ([Link](https://www.typescriptlang.org/))
- Redux ([Link](https://redux.js.org/))
- Axios ([Link](https://axios-http.com/))
- Tailwind CSS ([Link](https://tailwindcss.com/))
- Jest Unit Testing ([Link](https://jestjs.io/))
- Hooks
- Yup Validation
- Read README.md file for more guidance on each folder

## Requirements

Things you need to install:

- Git
- Node v18
- Yarn
- Code Editor (Visual Code)
  - Extensions :
    - Tailwind CSS IntelliSense ([Link](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss))
    - Prettier - Code Formatter ([Link](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode))
    - ESLint ([Link](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint))
    - SonarLint ([Link](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode))

## Installed Package

- axios
- daisyui ([Link](https://daisyui.com/))
- react-query
- redux
- tailwindcss
- eslint
- prettier
- lint-staged
- husky
- typescript
- jest
- yup

## General Code Guidelines

- Put all your imports in order at the very top of the code file and seperate package import and component import

```bash
# package import
import React, { Component } from 'react’

# component import
import CustomButton from '../../components/button/button’
```

- Use well-descriptive names for variables/functions/modules/Actions so that even a third party or new developer can easily understand you code.
- Use a single source of truth for your form data.
- Use descriptive, helpful error messages.
- Write comments wherever required. But good readable code will require very less comments. If all variables and method names are meaningful, that would make the code very readable and will not need many comments.
- If you have to use some complex or weird logic for any reason, document it very well with sufficient comments.
- If you initialize a numeric variable to a special number other than 0, -1 etc, document the reason for choosing that value
- Remove console. logs — unless you have strong motivation why you would like it.
- Follow existing naming convention.
- If you have any suggestion regarding this code template, don't hesitate to contact Techno Architect Analyst.

## IMPORTANT!! Please use yarn to run this project

## Getting Started

First, run the development server:

```bash
# install dependencies with
yarn install

# then run in your local with
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `services/api.ts`.
