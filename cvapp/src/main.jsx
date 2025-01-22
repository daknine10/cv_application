import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Input from './Input.jsx'
import educations from './educations.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Input educations={educations}/>
  </StrictMode>,
)
