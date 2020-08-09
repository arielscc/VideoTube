# VideoTube - A Page for videos with React & Tailwind

This is a Project developed using the knows of course React Practice, I integrate it with teailwind Css

## Iniciatial

Create a folder base named `VideoTube`

In the base folder, initialice a git repositori using `git init` and npm project `npm init -y`

Then we can install a dependencies for this project:

* Install React:

```bash
npm i react react-dom
```

* Install Babel:

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```
* Install Webpack

```bash
npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev
```
* Install Tailwind

```bash
npm install tailwindcss postcss-cli postcss-loader autoprefixer --save-dev
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