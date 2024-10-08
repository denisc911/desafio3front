import { useState } from 'react'
// App.js

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [language, setLanguage] = useState('EN');
 
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage); // Update the language state
  };
  return (
    <div>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
