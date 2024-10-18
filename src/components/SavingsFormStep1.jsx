import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { setSavingsType } from '../redux/slices/savingsSlice';
import { useNavigate } from 'react-router-dom';
import { OkFingerIcon, BulbChargingIcon, MoneySavingJarIcon, CustomizeIcon } from 'hugeicons-react'; // Importa los íconos necesarios
import '../style/SavingsFormStep1.css';

const SavingsFormStep1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const savingsOptions = [
    { id: 'facil', label: 'Fácil' },
    { id: 'moderado', label: 'Inteligente' },
    { id: 'extremo', label: 'Extremo' },
    { id: 'personalizado', label: 'Personalizado' },
  ];

  const handleSelect = (option) => {
    dispatch(setSavingsType(option)); 
    navigate(`/step2/${option}`);
  };

  return (
    <Formik initialValues={{ savingsType: '' }} onSubmit={() => {}}>
      {() => (
        <div className="savings-form-step1">
          <h1>Elige qué tipo de ahorro te gustaría planificar</h1>
          <div className="card-container">
            {savingsOptions.map((option) => (
              <div
                key={option.id}
                className="card"
                onClick={() => handleSelect(option.id)}>
                <h3>
                  {option.label}
                  {option.id === 'facil' && (
                    <OkFingerIcon className="icon" style={{ marginLeft: '8px' }} />
                  )}
                  {option.id === 'moderado' && (
                    <BulbChargingIcon className="icon" style={{ marginLeft: '8px' }} />
                  )}
                  {option.id === 'extremo' && (
                    <MoneySavingJarIcon className="icon" style={{ marginLeft: '8px' }} />
                  )}
                  {option.id === 'personalizado' && (
                    <CustomizeIcon className="icon" style={{ marginLeft: '8px' }} />
                  )}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SavingsFormStep1;
git 