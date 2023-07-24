## Simple Expense Splitter Application

This simple splitting expenses application built with React, TypeScript, React Hooks, Redux Toolkit, and Tailwind CSS. It provides a user-friendly interface for tracking and managing expenses. 

## Getting Started

First, run the development server:

```bash

# Install dependencies
npm install

# Start the application
npm run dev

```

## Demo

You can find a live demo of the Expense Splitter at [Live Demo](expense-splitter-mu.vercel.app)


## Features

- Create new group
- Add or remove participants involved in the expense sharing
- Add or remove details of individual expenses, including the amount spent
- Automatically calculates the total expense and the share of each participant 
- Responsive design

## Technologies Used

- React + TypeScript + Vite
- Redux Toolkit
- Tailwind CSS

### Copyright and license

This project is licensed under the MIT License.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
