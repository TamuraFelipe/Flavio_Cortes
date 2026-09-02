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
            className="w-full lg:w-[50%] lg:h-90"
          />
          <div className="space-y-6">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
              Muito além de <br />
              Um simples corte.
            </h2>
            <p className="text-sm lg:text-base leading-relaxed text-neutral-300">
              Aqui você não vem apenas cortar o cabelo ou alinhar a barba — vem
              para dar uma pausa na rotina. <br /> Trabalhamos cada detalhe com
              atenção máxima para você sair com a autoestima renovada em um
              ambiente feito para se sentir em casa.
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
