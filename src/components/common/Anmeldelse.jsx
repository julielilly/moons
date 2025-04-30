import Image from "next/image";

const Anmeldelse = ({ extraClasses, right = false }) => {
  return (
    <div className={`${extraClasses ? extraClasses : ""} relative`}>
      <Image
        src="/icons/quotes.svg"
        alt="quote"
        width={30}
        height={25}
        className={`top-m absolute ${right ? "-right-[15px] sm:-left-[15px]" : "-left-[15px]"} z-60`}
      />
      <div
        className={`before:bg-background relative before:absolute before:-bottom-5 before:z-30 before:block before:h-[55px] before:w-[55px] before:rotate-45 before:rounded-ee-lg ${right ? "before:right-l sm:before:left-l" : "before:left-l"}`}
      >
        <p className="bg-background p-l pr-xl relative z-50 min-h-[150px] rounded-lg">
          En tryg og intuitiv guidning – jeg følte mig virkelig mødt. Det var
          som at kunne trække vejret helt ned i kroppen igen.
        </p>
      </div>
      <p
        className={`mt-2xs mb-l gap-2xs text-body-lg flex w-fit items-center font-semibold ${right ? "sm:ml-auto" : "ml-auto"}`}
      >
        Anna M.
        <span className="text-caption font-normal italic">breathwork</span>
      </p>
    </div>
  );
};

export default Anmeldelse;
