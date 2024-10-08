import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import PieChart from './components/charts/PieChart';
import BarChart from './components/charts/BarChart';
import HorizontalBarChart from './components/charts/HorizontalBarChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import SavingsFormStep1 from './components/SavingsFormStep1';
import SavingsFormStep2 from './components/SavingsFormStep2';


function App() {
  const [language, setLanguage] = useState('EN');
 
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage); // Update the language state
  };

  return (
    <BrowserRouter>
        <Header language={language} onLanguageChange={handleLanguageChange} />
      
        {/* <Home /> */}
      
        <div className="container mt-5">
        <h2>Gráfico de Torta</h2>
        <PieChart />

        <h2 className="mt-5">Gráfico de Barras Verticales</h2>
        <BarChart />

        <h2 className="mt-5">Gráfico de Progreso</h2>
        <HorizontalBarChart />
        </div>
        <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/step1" element={<SavingsFormStep1 />} />
				<Route path="/step2/:type" element={<SavingsFormStep2 />} />
			</Routes>

     
      <Footer />
  </BrowserRouter>
  );
}
export default App;
