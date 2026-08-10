/* Layout imports */
import Header from "../../components/layout/Header";
import Hero from "../../components/layout/Hero";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-x-auto scroll-smooth space-y-2 lg:space-y-8">
      <Header />

      <main className="space-y-2 lg:space-y-8">
        <Hero />
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Home;
