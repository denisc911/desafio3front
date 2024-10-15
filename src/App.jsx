// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Header from './components/Header'; 
import Home from './components/Home'; 
import Footer from './components/Footer';
import FooterMenu from './components/FooterMenu'; 
import ChartsCarousel from './components/charts/ChartsCarousel'; 
import FingerprintLogin from './components/FingerprintLogin';
import NotFound from './components/NotFound'; 
import DebitCard from './components/DebitCard';
import SavingsSettings from './components/SavingsSettings';

=======
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ChartsCarousel from './components/charts/ChartsCarousel';
import Hucha from './components/hucha/Hucha';
>>>>>>> bfece1bc9f9d75aa36ea4ef1ecaa929f513f8b16

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
<<<<<<< HEAD
          <Route path="/" element={<Home />} /> 
          <Route path="/chart" element={<ChartsCarousel />} /> 
          <Route path="/fingerprint-login" element={<FingerprintLogin />} /> 
          <Route path="*" element={<NotFound />} /> 
          <Route path="/" element={<DebitCard />} /> 
          <Route path="/settings" element={<SavingsSettings />} /> 
          
        </Routes>
      </div>

      <FooterMenu /> 
      <Footer /> 
=======
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<ChartsCarousel />} />
          <Route path="/hucha" element={<Hucha />} />
        </Routes>
      </div>

      <Footer />
>>>>>>> bfece1bc9f9d75aa36ea4ef1ecaa929f513f8b16
    </BrowserRouter>
  );
}

export default App;  