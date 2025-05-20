"use client";

import { useEffect, useState } from "react";
import BookingType from "./BookingType";

const BookingFlow = () => {
  const [eventTypes, setEventTypes] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // run when the component is mounted
  useEffect(() => {
    // fetches event types from the API route
    const fetchEventTypes = async () => {
      const response = await fetch("/api/event-types");
      const data = await response.json(); // parse the response from your API as JSON
      setEventTypes(data);
    };

    fetchEventTypes();
  }, []);

  useEffect(() => {
    // load Calendly script when event is selected
    if (selectedEvent) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [selectedEvent]);

  return (
    <section className="section">
      {!selectedEvent ? (
        <ul className="gap-l grid sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((event) => (
            <BookingType
              key={event.uri}
              event={event}
              setSelectedEvent={setSelectedEvent}
            />
          ))}
          <li className="border-dark-green p-m flex flex-col items-start rounded-lg border">
            <h4 className="mb-xs">Er du i tvivl?</h4>

            <p>Vi hjælper dig gerne med at finde det rigtige forløb.</p>
            <p className="mb-l">
              Kontakt Moons direkte eller book en gratis introsamtale.
            </p>

            <a
              href="/kontakt"
              className="button text-caption/tight mt-auto cursor-pointer"
            >
              Kontakt Moons
            </a>
          </li>
        </ul>
      ) : (
        <div>
          <button
            onClick={() => setSelectedEvent(null)}
            className="gap-2xs hover:gap-xs flex-center text-dark-green mb-s group cursor-pointer transition-all [@media(min-width:697px)]:mb-0"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:-ml-2xs rotate-90 transition-all"
            >
              <path
                d="M21.1834 25.8999L30.6 16.4666C30.7562 16.3116 30.8802 16.1273 30.9648 15.9242C31.0495 15.7211 31.093 15.5032 31.093 15.2832C31.093 15.0632 31.0495 14.8454 30.9648 14.6423C30.8802 14.4392 30.7562 14.2548 30.6 14.0999C30.2877 13.7895 29.8653 13.6152 29.425 13.6152C28.9847 13.6152 28.5623 13.7895 28.25 14.0999L19.9167 22.3499L11.6667 14.0999C11.3544 13.7895 10.932 13.6152 10.4917 13.6152C10.0514 13.6152 9.62896 13.7895 9.31669 14.0999C9.15921 14.2542 9.03392 14.4383 8.94809 14.6414C8.86227 14.8446 8.8176 15.0627 8.81669 15.2832C8.8176 15.5037 8.86227 15.7219 8.94809 15.925C9.03392 16.1281 9.15921 16.3122 9.31669 16.4666L18.7334 25.8999C18.8894 26.0691 19.0788 26.2041 19.2897 26.2964C19.5005 26.3888 19.7282 26.4364 19.9584 26.4364C20.1885 26.4364 20.4162 26.3888 20.627 26.2964C20.8379 26.2041 21.0273 26.0691 21.1834 25.8999V25.8999Z"
                fill="#7C8340"
              />
            </svg>
            Tilbage
          </button>
          <div
            className="calendly-inline-widget h-[1000px] min-w-[320px] md:h-[1100px] [@media(min-width:1059px)]:h-[760px]"
            data-url={`${selectedEvent.scheduling_url}?hide_landing_page_details=1&background_color=ffffff&text_color=000000&primary_color=3f4521&locale=da`}
          ></div>
        </div>
      )}
    </section>
  );
};

export default BookingFlow;
