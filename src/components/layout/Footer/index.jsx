import Container from "../Container";
import Logo from "../../ui/Logo";

import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="p-10 flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div className="flex gap-8 mb-0">
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold">Flavio Barbeiro</h5>
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
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold">Dudan Barbershop</h5>
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
          <div className="flex flex-col items-center gap-2 mb-0">
            <Logo />
            <p className="text-gray-400 text-sm text-center">
              © 2023 Flavio Barbeiro. Todos os direitos reservados.
            </p>
          </div>
          <div>
            <div>
              <p className="text-sm">
                ❤️ Desenvolvido por{" "}
                <a
                  href="https://github.com/tamurafelipe"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-brand transition-colors"
                >
                  Felipe Tamura
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
