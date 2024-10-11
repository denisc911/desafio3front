// components/Home.j
import SavingsFormStep1 from './SavingsFormStep1';
import ChartsCarousel from './charts/ChartsCarousel';

const Home = () => {
  return (
    <section className="bg-light text-dark p-5">
      <div className="container">
        <h2>Welcome to Kutxabank</h2>

        <p>
          <ChartsCarousel /> 
          <SavingsFormStep1 />
          
        </p>
       
      </div>
    </section>
  );
};

export default Home;
