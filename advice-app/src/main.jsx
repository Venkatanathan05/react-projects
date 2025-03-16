import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AdviceApp from './AdviceApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  <AdviceApp />
  </StrictMode>,
)
