"use client";

import PictureTextSection from "@/components/common/PictureTextSection";
import TopImage from "@/components/common/TopImage";
import Anmeldelser from "@/components/Anmeldesler";

import HeroImage from "@/app/assets/sauna-4.jpg";
import Sauna from "@/app/assets/sauna-light.jpg";
import outsideSauna from "@/app/assets/tondesauna.png";
import Sunahue from "@/app/assets/hat.jpg";
import barrelSauna from "@/app/assets/sauna-barrel.jpg";

export default function Home() {
  const faqItems = [
    {
      id: "1",
      question: "Hvor foregår saunagus?",
      answer:
        "Jeg laver på nuværende tidspunkt gus i DR-byen og ved Inipi på Amager.",
    },
    {
      id: "2",
      question: "Hvordan foregår en gus-session?",
      answer:
        "En typisk session varer omkring 60–75 minutter og består af flere gusrunder med æteriske olier, guidet åndedræt og rolig musik. Der er pauser mellem rundene til afkøling og refleksion.",
    },
    {
      id: "3",
      question: "Hvad skal jeg medbringe?",
      answer:
        "Du skal medbringe badetøj, 1-2 håndklæder (ét til at sidde på, ét til at tørre dig), og evt. badekåbe og sandaler.",
    },
    {
      id: "4",
      question: "Er gus egnet for alle?",
      answer:
        "De fleste kan deltage, men hvis du er gravid, har hjerteproblemer eller tager visse typer medicin, anbefales det at tale med lægen først. Du er altid velkommen til at kontakte mig ved spørgsmål.",
    },
    {
      id: "5",
      question: "Kan jeg booke en privat eller firma-gus?",
      answer:
        "Ja! Jeg tilbyder både private sessioner og særligt tilrettelagte firmaarrangementer. Skriv til mig, så finder vi en løsning, der passer til jeres behov og ønsker.",
    },
  ];

  return (
    <main>
      <TopImage
        copy="En sanselig saunagus hos Moons er mere end varme og dufte. Det er et rum, hvor du bliver mødt i stilhed, bevæget i kroppen og forbundet til naturen. Gennem æteriske olier, varme og guidede åndedræt skabes en helhedsoplevelse for både krop og sind."
        header="Giv slip – og lad gusen guide dig til ro"
        imageName={HeroImage}
        imageAlt="sauna"
      />
      <PictureTextSection
        imageName={Sauna}
        imageAlt="sauna"
        header="Hvad er saunagus – og hvad kan det gøre for dig?"
        copy="Saunagus er en meditativ oplevelse i varmen, hvor du gennem guidede duftrejser og rytmiske svingninger af varme opnår dyb afspænding. Gus hos Moons er mere end wellness – det er en kropslig praksis, der skaber rum til stilhed og regenerering.
        Uanset om du søger afkobling, støtte til mental balance eller et supplement til din terapi, kan gus være et naturligt sted at begynde."
        link="/booking"
        linkText="Book Moons som gusmester"
      />
      <PictureTextSection
        imageName={outsideSauna}
        imageAlt="Tønde sauna"
        header="Firmaevents og private sessioner"
        copy="Skab rum for ro og fordybelse med en saunagus tilpasset jeres team eller fællesskab. Moons tilbyder private sessioner og firmaevents, hvor fokus er på tilstedeværelse, fælles nærvær og sanselig afkobling.
        Et skræddersyet forløb kan f.eks. bruges som led i teambuilding, lederudvikling eller i kombination med breathwork og samtaler."
        link="/booking"
        linkText="Se ledige tider"
        imageLeft={true}
      />
      <Anmeldelser />
      <PictureTextSection
        imageName={Sunahue}
        imageAlt="Orange saunahue"
        header="En hue med varme og visdom"
        copy="Moons’ håndlavede saunahue er skabt i naturmaterialer og designet til at understøtte din gusoplevelse. Udover at beskytte mod overophedning, hjælper huen med at holde fokus og nærvær under sessionen.
        Inspireret af naturen og med respekt for ritualets rødder er den både funktionel og symbolsk – en forlængelse af din praksis."
        link="/shop"
        linkText="Gå til shoppen og se huen"
      />
      <PictureTextSection
        imageName={barrelSauna}
        imageAlt="Aauna"
        header="Ofte stillede spørgsmål om saunagus"
        link="/om/kontakt"
        linkText="I tvivl? kontakt Moons"
        imageLeft={true}
        faqItems={faqItems}
      />
    </main>
  );
}
