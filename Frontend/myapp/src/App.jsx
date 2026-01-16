import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import AuthLayout from './Layouts/AuthLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        
        <Route path='/auth' element={<AuthLayout />}>
           <Route path='signup' element={<SignupPage />}/>
           <Route path='login' element={<LoginPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
