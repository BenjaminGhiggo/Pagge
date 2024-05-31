import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Chatbot from './pages/Chatbot/Chatbot';
import Deteccion from './pages/Deteccion/Deteccion';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/deteccion" element={<Deteccion />} />
      </Routes>
    </Router>
  );
};

export default App;
