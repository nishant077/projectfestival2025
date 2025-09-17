import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import NavAnimation from './components/common/NavAnimation.jsx'
import NavContext from './context/NavContext.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
    <NavAnimation>
      <NavContext>
        <App/>
    </NavContext>
    </NavAnimation>
    </BrowserRouter>
  </StrictMode>,
)
