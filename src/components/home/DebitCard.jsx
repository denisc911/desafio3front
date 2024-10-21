import { useState, useEffect } from 'react'; // Import the useState and useEffect hooks
import '../../style/chart/DebitCard.css'; // Import the CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome icons

// Import a static image for the bank logo
import bankLogo from '../../assets/logo-Kutxabank.svg'; 
const DebitCard = () => {
  // States for storing card data, recent transactions, tips, and spending warnings
  const [cardData, setCardData] = useState(null); // State for card information
  const [recentTransactions, setRecentTransactions] = useState([]); // State for recent transactions
  const [tips, setTips] = useState([]); // State for personalized tips
  const [spendingWarning, setSpendingWarning] = useState(null); // State for large spending warnings

  // Simulate fetching card data (normally it would come from an API)
  const fetchCardData = () => {
    // Simulated data for the demo
    const fakeCardData = {
      cardNumber: '1234 5678 9012 3456',
      cardHolder: 'Juan Pérez',
      expiryDate: '12/24',
      balance: '€450',
      savingsGoal: '€1000',
      progress: '45%'
    };
    setCardData(fakeCardData); // Update the state with the simulated card data
  };

  // Simulate fetching recent transactions (normally it would come from an API)
  const fetchTransactions = () => {
    // Simulated transaction data
    const fakeTransactions = [
      { id: 1, amount: '-50', description: 'Grocery store purchase' },
      { id: 2, amount: '-120', description: 'Rent payment' },
      { id: 3, amount: '-30', description: 'Restaurant dinner' },
    ];
    setRecentTransactions(fakeTransactions); // Update the state with the simulated transactions
  };

  // useEffect to load the simulated data when the component mounts
  useEffect(() => {
    fetchCardData(); // Call the function to get the card data
    fetchTransactions(); // Call the function to get recent transactions
  }, []);

  // useEffect to calculate tips and warnings based on financial data
  useEffect(() => {
    if (cardData && recentTransactions.length > 0) {
      const calculateTips = () => {
        const tipsList = [];
        // If the balance is lower than €500, show a savings tip
        if (parseFloat(cardData.balance.replace('€', '')) < 500) {
          tipsList.push("Your balance is low. Consider saving more to improve your financial security.");
        }
        setTips(tipsList); // Update the state with personalized tips
      };

      // Check if any transaction is a large expense (greater than €100)
      const checkSpendingWarning = () => {
        if (recentTransactions.some(tx => parseFloat(tx.amount) < -100)) {
          setSpendingWarning("Warning! You have made large expenses this month.");
        }
      };

      calculateTips(); // Calculate tips based on the data
      checkSpendingWarning(); // Check if there is a large spending warning
    }
  }, [cardData, recentTransactions]); // Re-run when card data or transactions change

  // If the card data hasn't been loaded yet, show a loading message
  if (!cardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="debit-card">
    <div className="ant-container">
      <img src="/src/assets/hormiga.png" alt="Ant" className="ant" />
    
    </div>
    <div className="debit-card">
      <div className="card-header">Financial Profile</div>
      <div className="card-body">
        {/* Section displaying the bank card */}
        <div className="bank-card">
          <img src={bankLogo} alt="Bank Logo" className="card-logo" /> {/* Bank logo */}
          <div className="bank-card-info">
            <div className="card-item">
              <span><strong>{cardData.cardNumber}</strong></span> {/* Card number */}
            </div>
            <div className="card-item">
              <span><strong>{cardData.cardHolder}</strong></span> {/* Cardholder name */}
            </div>
            <div className="card-item">
              <span><strong>{cardData.expiryDate}</strong> - Expiration</span> {/* Expiration date */}
            </div>
          </div>
          <div className="balance-info">
            <span className="balance-amount">{cardData.balance}</span> {/* Available balance */}
          </div>
        </div>

        {/* Display large spending warning if present */}
        {spendingWarning && (
          <div className="spending-warning">
            <h4>{spendingWarning}</h4>
          </div>
        )}

        {/* Savings goal and progress bar */}
        <div className="savings-info">
          <h4>Savings Goal: {cardData.savingsGoal}</h4> {/* Savings goal */}
          <p>Progress: {cardData.progress}</p> {/* Progress toward the goal */}
          <div className="savings-progress-bar">
            <div className="progress" style={{ width: cardData.progress }}></div> {/* Progress bar */}
          </div>
        </div>

        {/* Display personalized tips if available */}
        {tips.length > 0 && (
          <div className="savings-tips">
            <h4>Personalized Tips:</h4>
            <ul>
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li> // Display each tip in a list
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default DebitCard;
