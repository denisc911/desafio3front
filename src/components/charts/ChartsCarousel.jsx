// src/components/charts/ChartsCarousel.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import HorizontalBarChart from './HorizontalBarChart'; 
import BarChart from './BarChart'; 
import PieChart from './PieChart'; 

const ChartsCarousel = () => {
  return (
    <div id="chartsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000"> 
      <div className="carousel-inner">
        <div className="carousel-item active">
          <PieChart />
        </div>
        <div className="carousel-item">
          <BarChart />
        </div>
        <div className="carousel-item">
          <HorizontalBarChart />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#chartsCarousel" data-bs-slide="prev" >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#chartsCarousel" data-bs-slide="next" >
        <span className="carousel-control-next-icon" aria-hidden="true" style={{ backg: 'black' }}></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ChartsCarousel;

