import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import '../style/chart/FingerprintLogin.css';
import DebitCard from './DebitCard'; 

const FingerprintLogin = () => {
  const [isMobile, setIsMobile] = useState(false); 
  const [isAuthenticating, setIsAuthenticating] = useState(false); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleFingerprintScan = () => {
    setIsAuthenticating(true); 
    setTimeout(() => {
      setIsAuthenticating(false); 
      setIsAuthenticated(true); 
    }, 2000); 
  };

  return (
    <div className="fingerprint-login-container">
      {isMobile && !isAuthenticated ? (
        <div>
          <h1>Autenticación con huella dactilar</h1> {/* Encabezado que explica la acción */}
          {isAuthenticating ? (
            <div>
              <p>Escaneando tu huella, por favor espera...</p> {/* Explicación del proceso */}
              <i className="fas fa-piggy-bank fa-spin" style={{ fontSize: '39px', color: '#007A87' }}></i> 
            </div>
          ) : (
            <div>
              <p>Pulsa el ícono de la huella dactilar para iniciar sesión</p> 
              <button onClick={handleFingerprintScan} className="fingerprint-button">
                <i className="fas fa-fingerprint"></i>
              </button>
            </div>
          )}
        </div>
      ) : isAuthenticated ? (
        <div>
          <h1>¡Bienvenido !</h1> 
          <p>Has iniciado sesión con éxito.</p> 
          <DebitCard /> 
        </div>
      ) : (
        <div>
          <h1>Usa un dispositivo móvil para iniciar sesión</h1> {/* Mensaje para escritorio */}
          <p>La autenticación con huella dactilar solo está disponible en dispositivos móviles.</p> {/* Explicación para usuarios de escritorio */}
        </div>
      )}
    </div>
  );
};

export default FingerprintLogin;
