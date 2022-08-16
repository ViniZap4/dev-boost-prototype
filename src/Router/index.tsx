import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

//importing pages
import Home from '../Pages/Home';
import Login from '../Pages/Login';

const AppRouter: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
      
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;