"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();

  const formGroup = "w-full";
  const input = "border w-full rounded-md border-yellow px-2xs py-1 ";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v76l5a6",
        "template_dj0dzxp",
        formRef.current,
        "M7BvIaevY6EYH9WWM",
      )
      .then(
        (result) => {
          alert("Beskeden er sendt!");
          formRef.current.reset(); // resetter formen
        },
        (error) => {
          alert("Noget gik galt, prøv igen.");
          console.error("FEJL:", error.status, error.text);
        },
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="gap-x-xs grid w-full self-start sm:grid-cols-2"
    >
      <div className={`${formGroup} sm:col-span-2`}>
        <label htmlFor="name">Navn*</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          minLength="2"
          required
          className={input}
        />
      </div>

      <div className={`${formGroup} mt-xs`}>
        <label htmlFor="email">Email*</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={input}
        />
      </div>

      <div className={`${formGroup} mt-xs`}>
        <label htmlFor="phone">Tlf*</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="numeric" // tells mobile keyboards to show numbers
          required
          className={`${input}`}
        />
      </div>

      <div className={`${formGroup} mt-xs sm:col-span-2`}>
        <label htmlFor="message">Besked*</label>
        <textarea
          id="message"
          name="message"
          required
          className={`${input} h-25`}
        />
      </div>

      <button
        type="submit"
        className="button mt-m sm:col-2 bg-light-yellow border-light-yellow text-dark-green cursor-pointer self-start hover:bg-transparent sm:justify-self-end"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
