import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login/index'
import Category from '../Pages/Category'
import Dashboard from '../Pages/dashboard'
import Sales from '../Pages/Sales/index'
import Register from '../Pages/Register/index'
import userContext from '../Utils/context'

const Routers = () => {
  const [user, setUser] = useState()

  return (
    <userContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/category' element={<Category />} />
          <Route path='/sales' element={<Sales />} />
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export default Routers;