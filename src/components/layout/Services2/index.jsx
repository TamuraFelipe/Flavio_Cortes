import SectionTitle from "../../ui/SectionTitle";
import Container from "../../layout/Container";

import corteImg from "../../../assets/corte.webp";
import barbaImg from "../../../assets/barba.webp";
import sobrancelhaImg from "../../../assets/sobrancelha.webp";
import pezinhoImg from "../../../assets/pezinho.webp";
import pomadaImg from "../../../assets/pomada.webp";
import gelImg from "../../../assets/gel.webp";

import ButtonAgendarSpecial from "../../ui/ButtonAgendarSpecial";

const services = [
  {
    name: "Corte",
    description:
      "Cortes de cabelo masculinos e femininos, incluindo cortes clássicos, modernos e personalizados.",
    price: "R$30",
    img: corteImg,
    mostPopular: true,
  },
  {
    name: "Barba",
    description:
      "Serviço de barbearia, incluindo aparar, modelar e cuidar da barba.",
    price: "R$30",
    img: barbaImg,
    mostPopular: false,
  },
  {
    name: "Sobrancelha",
    description:
      "Design e modelagem de sobrancelhas, incluindo depilação e tintura.",
    price: "R$10",
    img: sobrancelhaImg,
    mostPopular: false,
  },
  {
    name: "Pézinho",
    description:
      "Serviço de cuidados com os pés, incluindo corte de unhas, hidratação e massagem.",
    price: "R$10",
    img: pezinhoImg,
    mostPopular: false,
  },
  {
    name: "Pomada",
    description:
      "Pomada para modelar e fixar o cabelo, proporcionando estilo e controle.",
    price: "R$30",
    img: pomadaImg,
    mostPopular: false,
  },
  {
    name: "Gel Cola",
    description:
      "Gel para fixar penteados e manter o cabelo no lugar durante todo o dia.",
    price: "R$20",
    img: gelImg,
    mostPopular: true,
  },
];

const Services2 = () => {
  return (
    <Container>
      <div id="servicos">
        <SectionTitle title="Serviços & Produtos" />
        <div className="grid grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded shadow relative max-h-75 min-h-41.5 overflow-hidden bg-black p-8 ${service.mostPopular ? "border border-brand" : "border border-gray-800"}`}
            >
              {service.mostPopular && (
                <div className="absolute top-0 right-0 bg-brand text-white px-2 py-1 text-xs font-semibold">
                  Mais Vendido
                </div>
              )}
              <div className="flex w-full items-center justify-between mb-4">
                <h4 className="uppercase">{service.name}</h4>
                <p className="font-semibold text-brand">{service.price}</p>
              </div>

              <p className="mt-2 text-sm text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <ButtonAgendarSpecial />
        </div>
      </div>
    </Container>
  );
};

export default Services2;
