import Link from "next/link";
import Image from "next/image";

const PictureTextSection = ({
  imageLeft = false,
  imageRound = false,
  imageName,
  imageAlt,
  header,
  copy,
  link,
  linkText,
}) => {
  return (
    <section className="py-2xl section md:my-3xl relative">
      <div
        className={`mb-2xl md:m-0 md:flex md:w-1/2 md:flex-col md:items-start md:justify-center ${imageLeft ? "md:pl-2xl md:ml-auto" : "md:pr-2xl"} md:min-h-[400px]`}
      >
        <h2>{header}</h2>
        <p className="mt-xs mb-xl">{copy}</p>
        <Link href={link} className="button">
          {linkText}
        </Link>
      </div>
      <div
        className={`h-[250px] w-full overflow-hidden rounded-lg md:absolute ${imageLeft ? "md:left-0" : "md:right-0"} ${imageRound ? "md:aspect-1/1 md:h-auto md:rounded-full" : "md:h-full md:rounded-2xl"} md:top-0 md:w-1/2`}
      >
        <Image
          src={imageName}
          alt={imageAlt}
          className="h-full w-full object-cover object-bottom"
        />
      </div>
    </section>
  );
};

export default PictureTextSection;
