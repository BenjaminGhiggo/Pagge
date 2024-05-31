import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Chatbot from './pages/Chatbot/Chatbot.jsx';
import Deteccion from './pages/Deteccion/Deteccion.jsx';
import Home from './pages/Home/Home.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/deteccion" element={<Deteccion />} />
    </Routes>
  );
};

export default App;
