"use client";
import { useState, useRef } from "react";

function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);
  const answerRefs = useRef({}); // stores a ref for each answer, keyed by their unique id (used to calculate height)

  const handleClick = (id) => {
    setOpenId((prev) => (prev === id ? null : id)); // open the clicked element, or set id to null if it was already open
  };

  return (
    <ul className="pt-2xs pb-xl w-full">
      {items.map(({ id, question, answer }) => {
        const isOpen = openId === id; // checks if openId and id are equal (returns a boolean)

        return (
          <li key={id} className="border-yellow border-b">
            <button
              aria-expanded={isOpen} // for screen readers
              aria-controls={id}
              onClick={() => handleClick(id)}
              className="text-body-lg flex-center py-2xs w-full cursor-pointer"
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

            <div
              id={id}
              ref={(el) => (answerRefs.current[id] = el)} // store the DOM element under its id in a shared object
              style={{
                maxHeight: isOpen
                  ? // .scrollHeight gets the content’s actual height
                    `${answerRefs.current[id]?.scrollHeight}px`
                  : "0px",
              }}
              className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
            >
              <div className="pb-2xs">{answer}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Accordion;
