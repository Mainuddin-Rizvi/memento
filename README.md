# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- create project -->

npm create vite@latest ./ -- --template react

<!-- add tailwind css -->

npm i -D tailwindcss

npx tailwindcss init

<!-- install dependency -->

npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom

<!-- setup the project  constants, asset, components, public tailwind.config.js -->

<!-- install tailwind postcss auto prefixer -->

npm install --legacy-peer-deps -D postcss autoprefixer
npx tailwindcss init -p

<!-- install three during create component of canva  -->

npm install --legacy-peer-deps three

<!-- tech used -->

Three.js 3d
Tailwind css
