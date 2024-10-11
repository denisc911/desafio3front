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
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {items.map((item, index) => (
            <div className="col mb-4" key={index}>
              <div className="card h-100">
                <img
                  src={item.imageUrl}
                  className="card-img-top btn btn-link p-0"
                  alt={item.title}
                  onClick={() => handleClick(item)}
                />
                <div className="card-body">
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isMobile && (
        <ul className="list-group">
          {items.map((item, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              <div className="me-3">
                <p className="mb-1">{item.description}</p>
              </div>
              <img
                src={item.imageUrl}
                className="img-thumbnail btn btn-link p-0"
                alt={item.title}
                onClick={() => handleClick(item)}
                style={{ width: '100px' }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EdResources;
