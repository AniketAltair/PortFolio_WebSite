import React from 'react'
import PiggyBank from './PiggyBank/PiggyBank'
import MLProject from './MLProject/MLProject'
import WebScrapper from './WebScrapper/WebScrapper'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Projects() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/piggybank" element={<PiggyBank />} />
        <Route path="/mlproject" element={<MLProject />} />
        <Route path="/webscrapper" element={<WebScrapper />} />
        <Route path="/" element={<PiggyBank />} />
      </Routes>
    </div>
  </Router>
  )
}
