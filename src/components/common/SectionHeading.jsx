import Link from "next/link";

const SectionHeading = ({ heading, copy, center = false, buttonTextColor }) => {
  return (
    <div
      className={`${!center ? "items-start" : ""} flex-center gap-2xs flex-col md:grid md:grid-cols-2`}
    >
      <h2 className={`${center ? "text-center md:text-left" : ""}`}>
        {heading}
      </h2>
      <p className={`${center ? "text-center md:text-left" : ""}`}>{copy}</p>
      <Link
        href="/booking"
        className={`button-link ${buttonTextColor ? buttonTextColor : ""} hover:text-dark-green md:col-2 md:row-1 justify-self-start md:self-start md:justify-self-end`}
      >
        Book din behandling
      </Link>
    </div>
  );
};

export default SectionHeading;
