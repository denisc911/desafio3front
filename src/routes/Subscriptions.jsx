import {
  LeftOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { Card, Switch } from 'antd';
import '../style/subscriptions/Subscriptions.css';
import LayoutContent from '../components/LayoutContent';
import React, { useState } from 'react';

const Subscriptions = () => {
  // Estado para el contador
  const [counter, setCounter] = useState(1200);
  const [counter2, setCounter2] = useState(100);

  // Función que maneja el cambio de cada switch
  const handleSwitchChange = (value, checked) => {
    // Si el switch se activa, incrementa el contador por el valor indicado
    if (checked) {
      setCounter((prevCounter) => prevCounter + value);
      setCounter2((prevCounter) => prevCounter + value);
    } else {
      // Si el switch se desactiva, decrementa el contador por el valor indicado
      setCounter((prevCounter) => prevCounter - value);
      setCounter2((prevCounter) => prevCounter - value);
    }
  };

  return (
    <>
      <LayoutContent>
        <div className="titleContainer">
          <LeftOutlined className="icons" />
          <p className="title">Control de Subscripciones</p>
          <SettingOutlined />
        </div>

        <h1 className="titleBody">Control de Subscripciones</h1>
        <h2 className="subtitleBody">Gestiona y optimiza tus subscripciones</h2>
        <Card className="card">
          <div className="cardContent">
            <b>Gasto anual estimado</b>
            <p>{counter}€</p>
          </div>
        </Card>
        <Card className="card">
          <div className="cardContent">
            <b>Gasto mensual estimado</b>
            <p>{counter2}€</p>
          </div>
        </Card>

        <h1 className="titleBody">Subscripciones anuales</h1>
        <Card className="card">
          <div className="cardContent">
            <p>
              <InfoCircleOutlined className="iconInfoSubs" />
              Spotify
            </p>
            <p>
              10€
              <Switch
                type="checkbox"
                onChange={(checked) => handleSwitchChange(10, checked)}
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
            </p>
          </div>
        </Card>
        <Card className="card">
          <div className="cardContent">
            <p>
              <InfoCircleOutlined className="iconInfoSubs" />
              Netflix
            </p>
            <p>
              15€
              <Switch
                type="checkbox"
                onChange={(checked) => handleSwitchChange(15, checked)}
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
            </p>
          </div>
        </Card>
        <Card className="card">
          <div className="cardContent">
            <p>
              <InfoCircleOutlined className="iconInfoSubs" />
              Amazon Prime
            </p>
            <p>
              5€
              <Switch
                type="checkbox"
                onChange={(checked) => handleSwitchChange(5, checked)}
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
            </p>
          </div>
        </Card>
        <h1 className="titleBody">Simulación de Ahorro Anual</h1>
        <p>
          Selecciona las suscripciones que quieres activar o desactivar para ver
          tu ahorro anual estimado. Esta herramienta te permitirá optimizar tus
          gastos y ahorrar dinero al eliminar suscripciones innecesarias.
        </p>
      </LayoutContent>
    </>
  );
};

export default Subscriptions;
