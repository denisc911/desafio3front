import { useState, useEffect } from 'react';
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP
import '../../style/chart/DebitCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importa el logo del banco (si es un archivo estático)
import bankLogo from '../../assets/hormiga.png'; 

const DebitCard = () => {
  // Estados para los datos de la tarjeta y las transacciones recientes
  const [cardData, setCardData] = useState(null); // Datos de la tarjeta
  const [recentTransactions, setRecentTransactions] = useState([]); // Transacciones recientes
  const [tips, setTips] = useState([]); // Consejos de ahorro
  const [spendingWarning, setSpendingWarning] = useState(null); // Advertencia de gastos grandes

  // Función para obtener los datos de la tarjeta desde el backend
  const fetchCardData = async () => {
    try {
      const response = await axios.get('https://tu-backend-api.com/card'); // Reemplaza con el URL real de tu API
      setCardData(response.data); // Actualiza los datos de la tarjeta con la respuesta del backend
    } catch (error) {
      console.error('Error al obtener los datos de la tarjeta:', error);
    }
  };

  // Función para obtener las transacciones recientes desde el backend
  const fetchTransactions = async () => {
    try {
      const response = await axios.get('https://tu-backend-api.com/transactions'); // Reemplaza con el URL real de tu API
      setRecentTransactions(response.data); // Actualiza las transacciones recientes con la respuesta del backend
    } catch (error) {
      console.error('Error al obtener las transacciones:', error);
    }
  };

  // useEffect para cargar los datos de la tarjeta y las transacciones cuando el componente se monte
  useEffect(() => {
    fetchCardData(); // Llama a la función para obtener los datos de la tarjeta
    fetchTransactions(); // Llama a la función para obtener las transacciones recientes
  }, []);

  // useEffect para calcular los consejos y las advertencias en base a los datos financieros
  useEffect(() => {
    if (cardData && recentTransactions.length > 0) {
      const calculateTips = () => {
        const tipsList = [];
        // Si el saldo es inferior a €500, agrega un consejo de ahorro
        if (parseFloat(cardData.balance.replace('€', '')) < 500) {
          tipsList.push("Tu saldo es bajo. Aumenta tus ahorros para mayor seguridad financiera.");
        }
        setTips(tipsList); // Actualiza los consejos de ahorro
      };

      // Verifica si alguna transacción tiene un gasto grande (superior a €100)
      const checkSpendingWarning = () => {
        if (recentTransactions.some(tx => parseFloat(tx.amount) < -100)) {
          setSpendingWarning("¡Advertencia! Has realizado grandes gastos este mes.");
        }
      };

      calculateTips(); // Calcula los consejos de ahorro
      checkSpendingWarning(); // Verifica si hay que mostrar una advertencia de gasto
    }
  }, [cardData, recentTransactions]); // Vuelve a ejecutar cuando los datos de la tarjeta o las transacciones cambian

  // Si los datos aún no se han cargado, muestra un mensaje de "Cargando..."
  if (!cardData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="debit-card">
      <div className="card-header">Perfil Financiero</div>
      <div className="card-body">
        {/* Tarjeta con los datos del usuario */}
        <div className="bank-card">
          <img src={bankLogo} alt="Bank Logo" className="card-logo" />
          <div className="bank-card-info">
            <div className="card-item">
              <span><strong>{cardData.cardNumber}</strong></span> {/* Número de la tarjeta */}
            </div>
            <div className="card-item">
              <span><strong>{cardData.cardHolder}</strong></span> {/* Titular de la tarjeta */}
            </div>
            <div className="card-item">
              <span><strong>{cardData.expiryDate}</strong> - Expiración</span> {/* Fecha de expiración */}
            </div>
          </div>
          <div className="balance-info">
            <span className="balance-amount">{cardData.balance}</span> {/* Saldo disponible */}
          </div>
        </div>

        {/* Mostrar advertencia de gastos grandes si existe */}
        {spendingWarning && (
          <div className="spending-warning">
            <h4>{spendingWarning}</h4>
          </div>
        )}

        <div className="savings-info">
          <h4>Meta de Ahorro: {cardData.savingsGoal}</h4> {/* Meta de ahorros */}
          <p>Progreso: {cardData.progress}</p> {/* Progreso hacia la meta de ahorros */}
          <div className="savings-progress-bar">
            <div className="progress" style={{ width: cardData.progress }}></div> {/* Barra de progreso */}
          </div>
        </div>

        {/* Mostrar consejos personalizados si existen */}
        {tips.length > 0 && (
          <div className="savings-tips">
            <h4>Consejos Personalizados:</h4>
            <ul>
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li> // Lista de consejos
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DebitCard;
