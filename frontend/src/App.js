import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import UserFeedback from './pages/userFeedback';
import Feedback from './pages/Feedback';
import AOS from 'aos';
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    
  
    AOS.init({
      offset: 400,
      duration: 1000
    });
  }, [])
  return (
    <div className=' bg-slate-500 h-auto'>

    <BrowserRouter>
      <div>
        <button className='bg-slate-700 m-2  font-bold py-2 px-4 text-white rounded mt-2'>

        <Link to="/add">addFeedback</Link>
        </button>
        <Link to="/"></Link>
      </div>
      <div className='flex justify-center items-center'>
        <Routes>
          <Route path="/add" element={<UserFeedback />} />
          <Route path="/" element={<Feedback />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
};

export default App;
