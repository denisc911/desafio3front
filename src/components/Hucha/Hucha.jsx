import React from 'react';
import '../../style/Hucha/Hucha.css';

const Hucha = () => {
  return (
    <>
      <div className="crearHucha">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" />
        </svg>
        <p className="titularHucha">Ahorros</p>
      </div>

      <form action="/action_page.php">
        <p>¿Cuánto quieres para ahorrar?</p>
        <input type="range" className="points" />
      </form>
    </>
  );
};

export default Hucha;
