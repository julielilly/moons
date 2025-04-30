import Anmeldelse from "./common/Anmeldelse";
import SectionHeading from "./common/SectionHeading";

const Anmeldelser = () => {
  return (
    <section className="bg-light-yellow -mb-3xl md:-mb-2xl relative pb-0">
      <div className="section py-2xl">
        <SectionHeading
          heading="Det siger andre om Moons"
          copy="Moons er bygget på relationer og tillid. Læs hvordan tidligere deltagere har oplevet ro, transformation og ny kontakt med sig selv."
          center={true}
          buttonTextColor="md:text-light-yellow"
        />

        <div className="mt-m sm:gap-s mb-[90px] grid sm:grid-cols-2 md:grid-cols-3">
          <Anmeldelse />
          <Anmeldelse right={true} />
          <Anmeldelse extraClasses="hidden md:block" />
        </div>
      </div>

      {/* curve */}
      <div className="absolute -bottom-1 left-0 h-[90px] w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-full w-[150%]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Anmeldelser;
