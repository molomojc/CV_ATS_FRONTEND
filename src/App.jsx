import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import JobAdvert from './CompanySubmit.jsx'
import Apply from './Apply.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply/:jobID" element={<Apply />} />
        <Route path="/company" element={<JobAdvert />} />
      </Routes>
    </Router>
  )
}

export default App
