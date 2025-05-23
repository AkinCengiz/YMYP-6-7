import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import { CategoryProvider } from './contexts/CategoryProvider.jsx'
import { ProductProvider } from './contexts/ProductProvider.jsx'
import { Layout } from './layouts/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <BrowserRouter>
      <CategoryProvider>
        <ProductProvider>
          <Layout>
            <App />
          </Layout>
        </ProductProvider>
      </CategoryProvider>
    </BrowserRouter>    
  </StrictMode>,
)
