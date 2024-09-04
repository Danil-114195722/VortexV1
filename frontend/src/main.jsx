import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/reset.css'
import './assets/global.scss'
import Animations from './Animations.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Animations />
    <App />
  </StrictMode>,
)