import { useState, useEffect } from 'react';

const FinancialTips = () => {
  const [tip, setTip] = useState('');

  const tips = [
    "Ahorra al menos el 20% de tus ingresos mensuales.",
    "Revisa tus suscripciones y cancela las que no uses.",
    "Ten siempre un fondo de emergencia de al menos 3 meses.",
    "Usa apps de presupuesto para gestionar tus gastos.",
  ];

  // Randomly display a financial tip
  useEffect(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  }, []);

  return (
    <div className="financial-tips">
      <h3>Consejo Financiero del Día</h3>
      <p>{tip}</p>
    </div>
  );
};

export default FinancialTips;
