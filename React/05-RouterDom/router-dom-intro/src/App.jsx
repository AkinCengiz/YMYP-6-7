import { Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import BlogsPage from './pages/BlogsPage'
import NotFound from './pages/NotFound'
import './App.css'

function App() {


  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/blogs' element={<BlogsPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
