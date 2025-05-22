import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import './index.css'
import { CategoryProvider } from './contexts/CategoryProvider.jsx'
import { ProductProvider } from './contexts/ProductProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <BrowserRouter>
      <CategoryProvider>
        <ProductProvider>
          <AdminLayout>
            <App />
          </AdminLayout>
        </ProductProvider>
      </CategoryProvider>
    </BrowserRouter>    
  </StrictMode>,
)
