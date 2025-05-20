import SectionHeading from "./common/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { forwardRef } from "react";

import Sauna from "@/app/assets/sauna-barrel.jpg";
import Incense from "@/app/assets/insence.jpg";
import Forrest from "@/app/assets/forrest.jpg";
import Oils from "@/app/assets/oils-2.jpg";

const ImageLinkSection = forwardRef((props, ref) => {
  const { showAll = true } = props;

  const linkStyling = `aspect-5/2 sm:aspect-3/2 ${showAll ? "md:aspect-3/4" : "md:aspect-1/1"}  group relative grid overflow-hidden rounded-lg`;
  const imageStyling =
    "absolute duration-400 h-full w-full scale-110 object-cover transition-all group-hover:scale-100";
  const overlayStyling =
    "gradient-bottom-top absolute bottom-0 left-0 h-full w-full";
  const textStyling =
    "col-1 row-1 flex-center m-s text-background relative z-50 mt-auto text-[1.2rem] md:text-[1rem] lg:text-[1.2rem] font-normal";
  const svgStyling = "duration-400 transition-all group-hover:-mr-0.5";

  return (
    <section className={`section ${showAll ? "front-section" : ""}`} ref={ref}>
      <SectionHeading
        heading="Oplev veje til dybere balance"
        copy="Hos Moons finder du en række holistiske tilbud, der alle har ét fælles mål: at støtte dig i at skabe ro, forankring og fornyet kontakt til din krop og sjæl."
      />
      <div
        className={`gap-m mt-m grid grid-cols-1 sm:grid-cols-2 ${showAll ? "md:grid-cols-4" : "md:grid-cols-3"} `}
      >
        {showAll && (
          <Link href="/saunagus" className={linkStyling}>
            <Image src={Sauna} alt="sauna" className={imageStyling} />
            <div className={overlayStyling}></div>
            <div className={textStyling}>
              Saunagus
              <Image
                src="/icons/arrow-right.svg"
                alt="Logo"
                width={22}
                height={22}
                className={svgStyling}
              />
            </div>
          </Link>
        )}

        <Link href="/terapi/traumeterapi" className={linkStyling}>
          <Image src={Incense} alt="incense" className={imageStyling} />
          <div className={overlayStyling}></div>
          <div className={textStyling}>
            Traumeterapi
            <Image
              src="/icons/arrow-right.svg"
              alt="Logo"
              width={22}
              height={22}
              className={svgStyling}
            />
          </div>
        </Link>
        <Link href="/terapi/naturterapi" className={linkStyling}>
          <Image src={Forrest} alt="skov" className={imageStyling} />
          <div className={overlayStyling}></div>
          <div className={textStyling}>
            Naturterapi
            <Image
              src="/icons/arrow-right.svg"
              alt="Logo"
              width={22}
              height={22}
              className={svgStyling}
            />
          </div>
        </Link>
        <Link href="/terapi/breathwork" className={linkStyling}>
          <Image src={Oils} alt="olier" className={imageStyling} />
          <div className={overlayStyling}></div>
          <div className={textStyling}>
            Breathwork
            <Image
              src="/icons/arrow-right.svg"
              alt="Logo"
              width={22}
              height={22}
              className={svgStyling}
            />
          </div>
        </Link>
      </div>
    </section>
  );
});

export default ImageLinkSection;
