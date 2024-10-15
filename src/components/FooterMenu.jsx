// components/FooterMenu.js
import '../style/chart/FooterMenu.css'; 

const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <div className="menu-item">
        <i className="fas fa-home"></i>
        <p>Resumen</p>
      </div>
      <div className="menu-item">
        <i className="fas fa-envelope"></i>
        <p>Buzón</p>
      </div>
      <div className="menu-item">
        <i className="fas fa-search"></i>
        <p>Explorar</p>
      </div>
      <div className="menu-item">
        <i className="fas fa-question-circle"></i>
        <p>Ayuda</p>
      </div>
      <div className="menu-item">
        <i className="fas fa-ellipsis-v"></i>
        <p>Más</p>
      </div>
    </div>
  );
};

export default FooterMenu;
