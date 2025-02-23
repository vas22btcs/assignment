import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';
import Add from './Addblog';
import Blog from './Blog';



function App() {
  

  return (
    <>
      <div>
        
        <Navbar/>
        <Routes>
          <Route path="/"element={<Blog/>}/>
          <Route path="/add-blog" element={<Add/>}/>
          </Routes>     
          </div>
     
    </>
  )
}

export default App
