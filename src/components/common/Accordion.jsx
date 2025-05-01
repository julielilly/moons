"use client";
import { useState } from "react";

function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  const handleClick = (id) => {
    setOpenId((prev) => (prev === id ? null : id)); // open the clicked element, or set id to null if it was already open
  };

  return (
    <ul className="pt-2xs pb-xl w-full">
      {items.map(({ id, question, answer }) => {
        const isOpen = openId === id;

        return (
          <li key={id} className="border-yellow border-b">
            <button
              aria-expanded={isOpen} // for screen readers
              aria-controls={id}
              onClick={() => handleClick(id)}
              className="text-body-lg flex-center py-2xs w-full"
            >
              {question}
              <svg
                viewBox="0 0 10 10"
                aria-hidden="true"
                strokeLinecap="round"
                className="stroke-foreground w-3.5"
              >
                <line
                  className={`vertical-line origin-center transition-transform duration-500 ${
                    isOpen ? "rotate-90" : "rotate-0"
                  }`}
                  x1="5"
                  y1="1"
                  x2="5"
                  y2="9"
                />

                <line x1="1" y1="5" x2="9" y2="5" />
              </svg>
            </button>

            <p
              className={`transition-max-height duration-400 overflow-hidden ease-linear ${isOpen ? "pb-2xs max-h-[90px] md:max-h-[135px] lg:max-h-[110px] xl:max-h-[90px]" : "max-h-0"}`}
              id={id}
            >
              {answer}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default Accordion;
