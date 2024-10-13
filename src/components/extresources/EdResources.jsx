import './CardComponent.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';

const EdResources = ({ items, handleClick }) => {
  // Define breakpoints para móvil y escritorio
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <div className="container mt-4">
      {isDesktop && (
        <div className="row">
          {items.map((item, index) => (
            <div className="col" key={index}>
              <a href={item.link} className="card resource-card">
                <div className="card-body text-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="resource-image"
                    onClick={() => handleClick(item)}
                  />
                  <h5 className="card-title mt-3">
                    <strong>{item.title}</strong>
                  </h5>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}

      {isMobile && (
        <ul className="list-group">
          {items.map((item, index) => (
            <li className="list-group-item" key={index}>
              <a href={item.link}>
                <div className="text-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="resource-image"
                    onClick={() => handleClick(item)}
                  />
                  <p className="mt-2">
                    <strong>{item.title}</strong>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EdResources;
