import Header from "../../components/layout/Header";
import Hero from "../../components/layout/Hero";
import About from "../../components/layout/About";
import Galeria from "../../components/layout/Galeria";
import Services2 from "../../components/layout/Services2";
import MidBanner from "../../components/layout/MidBanner";
import Contato from "../../components/layout/Contato";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-x-auto scroll-smooth space-y-2">
      <Header />

      <main className="space-y-2 lg:space-y-10">
        <Hero />
        <About />
        <Services2 />
        <MidBanner />
        <Galeria />
        <Contato />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
