"use client";

import Link from "next/link";
import useLayoutStore from "@/lib/store/layoutStore";

export default function Page() {
  const headerHeight = useLayoutStore((state) => state.headerHeight);

  return (
    <main style={{ paddingTop: headerHeight }}>
      <section className="section pt-2xl politik mt-0">
        <title>Privatlivspolitik - Moons by Mogens Gyldenløve</title>
        <h1 className="mb-s">Privatlivspolitik</h1>
        <p>
          Hos Moons by Mogens Gyldenløve tager vi beskyttelsen af dine
          personoplysninger alvorligt. Her kan du læse, hvilke data vi
          indsamler, hvorfor og hvordan vi behandler dem.
        </p>
        <h2>Hvem er vi?</h2>
        <p>
          Moons by Mogens Gyldenløve <br /> Adresse: Adresse navn, XXXX Bynavn{" "}
          <br /> CVR: XXXXXXXX <br /> Email: mail@mail.com
        </p>
        <h2>Hvilke oplysninger vi indsamler</h2>
        <p>
          Vi indsamler kun de oplysninger, der er nødvendige for at tilbyde
          vores services:
        </p>
        <ul>
          <li>Ved booking (via Calendly): Navn, e-mail, evt. telefonnummer</li>
          <li>
            Ved køb (via Shopify): Navn, adresse, e-mail, betalingsoplysninger
          </li>
          <li>Ved kontakt: Navn, e-mail og indhold af besked</li>
          <li>
            Ved brug af siden: Tekniske cookies til at få siden til at fungere
          </li>
        </ul>
        <h2>Formål med indsamlingen</h2>
        <p>Dine oplysninger bruges til:</p>
        <ul>
          <li>At bekræfte og gennemføre bookinger</li>
          <li>At levere købte varer og sende ordrebekræftelser</li>
          <li>At kunne svare dig ved henvendelser</li>
          <li>At forbedre og sikre funktionalitet på websitet</li>
        </ul>
        <h2>Tredjeparter</h2>
        <p>
          Vi benytter følgende tredjepartstjenester, som behandler dine data på
          vores vegne:
        </p>
        <ul>
          <li>Calendly til booking</li>
          <li>Shopify til webshop</li>
          <li>Behold til visning af Instagram-indhold</li>
        </ul>
        <p>Alle tredjeparter overholder GDPR-lovgivningen.</p>
        <h2>Dine rettigheder</h2>
        <p>
          Vi opbevarer kun dine data så længe det er nødvendigt for det formål,
          de er indsamlet til. Du kan til enhver tid kontakte os for at få dine
          oplysninger slettet.
        </p>
        <h2>Tredjeparter</h2>
        <p>Du har ret til at:</p>
        <ul>
          <li>Få indsigt i de oplysninger vi har om dig</li>
          <li>Få rettet forkerte oplysninger</li>
          <li>Få slettet dine oplysninger</li>
          <li>
            Klage til Datatilsynet, hvis du mener, vi ikke behandler dine data
            korrekt
          </li>
        </ul>
        <h2>Kontakt</h2>
        <p>Ved spørgsmål til din datasikkerhed, skriv til: </p>
        <a href="mailto:mail@mail.com">Email: mail@mail.com</a>
      </section>
    </main>
  );
}
