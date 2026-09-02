import Container from "../Container";
import SectionTitle from "../../ui/SectionTitle";

import corte01Img from "../../../assets/corte_01.jpeg";
import corte02Img from "../../../assets/corte_02.jpeg";
import corte03Img from "../../../assets/corte_03.jpeg";
import corte04Img from "../../../assets/corte_04.jpeg";
import corte05Img from "../../../assets/corte_05.jpeg";
import corte06Img from "../../../assets/corte_06.jpeg";

const galeria = [
  {
    id: 1,
    imgUrl: corte01Img,
    description: "Corte com degradê e desenho lateral",
  },
  {
    id: 2,
    imgUrl: corte02Img,
    description: "Corte com degradê",
  },
  {
    id: 3,
    imgUrl: corte03Img,
    description: "Corte com moicano estilizado",
  },
  {
    id: 4,
    imgUrl: corte04Img,
    description: "Corte com desenho lateral",
  },
  {
    id: 5,
    imgUrl: corte05Img,
    description: "Corte com degradê e desenho lateral",
  },
  {
    id: 6,
    imgUrl: corte06Img,
    description: "Corte com degradê",
  },
  {
    id: 7,
    imgUrl: corte04Img,
    description: "Corte com moicano estilizado",
  },
  {
    id: 8,
    imgUrl: corte03Img,
    description: "Corte com desenho lateral",
  },
];
const Galeria = () => {
  return (
    <section className="w-full bg-black py-8 lg:py-8" id="galeria">
      <Container>
        <SectionTitle title="Galeria" />
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {galeria.map((item) => (
            <img
              key={item.id}
              src={item.imgUrl}
              alt={item.description}
              className="max-w-40 lg:max-w-50 max-h-75 object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Galeria;
