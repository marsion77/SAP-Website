import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/scroll-animate.css'
import { initScrollAnimations } from './utils/scrollAnimate'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Initialize scroll animations after first paint to avoid running too early.
if (typeof window !== 'undefined') {
  requestAnimationFrame(() => requestAnimationFrame(() => initScrollAnimations()));
}
