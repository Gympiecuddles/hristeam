import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import ScrollToTop from './components/ScrollToTop'
import Services from './pages/Services'
import Team from './pages/Team'
import Contact from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename='/hristeam'>
    <Navbar />
    <ScrollToTop>
      <Newsletter />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </ScrollToTop>
  </Router>
)
