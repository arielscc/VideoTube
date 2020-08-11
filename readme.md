# VideoTube - A Page for videos with React & Tailwind

This is a Project developed using the knows of course React Practice, I integrate it with teailwind Css

## Iniciatial

Create a folder base named `VideoTube`

In the base folder, initialice a git repositori using `git init` and npm project `npm init -y`

Then we can install a dependencies for this project:

- Install React:

```bash
npm i react react-dom
```

- Install Babel:

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

- Install Webpack

```bash
npm install webpack webpack-cli html-webpack-plugin html-loader webpack-dev-server file-loader --save-dev
```

- Install Styles with SASS

```bash
npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader
```

- Install ESLINT

```bash
npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

## Estructure

We need to have the next structure for the project:

```structure
📦VideoTube
 ┣ 📂public
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┗ 📂components
 ┃ ┃  ┗ 📜HolaMundo.jsx
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜.babelrc
 ┣ 📜webpack.config.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```
