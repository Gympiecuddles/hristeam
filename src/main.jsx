import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Services from './pages/Services'
import Team from './pages/Team'
import Contact from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ScrollToTop>
  </Router>
)
