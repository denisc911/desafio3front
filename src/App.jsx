// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './components/Home'; 
import Footer from './components/Footer';
import FooterMenu from './components/FooterMenu'; 
import ChartsCarousel from './components/charts/ChartsCarousel'; 
import FingerprintLogin from './components/FingerprintLogin';
import NotFound from './components/NotFound'; 
import DebitCard from './components/DebitCard';
import SavingsSettings from './components/SavingsSettings';
import Register from './components/Register/Register';
import Login from './components/Login/Login';


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
          <Route path="/fingerprint-login" element={<FingerprintLogin />} /> 
          <Route path="*" element={<NotFound />} /> 
          <Route path="/debitcard" element={<DebitCard />} /> 
          <Route path="/settings" element={<SavingsSettings />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <FooterMenu /> 
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;  