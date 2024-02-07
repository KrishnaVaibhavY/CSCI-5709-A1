import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';
import Home from './views/home';
import Header from './components/header';
import Results from './views/results';
import {
   BrowserRouter as Router,
   Route,
   Routes,
} from "react-router-dom";
function App() {
  return (
    <div className='m-0'>
    <Header/>

           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Results />} />
           </Routes>

    <Footer/>
  </div>
  );
}

export default App;
