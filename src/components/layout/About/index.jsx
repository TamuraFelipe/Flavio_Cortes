import Container from "../Container";
import SectionTitle from "../../ui/SectionTitle";

import { GemIcon, StarIcon, ClockIcon } from "lucide-react";

import imgAbout from "../../../assets/about_1.webp";
const About = () => {
  return (
    <section id="sobre">
      <Container>
        <SectionTitle title="Sobre" />
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <img
            src={imgAbout}
            alt="Imagem de um cadeira de barbeiro no meio de um salão"
            className="w-full lg:w-[50%]"
          />
          <div className="space-y-6">
            <h2 class="text-3xl md:text-4xl lg:text-6xl font-bold">
              SEU ESTILO, <br />
              SUA IDENTIDADE.
            </h2>
            <p className="text-sm lg:text-base">
              Aqui, cada detalhe importa. Do corte ao acabamento, o foco é o seu
              estilo e sua personalidade.
              <br />
              Ambiente moderno, descontraído e feito para você se sentir à
              vontade.
            </p>

            <div className="flex items-center justify-between lg:justify-start lg:gap-10">
              <div className="about-skills">
                <StarIcon className="about-skills__icons" />
                <span className="text-center text-sm lg:text-base">
                  Atendimento <br /> Personalizado
                </span>
              </div>
              <div className="about-skills">
                <ClockIcon size={40} className="about-skills__icons" />
                <span className="text-center text-sm lg:text-base">
                  Pontualidade e <br /> Compromisso
                </span>
              </div>
              <div className="about-skills">
                <GemIcon size={40} className="about-skills__icons" />
                <span className="text-center text-sm lg:text-base">
                  Foco em <br /> Qualidade
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
