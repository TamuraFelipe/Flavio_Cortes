import { Container } from "../../components/Container";
import { MenuIcon } from "lucide-react";
const Home = () => {
  return (
    <div className="h-screen w-screen overflow-x-auto scroll-smooth space-y-8">
      <header>
        <Container>
          <div>
            <img src="path/to/image.jpg" alt="Description" sizes="" srcset="" />
          </div>
          <nav className="lg:block hidden">
            <ul>
              <li>Home</li>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Galeria</li>
              <li>Contato</li>
            </ul>
          </nav>
          <button>Agendar horário</button>
          <div className="lg:hidden block">
            <MenuIcon />
          </div>
        </Container>
      </header>

      <main className="space-x-8">
        <p>content</p>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Home;
