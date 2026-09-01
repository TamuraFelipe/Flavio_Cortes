import Container from "../../layout/Container";
import SectionTitle from "../../ui/SectionTitle";

import { MapPinIcon, PhoneIcon, ClockIcon } from "lucide-react";

const Contato = () => {
  return (
    <Container>
      <div id="contato">
        <SectionTitle title="Contato" />

        <div className="flex gap-8">
          <iframe
            title="Mapa de Araçatuba, SP"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14840.978382882513!2d-50.4562258435346!3d-21.205784252921845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949644777aaaf101%3A0xe8b1a2cfce0a1d27!2zQXJhw6dhdHViYSwgU1A!5e1!3m2!1spt-BR!2sbr!4v1788265172676!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-96 rounded-lg shadow-lg"
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
                <p className="text-brand font-bold">(18) 98173-1609</p>
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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contato;
