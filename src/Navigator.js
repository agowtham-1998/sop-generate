import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SOPForm from './SOPForm';
import ThankYou from './ThankYou';

function Navigator() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SOPForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default Navigator;
