import Image from "next/image";

const Anmeldelse = ({ extraClasses, right = false, copy, anmelder, type }) => {
  return (
    <div
      className={`${extraClasses ? extraClasses : ""} relative flex flex-col`}
    >
      <Image
        src="/icons/quotes.svg"
        alt="quote"
        width={30}
        height={25}
        className={`top-m absolute ${right ? "-right-[15px] sm:-left-[15px]" : "-left-[15px]"} z-60`}
      />
      <div
        className={`before:bg-background relative flex-1 before:absolute before:-bottom-5 before:z-30 before:block before:h-[55px] before:w-[55px] before:rotate-45 before:rounded-ee-lg ${right ? "before:right-l sm:before:left-l" : "before:left-l"}`}
      >
        <p className="bg-background p-l pr-xl relative z-50 h-full min-h-[150px] rounded-lg">
          {copy}
        </p>
      </div>
      <p
        className={`mt-2xs mb-l gap-2xs text-body-lg flex w-fit items-center font-semibold ${right ? "sm:ml-auto" : "ml-auto"}`}
      >
        {anmelder}
        <span className="text-caption font-normal italic">{type}</span>
      </p>
    </div>
  );
};

export default Anmeldelse;
