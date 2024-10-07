import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WeCare from './WeCare.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeCare />
  </StrictMode>,
)
