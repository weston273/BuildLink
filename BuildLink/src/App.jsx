import React from 'react'
import {Link} from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Login from './Login.jsx';
import Home from './Home.jsx'



function App() {
  
    return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
      

    </div>
      
    
  )
}

export default App
