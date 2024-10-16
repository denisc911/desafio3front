// src/components/Footer.js
import '../style/chart/Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white text-center p-4">
        <div className="container">
          <p>&copy; 2024  © Kutxabank. All Rights Reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#privacy" className="text-white">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="#terms" className="text-white">Terms of Service</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
