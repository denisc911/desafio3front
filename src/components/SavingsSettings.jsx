// src/components/SavingsSettings.jsx
import { useState } from 'react';
import '../style/chart/SavingsSettings.css';

const SavingsSettings = () => {
  const [savingPercentage, setSavingPercentage] = useState(10); // Percentage for savings
  const [fixedAmount, setFixedAmount] = useState(100); // Fixed amount for savings
  const [frequency, setFrequency] = useState('monthly'); // Frequency of savings
  const [notification, setNotification] = useState(true); // Notifications for savings
  const [goal, setGoal] = useState(''); // Savings goal
  const [goalAmount, setGoalAmount] = useState(0); // Amount for goal

  const handleSaveSettings = () => {
    // Logic to save settings
    alert('¡Configuraciones guardadas!');
  };

  return (
    <div className="savings-settings">
      <h3>Configuraciones de Ahorros</h3>

      <div className="setting-item">
        <label htmlFor="savingPercentage">Porcentaje de Ahorro del Ingreso:</label>
        <input
          type="number"
          id="savingPercentage"
          value={savingPercentage}
          onChange={(e) => setSavingPercentage(e.target.value)}
          min="0"
          max="100"
        />
      </div>

      <div className="setting-item">
        <label htmlFor="fixedAmount">Cantidad Fija para Ahorros:</label>
        <input
          type="number"
          id="fixedAmount"
          value={fixedAmount}
          onChange={(e) => setFixedAmount(e.target.value)}
          min="0"
        />
      </div>

      <div className="setting-item">
        <label htmlFor="frequency">Frecuencia de Ahorros:</label>
        <select
          id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="daily">Diariamente</option>
          <option value="weekly">Semanalmente</option>
          <option value="monthly">Mensualmente</option>
        </select>
      </div>

      <div className="setting-item">
        <label htmlFor="notification">Notificaciones sobre Ahorros:</label>
        <input
          type="checkbox"
          id="notification"
          checked={notification}
          onChange={() => setNotification(!notification)}
        />
      </div>

      <div className="setting-item">
        <label htmlFor="goal">Objetivo de Ahorro:</label>
        <input
          type="text"
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
      </div>

      <div className="setting-item">
        <label htmlFor="goalAmount">Monto del Objetivo:</label>
        <input
          type="number"
          id="goalAmount"
          value={goalAmount}
          onChange={(e) => setGoalAmount(e.target.value)}
          min="0"
        />
      </div>

      <button onClick={handleSaveSettings} className="save-settings-btn">
        Guardar Configuraciones
      </button>
    </div>
  );
};

export default SavingsSettings;
