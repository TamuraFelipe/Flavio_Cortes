import Container from "../Container";
import Logo from "../../ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="p-10 flex flex-col lg:flex-row gap-10 items-center justify-center">
          <div className="flex flex-col items-center gap-4 mb-0">
            <Logo />
            <p className="text-gray-400 text-sm text-center">
              © 2026 Flavio Cortes. Todos os direitos reservados.
            </p>
            <p className="text-sm">
              Desenvolvido por{" "}
              <a
                href="https://github.com/tamurafelipe"
                target="_blank"
                rel="noreferrer"
                className="text-white font-semibold hover:text-brand transition-colors"
              >
                Felipe Tamura
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
