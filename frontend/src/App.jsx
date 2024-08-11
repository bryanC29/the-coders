import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/header/header';
import Footer from './components/footer/footer';

import Index from './pages/index/index';
import Login from './pages/login/login';
import Events from './pages/events/events';
import Achievers from './pages/achieve/achieve';
import Sponsorship from './pages/sponsor/sponsor';
import Courses from './pages/courses/courses';

import Error404 from './error/error404/error404';

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/events' element={<Events />} />
          <Route path='/achievement' element={<Achievers />} />
          <Route path='/sponsorship' element={<Sponsorship />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
