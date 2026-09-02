import Container from "../../layout/Container";
import SectionTitle from "../../ui/SectionTitle";
import ButtonAgendarSpecial from "../../ui/ButtonAgendarSpecial";

import { FaInstagram } from "react-icons/fa";

import { MapPinIcon, PhoneIcon, ClockIcon, ThumbsUpIcon } from "lucide-react";

const Contato = () => {
  return (
    <Container>
      <div id="contato">
        <SectionTitle title="Contato" />

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <a
            href="https://maps.app.goo.gl/pjMtXxgb8SYekdqV7"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-80 w-85 md:h-125 lg:h-125 lg:w-1/2 rounded-lg shadow-lg mx-auto overflow-hidden relative group"
          >
            <img
              src="/mapa-preview.webp"
              alt="Localização Dudan Barber Shop em Araçatuba, SP"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute bottom-4 left-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded-md font-medium">
              Ver no Google Maps ↗
            </span>
          </a>

          <div className="space-y-6 w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-center">Dudan Barbershop</h3>
            <div className="flex gap-6">
              <MapPinIcon className="text-brand" />
              <div>
                <p className="text-gray-400 uppercase text-sm">Endereço</p>
                <p>Rua XV de Novembro, 344 - Centro</p>
                <p>Araçatuba, SP - 16010-030</p>
              </div>
            </div>
            <div className="flex gap-6">
              <PhoneIcon className="text-brand" />
              <div>
                <p className="text-gray-400 uppercase text-sm">Telefone</p>
                <p className="font-bold">(18) 98173-1609</p>
              </div>
            </div>
            <div className="flex gap-6">
              <ClockIcon className="text-brand" />
              <div>
                <p className="text-gray-400 uppercase text-sm">
                  Horário de Atendimento
                </p>
                <p>
                  Segunda a Sexta:{" "}
                  <span className="text-brand font-bold">8h às 19h</span>
                </p>
                <p>
                  Sábado:{" "}
                  <span className="text-brand font-bold">8h às 19h</span>
                </p>
                <p>
                  Domingo: <span className="text-brand font-bold">Fechado</span>
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <ThumbsUpIcon className="text-brand" />
              <div>
                <p className="text-gray-400 uppercase text-sm">Redes Sociais</p>
                <p className="flex items-center gap-2">
                  <FaInstagram style={{ color: "#b08d57" }} />{" "}
                  <a
                    href="https://www.instagram.com/tamuraflavio/"
                    target="_blank"
                    rel="noreferrer"
                    className=" hover:text-brand transition-colors"
                  >
                    @tamuraflavio
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <FaInstagram style={{ color: "#b08d57" }} />{" "}
                  <a
                    href="https://www.instagram.com/dudanbarbearia/"
                    target="_blank"
                    rel="noreferrer"
                    className=" hover:text-brand transition-colors"
                  >
                    @dudanbarbearia
                  </a>
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <ButtonAgendarSpecial />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contato;
