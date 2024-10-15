import React from 'react';
import { ArrowLeft01Icon } from 'hugeicons-react';
import '../../style/Hucha/Hucha.css';

const Hucha = () => {
  return (
    <>
      <div className="crearHucha">
        <ArrowLeft01Icon size={24} color={'#000000'} variant={'stroke'} />
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