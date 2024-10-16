import React from "react";
import { Link } from "react-router-dom";
import EdResources from "./extresources/EdResources";
import SavingsFormStep1 from "./SavingsFormStep1";
import ChartsCarousel from "./charts/ChartsCarousel";
import SavingsSettings from "./SavingsSettings";


const Home = () => {
  return (
    <section className="bg-light text-dark p-5">
      <div className="container">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/ed-resources">Educational Resources</Link></li>
            </ul>
          </nav>
        </header>
        <h2>Welcome to Kutxabank</h2>
        <p>
          <ChartsCarousel />
          <SavingsSettings />
        </p>
      </div>
    </section>
  );
};

export default Home;