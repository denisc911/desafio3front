import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { setSavingsType } from '../redux/slices/savingsSlice';
import { useNavigate } from 'react-router-dom';
import '../style/SavingsFormStep1.css'; 

const SavingsFormStep1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const savingsOptions = [
    { id: 'facil', label: 'Ahorro Fácil' },
    { id: 'moderado', label: 'Ahorro Moderado' },
    { id: 'extremo', label: 'Ahorro Extremo' },
    { id: 'personalizado', label: 'Ahorro Personalizado' },
  ];

  const handleSelect = (option) => {
    dispatch(setSavingsType(option)); // Сохраняем тип сбережений в Redux
    navigate(`/step2/${option}`); 
  };

  return (
    <Formik initialValues={{ savingsType: '' }} onSubmit={() => {}}>
      {() => (
        <div className="savings-form-step1">
          <h1>Elige qué tipo de ahorro te gustaría planificar</h1> {/* Заголовок не внутри <p> */}
          <div className="card-container">
            {savingsOptions.map((option) => (
              <div
                key={option.id}
                className="card"
                onClick={() => handleSelect(option.id)}>
                <h3>{option.label}</h3> {/* Заголовок для карточки */}
              </div>
            ))}
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SavingsFormStep1; // Экспортируем компонент
