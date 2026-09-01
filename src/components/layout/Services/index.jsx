import SectionTitle from "../../ui/SectionTitle";
import Container from "../../layout/Container";

import corteImg from "../../../assets/corte.webp";
import barbaImg from "../../../assets/barba.webp";
import sobrancelhaImg from "../../../assets/sobrancelha.webp";
import pezinhoImg from "../../../assets/pezinho.webp";
import pomadaImg from "../../../assets/pomada.webp";
import gelImg from "../../../assets/gel.webp";

const services = [
  {
    name: "Corte",
    description:
      "Cortes de cabelo masculinos e femininos, incluindo cortes clássicos, modernos e personalizados.",
    price: "R$ 30,00",
    img: corteImg,
  },
  {
    name: "Barba",
    description:
      "Serviço de barbearia, incluindo aparar, modelar e cuidar da barba.",
    price: "R$ 30,00",
    img: barbaImg,
  },
  {
    name: "Sobrancelha",
    description:
      "Design e modelagem de sobrancelhas, incluindo depilação e tintura.",
    price: "R$ 10,00",
    img: sobrancelhaImg,
  },
  {
    name: "Pézinho",
    description:
      "Serviço de cuidados com os pés, incluindo corte de unhas, hidratação e massagem.",
    price: "R$ 10,00",
    img: pezinhoImg,
  },
  {
    name: "Pomada",
    description:
      "Pomada para modelar e fixar o cabelo, proporcionando estilo e controle.",
    price: "R$ 30,00",
    img: pomadaImg,
  },
  {
    name: "Gel Cola",
    description:
      "Gel para fixar penteados e manter o cabelo no lugar durante todo o dia.",
    price: "R$ 20,00",
    img: gelImg,
  },
];

const Services = () => {
  return (
    <Container>
      <div id="servicos">
        <SectionTitle title="Serviços & Produtos" />
        <div className="grid grid-cols-6 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded shadow relative max-h-75 overflow-hidden"
            >
              <img src={service.img} alt={service.name} className="w-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent text-white p-6">
                <h3 className="text-2xl font-bold text-brand">
                  {service.name}
                </h3>
                <p className="text-lg font-semibold">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Services;
