// components/Home.js
import Form from '../components/Form'
import SavingsFormStep1 from './SavingsFormStep1';

const Home = () => {
  return (
    <section className="bg-light text-dark p-5">
      <div className="container">
        <h2>Welcome to Kutxabank</h2>

        <SavingsFormStep1 />
       
      </div>
    </section>
  );
};

export default Home;
