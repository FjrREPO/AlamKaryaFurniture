import React from 'react';
import './App.css'
import "aos/dist/aos.css";
import Admin from './components/admin/admin';
import Mainpage from './components/Mainpage';
import AddProduct from './components/admin/add';
import EditProduct from './components/admin/edit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='w-screen max-w-[1440px] mx-auto bg-white'>
      <Router>
        <Routes>
          <Route path='/' element={<Mainpage />} exact/>
          <Route path='/admin' element={< Admin/>} exact/>
          <Route path="/admin/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
