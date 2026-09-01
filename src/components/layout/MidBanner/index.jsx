import Container from "../Container";
import ButtonAgendarSpecial from "../../ui/ButtonAgendarSpecial";

import midBannerImg from "../../../assets/mid-banner.jpg";
const MidBanner = () => {
  return (
    <section className="bg-black overflow-hidden">
      <Container>
        <div className="flex items-center justify-between max-h-[200px] w-full">
          <div className="">
            <ButtonAgendarSpecial />
          </div>
          <div className="relative max-h-[200px]">
            <div
              className="
            h-[2px]
            w-full
            bg-linear-to-r
            from-transparent
            via-[#000000]
            to-[#ffffff00]
            "
            />
            <img
              src={midBannerImg}
              alt="Banner mid"
              className="max-h-[200px] object-contain absolute top-0 right-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MidBanner;
