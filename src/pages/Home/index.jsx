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
import Logo from "../../components/ui/Logo";

import { FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-x-auto scroll-smooth space-y-2">
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
          <div className="p-10 flex items-center justify-between">
            <Logo />
            <p className="text-gray-400 text-sm">
              © 2023 Flavio Barbeiro. Todos os direitos reservados.
            </p>
            <div className="flex gap-8">
              <div>
                <h5 className="font-semibold mb-2">Flavio Barbeiro</h5>
                <div className="flex items-center gap-2">
                  <FaInstagram style={{ color: "#b08d57" }} />
                  <a
                    href="https://www.instagram.com/tamuraflavio/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-brand transition-colors"
                  >
                    @tamuraflavio
                  </a>
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Dudan Barbershop</h5>
                <div className="flex items-center gap-2">
                  <FaInstagram style={{ color: "#b08d57" }} />
                  <a
                    href="https://www.instagram.com/dudanbarbearia/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-brand transition-colors"
                  >
                    @dudanbarbearia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
