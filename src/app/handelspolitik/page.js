"use client";

import Link from "next/link";
import useLayoutStore from "@/lib/store/layoutStore";

export default function Page() {
  const headerHeight = useLayoutStore((state) => state.headerHeight);

  return (
    <main style={{ paddingTop: headerHeight }}>
      <section className="section pt-2xl politik mt-0">
        <title>Handelspolitik - Moons by Mogens Gyldenløve</title>
        <h1 className="mb-s">Handelspolitik</h1>
        <p>
          Disse handelsbetingelser gælder for køb foretaget på moons.dk og
          drives af Moons by Mogens Gyldenløve.
        </p>
        <h2>Bestilling og betaling</h2>
        <p>
          Når du bestiller en vare gennem moons.dk, modtager du en
          ordrebekræftelse pr. e-mail. Alle priser er i danske kroner (DKK) og
          inkl. moms. Betaling håndteres via Shopify, som sikrer en sikker
          betalingsproces.
        </p>
        <h2>Levering</h2>
        <p>Vi tilbyder følgende leveringsmuligheder:</p>
        <ul>
          <li>Afhentning i Herlev – gratis (efter aftale)</li>
          <li>Forsendelse i Danmark – 50 DKK</li>
        </ul>
        <p>
          Leveringstid er normalt 3–5 hverdage. Vi sender med DAO eller
          PostNord.
        </p>
        <h2>Fortrydelsesret</h2>
        <p>
          Du har 14 dages fortrydelsesret fra den dag, du modtager varen. Varen
          skal returneres ubrugt og i original stand.
        </p>
        <p>Du betaler selv returfragten.</p>
        <p>
          Kontakt os først på <a href="mailto:mail@mail.com">mail@mail.com</a>{" "}
          for at aftale returnering.
        </p>
        <h2>Returnering og refundering</h2>
        <p>
          Ved godkendt returnering refunderer vi beløbet til din oprindelige
          betalingsmetode inden for 5 hverdage efter modtagelse. Husk at
          vedlægge ordrenummer ved returnering.
        </p>
        <h2>Reklamation</h2>
        <p>
          Er der fejl på varen, kontakt os hurtigst muligt med beskrivelse og
          evt. billeder. Du har 2 års reklamationsret i henhold til købeloven.
        </p>
        <h2>Kontakt</h2>
        <p>Ved spørgsmål til din ordre, kontakt os på:</p>
        <a href="mailto:mail@mail.com">Email: mail@mail.com</a>
      </section>
    </main>
  );
}
