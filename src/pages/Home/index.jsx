import Container from "../../components/Container";
import MenuMobile from "../../components/MenuMobile";
import ButtonAgendar from "../../components/ButtonAgendar";
import logo from "../../assets/logo_dark.png";
const Home = () => {
  return (
    <div className="h-screen w-screen overflow-x-auto scroll-smooth space-y-8">
      <header>
        <Container>
          <div className="flex items-center justify-between py-6">
            <div>
              <img
                src={logo}
                alt="Description"
                width={100}
                height={30}
                alt="Flavio Cortes"
              />
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
            <ButtonAgendar variant="header" />

            <MenuMobile />
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
