import { useState, useEffect } from 'react';
import '../../style/chart/DebitCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import bankLogo from '../../assets/logo-Kutxabank.svg';
import antImage from '/src/assets/hormiga.png'; 

const DebitCard = () => {
  const [cardData, setCardData] = useState(null);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [tips, setTips] = useState([]);
  const [spendingWarning, setSpendingWarning] = useState(null);

  const fetchCardData = () => {
    const fakeCardData = {
      cardNumber: '1234 5678 9012 3456',
      cardHolder: 'Juan Pérez',
      expiryDate: '12/24',
      balance: '€450',
      savingsGoal: '€1000',
      progress: '45%',
    };
    setCardData(fakeCardData);
  };

  const fetchTransactions = () => {
    const fakeTransactions = [
      { id: 1, amount: '-50', description: 'Grocery store purchase' },
      { id: 2, amount: '-120', description: 'Rent payment' },
      { id: 3, amount: '-30', description: 'Restaurant dinner' },
    ];
    setRecentTransactions(fakeTransactions);
  };

  useEffect(() => {
    fetchCardData();
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (cardData && recentTransactions.length > 0) {
      const tipsList = [];
      if (parseFloat(cardData.balance.replace('€', '')) < 500) {
        tipsList.push("Your balance is low. Consider saving more to improve your financial security.");
      }
      setTips(tipsList);

      if (recentTransactions.some(tx => parseFloat(tx.amount) < -100)) {
        setSpendingWarning("Warning! You have made large expenses this month.");
      }
    }
  }, [cardData, recentTransactions]);

  if (!cardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="debit-card">
      <img src={antImage} alt="Ant" className="ant" /> {/* Размещаем муравья здесь */}
      <div className="card-header">Financial Profile</div>
      <div className="card-body">
        <div className="bank-card">
          <img src={bankLogo} alt="Bank Logo" className="card-logo" />
          <div className="bank-card-info">
            <div className="card-item">
              <span><strong>{cardData.cardNumber}</strong></span>
            </div>
            <div className="card-item">
              <span><strong>{cardData.cardHolder}</strong></span>
            </div>
            <div className="card-item">
              <span><strong>{cardData.expiryDate}</strong> - Expiration</span>
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
          <h4>Savings Goal: {cardData.savingsGoal}</h4>
          <p>Progress: {cardData.progress}</p>
          <div className="savings-progress-bar">
            <div className="progress" style={{ width: cardData.progress }}></div>
          </div>
        </div>

        {tips.length > 0 && (
          <div className="savings-tips">
            <h4>Personalized Tips:</h4>
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
