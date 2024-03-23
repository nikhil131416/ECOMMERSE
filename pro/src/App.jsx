import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Notfound1 from './components/Notfound1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>


      <Route path='/' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='*' element={<Notfound1/>}/>


      </Routes>
      
      
      </BrowserRouter>
      
    </>
  )
}

export default App
