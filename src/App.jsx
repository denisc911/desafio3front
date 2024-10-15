// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ChartsCarousel from './components/charts/ChartsCarousel';
import Hucha from './components/hucha/Hucha';

function App() {
  const [language, setLanguage] = useState('EN');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <BrowserRouter>
      <Header language={language} onLanguageChange={handleLanguageChange} />

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<ChartsCarousel />} />
          <Route path="/hucha" element={<Hucha />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
