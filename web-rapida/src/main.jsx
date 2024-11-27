import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './App.jsx'
import Home from './Home.jsx'
import Service from './Service.jsx'
import Enlaces from './Enlaces.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
     <Home/>
     <Service/>
     <Enlaces/>
  </StrictMode>,
)
