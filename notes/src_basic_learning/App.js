import React from 'react';
import Register from './Register';
import Edit from './Edit';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>      
        <Routes>
          <Route path='/' element={<Register />}/>
          <Route path='/Edit' element={<Edit />}/>
        </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App
