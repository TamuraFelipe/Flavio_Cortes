import Container from "../Container";
import ButtonAgendarSpecial from "../../ui/ButtonAgendarSpecial";

import midBannerImg from "../../../assets/mid-banner.webp";
import logoDudan from "../../../assets/dudan_barbershop-logo.jpg"; // <-- Descomente e ajuste o caminho da logo

const MidBanner = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24 mb-0">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <img
          src={midBannerImg}
          alt="Ambiente Barbearia Dudan Barber Shop"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/80 to-black/60" />
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 text-center lg:text-left">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Pronto para uma <br className="hidden sm:inline" />
              <span className="text-brand">nova experiência?</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-light">
              Atendendo na renomada{" "}
              <strong className="text-white font-semibold">
                Dudan Barber Shop - Araçatuba/SP
              </strong>
              , unimos a tradição do corte clássico com a sofisticação da
              barbearia moderna. Um espaço de alto padrão, estrutura premium e
              ambiente pensado para você relaxar enquanto renova seu visual com
              quem entende de verdade do assunto.
            </p>

            <div className="h-0.5 w-24 bg-linear-to-r from-brand to-transparent mx-auto lg:mx-0" />

            <div className="pt-2 flex justify-center lg:justify-start">
              <ButtonAgendarSpecial />
            </div>
          </div>

          <div className="flex items-center justify-center shrink-0">
            <div className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-neutral-800/80 shadow-2xl">
              <img
                src={logoDudan} // <-- Coloque a variável da logo aqui
                alt="Logo Dudan Barber Shop"
                className="w-40 sm:w-48 lg:w-56 h-auto object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MidBanner;
