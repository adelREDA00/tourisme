import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Conx from './Conx'
import Insc from './Insc'
function App() {


  return (
    <Routes>
    <Route path='/' element ={<Home/>} />
    <Route path='/login' element ={<Conx/>} />
    <Route path='/register' element ={<Insc/>} />
    </Routes >
  )
}

export default App
