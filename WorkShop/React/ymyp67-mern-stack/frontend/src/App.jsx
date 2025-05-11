import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Dashboard from './pages/AdminPages/Dashboard'
import CategoryList from './pages/AdminPages/Category/CategoryList'
import UpdateCategory from "./pages/AdminPages/Category/UpdateCategory";
import CreateCategory from './pages/AdminPages/Category/CreateCategory'

function App() {

  return (
    <div className='app'>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/admin/'>
        <Route index element={<Dashboard />} />
        <Route path='categories' element={<CategoryList />} />
        <Route path='categories/update/:id' element={<UpdateCategory />} />
        <Route path='categories/create' element={<CreateCategory />} />
      </Route>
     </Routes>
    </div>
  )
}

export default App
