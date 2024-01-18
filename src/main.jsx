import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { AppRouter } from './router/AppRouter.jsx'
import { HeroesApp } from './HeroesApp.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>,
)
