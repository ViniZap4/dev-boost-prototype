import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

//importing pages
import Home from '../Pages/Home';

const  AppRouter: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;