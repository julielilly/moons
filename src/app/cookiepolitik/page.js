"use client";

import Link from "next/link";
import useLayoutStore from "@/lib/store/layoutStore";

export default function Page() {
  const headerHeight = useLayoutStore((state) => state.headerHeight);

  return (
    <main style={{ paddingTop: headerHeight }}>
      <section className="section pt-2xl mt-0">
        <title>Cookiepolitik - Moons by Mogens Gyldenløve</title>
        <h1 className="mb-s">Cookiepolitik</h1>
        <p>Denne hjemmeside bruger kun teknisk nødvendige cookies.</p>
        <p>
          Cookies er små tekstfiler, der gemmes på din computer for at få siden
          til at fungere korrekt. Vi bruger kun cookies, der er nødvendige for
          at:
        </p>
        <ul>
          <li>vise og håndtere webshoppen (Shopify)</li>
          <li>gennemføre bookinger (Calendly)</li>
          <li>vise Instagram-indhold (via Behold)</li>
        </ul>
        <p>
          Vi indsamler ikke statistik, markedsføring eller personlige
          oplysninger gennem cookies.
        </p>
        <p>
          Disse cookies kræver ikke samtykke, men du kan altid blokere eller
          slette dem via dine browserindstillinger.
        </p>
        <p>
          Har du spørgsmål, er du velkommen til at{" "}
          <Link href="/om/kontakt">kontakte os</Link>.
        </p>
      </section>
    </main>
  );
}
