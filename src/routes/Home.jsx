import ChartsCarousel from "../components/charts/ChartsCarousel";
import SavingsSettings from "../components/charts/SavingsFormStep1";
import DebitCard from "../components/home/DebitCard";

const Home = () => {
  return (
    <main className="bg-light text-dark p-5">
      <DebitCard />
      <div className="container">
        <p>
          <ChartsCarousel />
          <SavingsSettings />
        </p>
      </div>
    </main>
  );
};

export default Home;