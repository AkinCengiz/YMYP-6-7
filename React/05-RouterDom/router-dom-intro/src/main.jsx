import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Header from './components/Layout/Header.jsx'
import Footer from './components/Layout/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <div className="container">
      <Header />
      <App />
      <Footer />
    </div>
    </BrowserRouter>
  </StrictMode>,
)
