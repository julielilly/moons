import Link from "next/link";

const FooterCTA = () => {
  return (
    <div className="bg-light-yellow py-xs">
      <div className="section sm:flex-center gap-s flex-center flex-col sm:flex-row">
        <p className="h2">Klar til at finde din balance?</p>
        <Link
          href="/booking"
          className="button py-2xs px-l hover:bg-dark-green text-dark-green hover:text-light-yellow whitespace-nowrap bg-transparent"
        >
          Book din behandling
        </Link>
      </div>
    </div>
  );
};

export default FooterCTA;
