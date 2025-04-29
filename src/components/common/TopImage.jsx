import Image from "next/image";
import HeroImage from "@/app/assets/top-image.png";
import Link from "next/link";

const TopImage = () => {
  return (
    <div className="relative grid">
      <div className="col-span-full row-span-full">
        <Image
          src={HeroImage}
          alt="sauna"
          className="h-[80svh] min-h-full w-full object-cover"
        />
      </div>

      <div className="gradient-left-right absolute h-full w-full"></div>
      <div className="gradient-top-bottom absolute h-full w-full"></div>

      <div className="section py-3xl relative col-span-full row-span-full flex flex-col justify-center">
        <h1 className="text-background pt-m">
          Find ro, balance og nærvær <br /> hos Moons
        </h1>
        <p className="text-background max-w-100 my-s">
          Moons skaber rum for dig, der søger en pause fra hverdagen. Gennem
          saunagus, naturterapi, breathwork og traumeterapi guider vi dig
          nænsomt hjem i dig selv.
        </p>
        <Link
          href="booking"
          className="button py-2xs px-l hover:border-background hover:text-background self-start"
        >
          Book din tid i dag
        </Link>
      </div>
    </div>
  );
};

export default TopImage;
