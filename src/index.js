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
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div className='m-0'>
     <Header/>
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/search" element={<Results />} />
            </Routes>
         </Router>
     <Footer/>
   </div>
);


reportWebVitals();
