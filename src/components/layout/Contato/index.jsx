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
          <iframe
            title="Mapa de Araçatuba, SP"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4412.32726642173!2d-50.4373934!3d-21.2031737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94964325e7e4e571%3A0xf5b2b9b3d68e4b3e!2sDudan%20Barber%20Shop!5e1!3m2!1spt-BR!2sbr!4v1788267393703!5m2!1spt-BR!2sbr"
            width="600"
            height="650"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-80 w-85 md:h-125 lg:h-125 lg:w-1/2 rounded-lg shadow-lg mx-auto"
          />

          <div className="space-y-6 w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-center">Dudan Barbershop</h3>
            <div className="flex gap-6">
              <MapPinIcon className="text-brand" />
              <div>
                <p className="text-gray-400 uppercase text-sm">Endereço</p>
                <p>Rua XV de Novembro, 344 - Centro</p>
                <p>Araçatuba, SP</p>
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
