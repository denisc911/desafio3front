import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import PieChart from './components/charts/PieChart';
import BarChart from './components/charts/BarChart';
import HorizontalBarChart from './components/charts/HorizontalBarChart';
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
      
      <div className="container mt-5">
        <h2>Gráfico de Torta</h2>
        <PieChart />

        <h2 className="mt-5">Gráfico de Barras Verticales</h2>
        <BarChart />

        <h2 className="mt-5">Gráfico de Progreso</h2>
        <HorizontalBarChart />
      </div>

      <Footer />
    </div>
  );
}

export default App;
