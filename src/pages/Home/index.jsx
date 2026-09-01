/* Layout imports */
import Header from "../../components/layout/Header";
import Hero from "../../components/layout/Hero";
import About from "../../components/layout/About";
//import Services from "../../components/layout/Services";
import Galeria from "../../components/layout/Galeria";
import Services2 from "../../components/layout/Services2";
//import MidBanner from "../../components/layout/MidBanner";
import Contato from "../../components/layout/Contato";

import Container from "../../components/layout/Container";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-x-auto scroll-smooth space-y-2 lg:space-y-8">
      <Header />

      <main className="space-y-2 lg:space-y-10">
        <Hero />
        <About />
        <Services2 />
        {/* <Services /> */}
        <Galeria />
        {/* <MidBanner /> */}
        <Contato />
      </main>

      <footer className="bg-black text-white">
        <Container>
          <p className="text-center p-10">Footer</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
