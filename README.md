# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- ~🚀 Server-side rendering~ **SINGLE PAGE APPLICATION ONLY**
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- ~🔒TypeScript by default~ (ejected from typescript)
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### PREREQUISITE 
- Node v20+
- React v19

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

### DIY Deployment

THIS IS ONLY FOR SPA purposes.. **DONT WRITE SERVER SIDE CODE**

Make sure to deploy the output of `npm run build`

## Static host deployment 
    run `npm run build` 
    copy the build folder content to your static host server

```
├── app (root folder) 
│   ├── Components/   Global reusable components that can be use in different pages 
│   ├── Constants/ Static/hard coded text,colors,themes  
│   ├── Hooks/ events folder for calling state management or api  
│   ├── Layouts / Layouts   
│   ├── Pages / Primary Page 
│   ├── <Page_name> / Primary Page 
│   ├── ├── index.jsx / 
│   ├── routes.ts / declare routes  
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # this is disabled
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

## DEV NOTES

THIS IS THE INITIAL SETUP FOR THIS PROJECT
FEEL FREE TO COMMIT ANYTING IN `master` branch

Built with ❤️ using React Router.
