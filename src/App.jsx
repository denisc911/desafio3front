// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/header/Header';
import Home from './routes/Home';
import Hucha from './routes/Hucha';
import Subscriptions from './routes/Subscriptions';
import Profile from './routes/Profile';
import Nav from './components/header/Nav';
import Login from './routes/Login';
import Register from './routes/Register';
import Admin from './components/admin/Admin';

function App() {
  // const { user } = useSelector((state) => state.auth);

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
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/admin" element={user && user.role === 'admin' ? <Admin /> : <Navigate to="/" />} /> */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
