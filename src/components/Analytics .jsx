import { useState, useEffect } from 'react';

const SpendingAnalytics = () => {
  const [spendingData, setSpendingData] = useState({
    categories: ['Restaurantes', 'Supermercado', 'Transporte', 'Entretenimiento'],
    amounts: [200, 400, 100, 150], // Example data
  });

  const calculateTotalSpending = () => {
    return spendingData.amounts.reduce((acc, amount) => acc + amount, 0);
  };

  return (
    <div className="spending-analytics">
      <h3>Resumen de Gastos</h3>
      <ul>
        {spendingData.categories.map((category, index) => (
          <li key={index}>
            {category}: €{spendingData.amounts[index]}
          </li>
        ))}
      </ul>
      <h4>Total Gastado: €{calculateTotalSpending()}</h4>
    </div>
  );
};

export default SpendingAnalytics;
