import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Series from './Pages/Series/Series'
import { Routes, Route } from 'react-router-dom'
import Serie from './Pages/Serie/Serie'
import Elenco from './Pages/Elenco/Elenco'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/series' element={<Series />} />
        <Route path='/serie/:id' element={<Serie />} />
        <Route path='/elenco/:id' element={<Elenco />} />
      </Routes>
    </>
  )
}

export default App
