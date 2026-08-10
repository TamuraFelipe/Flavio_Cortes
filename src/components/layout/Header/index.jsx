/* Layout imports */
import Container from "../../layout/Container";
import MenuMobile from "../../layout/MenuMobile";
import MenuDesktop from "../../layout/MenuDesktop";
/* UI imports */
import ButtonAgendar from "../../ui/ButtonAgendar";
import Logo from "../../ui/Logo";
const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between py-6">
          <div>
            <Logo />
          </div>

          <nav className="hidden lg:block">
            <MenuDesktop />
          </nav>
          <ButtonAgendar variant="header" />
          <MenuMobile />
        </div>
      </Container>
    </header>
  );
};

export default Header;
