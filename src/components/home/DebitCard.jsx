import { useState, useEffect } from 'react';
import '../../style/chart/DebitCard.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

// Импорт логотипа
import bankLogo from '../../assets/logo-Kutxabank.svg'; 

const DebitCard = () => {
  const [tips, setTips] = useState([]); // Советы по сбережениям
  const [spendingWarning, setSpendingWarning] = useState(null); // Предупреждение о больших расходах

  // Данные карты с финансовой информацией
  const cardData = {
    cardNumber: '**** **** **** 1234',
    cardHolder: 'Juan Pérez',
    expiryDate: '12/25',
    balance: '€2,500',
    savingsGoal: '€5,000', // Цель по сбережениям
    progress: '50%', // Прогресс к цели сбережений
  };

  // Пример недавних транзакций
  const recentTransactions = [
    { date: '01/10/2024', amount: '-€50', description: 'Restaurante' },
    { date: '30/09/2024', amount: '-€120', description: 'Supermercado' },
    { date: '28/09/2024', amount: '-€30', description: 'Transporte' },
  ];

  // Эффект для вычисления советов и предупреждений на основе финансовых данных
  useEffect(() => {
    const calculateTips = () => {
      const tipsList = [];
      if (parseFloat(cardData.balance.replace('€', '')) < 500) {
        tipsList.push("Tu saldo es bajo. Aumenta tus ahorros para mayor seguridad financiera.");
      }
      setTips(tipsList);
    };

    const checkSpendingWarning = () => {
      if (recentTransactions.some(tx => parseFloat(tx.amount) < -100)) {
        setSpendingWarning("¡Advertencia! Has realizado grandes gastos este mes.");
      }
    };

    calculateTips();
    checkSpendingWarning();
  }, [cardData, recentTransactions]);

  return (
    <div className="debit-card">
      <div className="card-header">Perfil Financiero</div>
      <div className="card-body">
        {/* Карта с данными пользователя */}
        <div className="bank-card">
          <img src={bankLogo} alt="Bank Logo" className="card-logo" />
          <div className="bank-card-info">
            <div className="card-item">
              <span><strong>{cardData.cardNumber}</strong> </span>
            </div>
            <div className="card-item">
              <span><strong>{cardData.cardHolder}</strong> </span>
            </div>
            <div className="card-item">
              <span><strong>{cardData.expiryDate}</strong> - Expiración</span>
            </div>
          </div>
          <div className="balance-info">
            <span className="balance-amount">{cardData.balance}</span>
          </div>
        </div>

        {spendingWarning && (
          <div className="spending-warning">
            <h4>{spendingWarning}</h4>
          </div>
        )}

        <div className="savings-info">
          <h4>Meta de Ahorro: {cardData.savingsGoal}</h4>
          <p>Progreso: {cardData.progress}</p>
          <div className="savings-progress-bar">
            <div className="progress" style={{ width: cardData.progress }}></div>
          </div>
        </div>

        {tips.length > 0 && (
          <div className="savings-tips">
            <h4>Consejos Personalizados:</h4>
            <ul>
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DebitCard;
