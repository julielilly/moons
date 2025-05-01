"use client";

import Image from "next/image";

import ContactForm from "@/components/common/ContactForm";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="section md:pt-3xl gap-m md:gap-2xl md:gap-y-m grid pt-20 md:grid-cols-2">
        <h1 className="mt-xs md:col-span-2">Kom i kontakt med Moons</h1>
        <div>
          <p>
            Har du spørgsmål, tanker eller er i tvivl om, hvilken vej der passer
            bedst til dig? Så er du meget velkommen til at række ud.
          </p>
          <p>
            Moons er et sted for ro, nærvær og fordybelse – og det gælder også
            kommunikationen. Din besked bliver læst med opmærksomhed, og du får
            svar så hurtigt som muligt.
          </p>
          <p className="font-semibold">
            Ønsker du at booke en session, så brug venligst
            <Link href="booking"> bookingsiden</Link>, hvor du kan finde alle
            tilgængelige tider og ydelser.
          </p>
          <p>
            <span>Moons</span> <br />
            Adresse navn <br /> XXXX Bynavn
          </p>
          <p>
            <a href="tel:+4500000000" className="font-normal">
              Tlf: 00 00 00 00
            </a>
            <br />
            <a href="mailto:mail@mail.com" className="font-normal">
              Mail: mail@mail.com
            </a>
          </p>
          <p>CVR: 00000000</p>
          <div className="gap-2xs mt-s flex">
            <a target="blank" href="https://www.instagram.com/moons._____/">
              <Image
                src="/icons/instagram-icon.svg"
                alt="Instagram logo"
                width={20}
                height={20}
                className="invert"
              />
            </a>
            <a
              target="blank"
              href="https://www.facebook.com/profile.php?id=1428230594"
            >
              <Image
                src="/icons/facebook-icon.svg"
                alt="Facebook logo"
                width={20}
                height={20}
                className="invert"
              />
            </a>
            <a
              target="blank"
              href="https://open.spotify.com/user/113370700?si=1ae60158d81a484d"
            >
              <Image
                src="/icons/spotify-icon.svg"
                alt="Spotify logo"
                width={20}
                height={20}
                className="invert"
              />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
