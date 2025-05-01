import Link from "next/link";
import Image from "next/image";
import Accordion from "./Accordion";

const PictureTextSection = ({
  imageLeft = false,
  imageRound = false,
  imageName,
  imageAlt,
  header,
  copy,
  link,
  linkText,
  faqItems = false,
  children,
}) => {
  return (
    <section className="sm:py-2xl section md:my-3xl md:aspect-2/1 relative md:flex md:items-center">
      <div
        className={`mb-2xl md:m-0 md:flex md:w-1/2 md:flex-col md:items-start md:justify-center ${imageLeft ? "md:pl-2xl md:ml-auto" : "md:pr-2xl"} md:min-h-[400px]`}
      >
        <h2>{header}</h2>

        {faqItems ? (
          <Accordion items={faqItems} />
        ) : (
          <div className="mt-xs mb-xl">
            <p>{copy}</p>
            {children && <div className="mt-2xs">{children}</div>}
          </div>
        )}

        <Link href={link} className="button">
          {linkText}
        </Link>
      </div>

      <div
        className={`h-[250px] w-full overflow-hidden rounded-lg md:absolute md:-translate-y-1/2 ${imageLeft ? "md:left-0" : "md:right-0"} ${imageRound ? "md:aspect-1/1 md:h-auto md:rounded-full" : "md:h-full md:rounded-2xl"} md:top-1/2 md:w-1/2`}
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
