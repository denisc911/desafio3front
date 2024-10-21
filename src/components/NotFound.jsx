
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="not-found" style={{ textAlign: 'center', padding: '20px' }}>
      <h2>404 - Page Not Found</h2>
      <FaExclamationTriangle style={{ fontSize: '50px', color: 'red' }} />
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
