// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './routes/Home';
import Hucha from './routes/Hucha';
import Profile from './routes/Profile';
import FooterMenu from './components/FooterMenu';
import Login from './routes/Login'
import Register from './routes/Register'



function App() {
  const [language, setLanguage] = useState('EN');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <BrowserRouter>
        <Header language={language} onLanguageChange={handleLanguageChange} />
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/hucha" element={<Hucha />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
      </Routes>
      <FooterMenu /> 
    </BrowserRouter>
  );
}

export default App;  