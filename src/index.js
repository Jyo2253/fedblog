import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Intro from './components/Intro';
import Types from './components/Types';
import Delete from './components/Delete';
import Home from  './pages/Home';
import About from  './pages/About';
import Portfolio from  './pages/Portfolio';
import Contact from  './pages/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/Types' element={<Types/>} />
      <Route path='/Intro' element={<Intro/>} />
      <Route path='/Delete' element={<Delete/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>

  </Router>,
   document.getElementById('root')
);

